'use client';

import { HexColorPicker } from 'react-colorful';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#8ACE00');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Redraw with current text and color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = '56px 微软雅黑';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 文字换行逻辑
    const maxCharsPerLine = 10;
    const lineHeight = 70;
    const lines = [];
    
    // 分割文本为多行
    for (let i = 0; i < text.length; i += maxCharsPerLine) {
      lines.push(text.substring(i, i + maxCharsPerLine));
    }
    
    // 计算垂直居中位置
    const startY = (canvas.height - (lines.length * lineHeight)) / 2 + lineHeight/2;
    
    // 绘制多行文本
    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width/2, startY + (index * lineHeight));
    });
  }, [text, color]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw brat tag with text and color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px 微软雅黑';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    
    // Download as PNG
    const link = document.createElement('a');
    link.download = 'brat-tag.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen p-2 flex flex-col items-center justify-center bg-gray-50">
      <h3 className="text-2xl font-bold mb-1 text-black">Brat标注工具站</h3>
      <h3 className="text-2xl font-bold mb-1 text-black">Brat Tag Gen</h3>
      <div className="mb-1 w-full max-w-md">
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-1 border border-[#333] text-[#000] rounded"
          placeholder='输入文字'
        />
      </div>
      
      <div className="mb-2">
        <label className="block mb-1 text-black">选择颜色</label>
        <HexColorPicker color={color} onChange={setColor} className="h-16" />
      </div>
      
      <div className="mb-4">
        <canvas 
          ref={canvasRef} 
          width={448} 
          height={448} 
          className="border"
          style={{ backgroundColor: color }}
        />
      </div>
      
      <button 
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        下载标签
      </button>
    </div>
  );
}
