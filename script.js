const BORDER_SIZE = 4;
const panels = document.querySelectorAll(".resizable-panel");

function calculateWidths() {
  const numOfpanels = Array.from(panels).length;
  const ww = window.innerWidth;
  const calcWidth = ww / numOfpanels;
  panels.forEach((p) => {
    p.style.width = `${calcWidth}px`;
  });
}

window.onresize = panels.forEach((panel) => {
  const resize = (e) => {
    panel.style.width =
      parseInt(getComputedStyle(panel, "").width) + e.movementX + "px";
    const nextPanel = panel.nextSibling.nextSibling;
    if (nextPanel) {
      const n = e.movementX >= 1 ? -e.movementX : e.movementX * -1;
      console.log(n);
      nextPanel.style.width =
        parseInt(getComputedStyle(nextPanel, "").width) + n + "px";
    }
  };

  panel.addEventListener(
    "mousedown",
    (e) => {
      if (e.offsetX > BORDER_SIZE) {
        document.addEventListener("mousemove", resize, false);
      }
    },
    false
  );

  document.addEventListener(
    "mouseup",
    () => {
      document.removeEventListener("mousemove", resize, false);
    },
    false
  );
});
//const panel = document.getElementById("panel1");
