import P5 from "p5";
import "./style.css";

function deleteAll() {
  document.querySelectorAll("canvas").forEach((canvas: HTMLCanvasElement) => {
    canvas.remove();
  });
}

async function start() {
  const selector = document.querySelector("#selector") as HTMLSelectElement;

  const experiments = await import(`./**/index.ts`);

  const experimentsNames = Object.keys(experiments).filter(
    name => name !== "undefined" && name !== "default"
  );

  selector.value = experimentsNames[0];

  experimentsNames.forEach(name => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(name));
    option.setAttribute("value", name);
    selector.appendChild(option);
  });

  const select = async (name: string) => {
    deleteAll();
    new P5(experiments[name].default);
  };

  select(experimentsNames[0]);

  selector.addEventListener("change", () => {
    select(selector.value);
  });
}

start();
