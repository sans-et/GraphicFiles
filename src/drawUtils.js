export const stepByStep = (ctx, x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  const xInc = dx / steps;
  const yInc = dy / steps;

  let x = x1,
    y = y1;
  for (let i = 0; i <= steps; i++) {
    ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    x += xInc;
    y += yInc;
  }
};

export const dda = (ctx, x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  const xInc = dx / steps;
  const yInc = dy / steps;

  let x = x1,
    y = y1;
  for (let i = 0; i <= steps; i++) {
    ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    x += xInc;
    y += yInc;
  }
};

export const bresenhamLine = (ctx, x1, y1, x2, y2) => {
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  let sx = x1 < x2 ? 1 : -1;
  let sy = y1 < y2 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    ctx.fillRect(x1, y1, 1, 1);
    if (x1 === x2 && y1 === y2) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
  }
};

export const bresenhamCircle = (ctx, xc, yc, r) => {
  let x = 0,
    y = r;
  let d = 3 - 2 * r;

  while (x <= y) {
    ctx.fillRect(xc + x, yc + y, 1, 1);
    ctx.fillRect(xc - x, yc + y, 1, 1);
    ctx.fillRect(xc + x, yc - y, 1, 1);
    ctx.fillRect(xc - x, yc - y, 1, 1);
    ctx.fillRect(xc + y, yc + x, 1, 1);
    ctx.fillRect(xc - y, yc + x, 1, 1);
    ctx.fillRect(xc + y, yc - x, 1, 1);
    ctx.fillRect(xc - y, yc - x, 1, 1);

    if (d < 0) d += 4 * x + 6;
    else {
      d += 4 * (x - y) + 10;
      y--;
    }
    x++;
  }
};
