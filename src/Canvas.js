import React, { useEffect, useRef } from "react";
import { stepByStep, dda, bresenhamLine, bresenhamCircle } from "./drawUtils";

const Canvas = ({ algorithm, parameters }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистить Canvas

    const { x1, y1, x2, y2, radius } = parameters;

    switch (algorithm) {
      case "step":
        stepByStep(ctx, x1, y1, x2, y2);
        break;
      case "dda":
        dda(ctx, x1, y1, x2, y2);
        break;
      case "bresenham-line":
        bresenhamLine(ctx, x1, y1, x2, y2);
        break;
      case "bresenham-circle":
        bresenhamCircle(ctx, x1, y1, radius);
        break;
      default:
        break;
    }
  }, [algorithm, parameters]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "1px solid black" }}
    />
  );
};

export default Canvas;
