function angle(mx, my, bx, by) {
  let dx = mx - bx;
  let dy = my - by;
  let rad = Math.atan2(dy, dx);
  return rad;
}

const img = document.querySelector("#back");
let box = img.getBoundingClientRect();
let bx = box.left + box.width / 2;
let by = box.top + box.height / 2;

window.addEventListener("resize", () => {
  box = img.getBoundingClientRect();
  bx = box.left + box.width / 2;
  by = box.top + box.height / 2;
});

document.addEventListener("mousemove", (e) => {
  let mx = e.clientX;
  let my = e.clientY;
  let theta = angle(mx, my, bx, by);
  const eyes = document.getElementsByClassName("eye");
  Array.from(eyes).forEach((e) => {
    e.style.transform = `rotate(${theta + 4.7}rad)`;
  });
});
