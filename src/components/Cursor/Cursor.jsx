import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const mouseMovingRef = useRef(false);
  const timerRef = useRef(null);
  const mouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  useEffect(() => {
    if (isTouchDevice()) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      mouseRef.current = { x, y };
      mouseMovingRef.current = true;

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        mouseMovingRef.current = false;
      }, 100);
    };

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const draw = () => {
      if (mouseMovingRef.current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        trailRef.current.forEach((point, index) => {
          const previousPoint =
            index === 0 ? mouseRef.current : trailRef.current[index - 1];
          point.dx += 0.3 * (previousPoint.x - point.x) + 2 * Math.random();
          point.dy += 0.3 * (previousPoint.y - point.y) + 2 * Math.random();
          point.dx *= 0.5;
          point.dy *= 0.5;
          point.x += point.dx;
          point.y += point.dy;
        });

        context.beginPath();
        context.moveTo(
          trailRef.current[0].x + 2 * Math.random(),
          trailRef.current[0].y + 2 * Math.random()
        );

        for (let i = 0; i < trailRef.current.length - 1; i++) {
          const n =
            lerp(trailRef.current[i].x, trailRef.current[i + 1].x, 0.5) +
            2 * Math.random();
          const m =
            lerp(trailRef.current[i].y, trailRef.current[i + 1].y, 0.5) +
            2 * Math.random();
          context.quadraticCurveTo(
            trailRef.current[i].x + 50 * Math.random() - 25,
            trailRef.current[i].y + 50 * Math.random() - 25,
            n,
            m
          );
        }

        context.strokeStyle = "rgb(255, 255, 255)";
        context.lineWidth = 3;
        context.stroke();
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(draw);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initTrail = () => {
      trailRef.current = new Array(4).fill(null).map(() => ({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        dx: 0,
        dy: 0,
      }));
    };

    initTrail();
    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: "none",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default Cursor;
