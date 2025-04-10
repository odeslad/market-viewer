import { useEffect, useRef } from 'react';
import './App.css'

function App() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const candlestickData = [
    { open: 200, close: 230, high: 350, low: 90 },
    { open: 240, close: 220, high: 300, low: 200 },
    { open: 210, close: 250, high: 280, low: 190 },
    { open: 260, close: 240, high: 290, low: 230 },
    { open: 200, close: 230, high: 350, low: 90 },
    { open: 240, close: 220, high: 300, low: 200 },
    { open: 210, close: 250, high: 280, low: 190 },
    { open: 260, close: 240, high: 290, low: 230 },
    { open: 200, close: 230, high: 350, low: 90 },
    { open: 240, close: 220, high: 300, low: 200 },
    { open: 210, close: 250, high: 280, low: 190 },
    { open: 260, close: 240, high: 290, low: 230 },
    { open: 200, close: 230, high: 350, low: 90 },
    { open: 240, close: 220, high: 300, low: 200 },
    { open: 210, close: 250, high: 280, low: 190 },
    { open: 260, close: 240, high: 290, low: 230 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    canvas.width = 800;
    canvas.height = 600;

    function drawCandlestick(data: { open: number; close: number; high: number; low: number }, x: number) {
      const candleWidth = 10;

      const isBullish = data.close > data.open;
      ctx.fillStyle = isBullish ? 'green' : 'red';
      ctx.strokeStyle = 'white';

      const highY = canvas.height - data.high;
      const lowY = canvas.height - data.low;
      ctx.beginPath();
      ctx.moveTo(x + candleWidth / 2, highY);
      ctx.lineTo(x + candleWidth / 2, lowY);
      ctx.stroke();

      const openY = canvas.height - data.open;
      const closeY = canvas.height - data.close;
      const bodyY = Math.min(openY, closeY);
      const bodyHeight = Math.abs(openY - closeY);
      ctx.fillRect(x, bodyY, candleWidth, bodyHeight);
    }

    candlestickData.forEach((data, index) => {
      const x = 100 + index * 15;
      drawCandlestick(data, x);
    });
  }, []);


  return <canvas ref={canvasRef} />;
}

export default App
