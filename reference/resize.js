import Legra from "https://unpkg.com/legra?module";

const myCanvas = document.getElementById("brick_maze");
const ctx = myCanvas.getContext("2d");

const slide1Canvas = document.getElementById("slide1");
const ctx1 = slide1Canvas.getContext("2d");

const l = new Legra(ctx, 20);
const l1 = new Legra(ctx1, 20);


