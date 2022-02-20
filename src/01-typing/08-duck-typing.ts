// duck typing
// if it looks like a ... treat it like a ...

interface Point {
  x: number;
  y: number;
}

function hypot(p: Point) {
  return (p.x ** 2 + p.y ** 2) ** 0.5; // square of the sides
}

const pt = { x: 3, y: 4 };

console.log(hypot(pt));
