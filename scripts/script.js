import Legra from "https://unpkg.com/legra?module";

const myCanvas = document.getElementById("brick_maze");
const ctx = myCanvas.getContext("2d");

const slide1Canvas = document.getElementById("slide1");
const ctx1 = slide1Canvas.getContext("2d");

const slide2Canvas = document.getElementById("slide2");
const ctx2 = slide2Canvas.getContext("2d")

const slide3Canvas = document.getElementById("slide3");
const ctx3 = slide3Canvas.getContext("2d")

const slide4Canvas = document.getElementById("slide4");
const ctx4 = slide4Canvas.getContext("2d")

const slide5Canvas = document.getElementById("slide5");
const ctx5 = slide5Canvas.getContext("2d")

const l = new Legra(ctx, 15);
const l1 = new Legra(ctx1, 10);
const l2 = new Legra(ctx2, 10);
const l3 = new Legra(ctx3, 10);
const l4 = new Legra(ctx4, 10);
const l5 = new Legra(ctx5, 10);
const img = new Image();

l.rectangle(0, 0, 100, 40, { filled: true, color: 'white' });
img.src = "/images/polaroid.jpg";
l.drawImage(img, [2, 1]);
img.src = "/images/cat.jpg";
l.drawImage(img, [25, 24]);
img.src = "/images/golden_gate.jpg";
l.drawImage(img, [50, 18]);
img.src = "/images/kyle.jpg";
l.drawImage(img, [5, 17]);
img.src = "/images/sahib.jpg";
l.drawImage(img, [34, 4]);

// img.src = "/images/icon-square.jpg";
// l.drawImage(img, [50, 6]);

img.src = "/images/polaroid.jpg";
l1.drawImage(img, [10, 5]);

img.src = "/images/cat.jpg";
l2.drawImage(img, [10, 5]);

img.src = "/images/golden_gate.jpg";
l3.drawImage(img, [10, 5]);

img.src = "/images/kyle.jpg";
l4.drawImage(img, [10, 5]);

img.src = "/images/sahib.jpg";
l5.drawImage(img, [10, 5]);
//

/*
l.arc(8, 10, 8, 8, -Math.PI * 0.5, Math.PI * 0.5, false, {
  color: 'red'
});


l.circle(8, 9, 1, { filled: true, color: 'black' });

l.circle(12, 9, 1, { filled: true, color: 'black' });

/*
/// what should i make these rectangles?!!?!? rs
l.linearPath([
  [1, 1],
  [10, 1],
  [1, 10],
  [10, 10]
]);

l.line(11, 11, 1, 1, { color: 'yellow' });
l.rectangle(20, 1, 26, 16, { filled: true, color: 'red' });



// how   do i link an image....
l.drawImage('../cat.jpg', [5, 5]);


*/
