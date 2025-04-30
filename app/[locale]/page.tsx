'use client';

import { useTranslations } from 'next-intl';
import { HexColorPicker } from 'react-colorful';
import { useState, useRef } from 'react';

export default function Home() {
  const t = useTranslations('Index');
  const [text, setText] = useState('');
  const [color, setColor] = useState('#aabbcc');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw brat tag with text and color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = '20px Arial';
    ctx.fillText(text, 10, 30);
    
    // Download as PNG
    const link = document.createElement('a');
    link.download = 'brat-tag.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <p className="mb-8">{t('description')}</p>
      
      <div className="mb-4 w-full max-w-md">
        <label className="block mb-2">{t('textInputLabel')}</label>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-8">
        <label className="block mb-2">{t('colorPickerLabel')}</label>
        <HexColorPicker color={color} onChange={setColor} />
        <div className="mt-2 text-center">{color}</div>
      </div>
      
      <div className="mb-8">
        <canvas 
          ref={canvasRef} 
          width={300} 
          height={150} 
          className="border"
          style={{ backgroundColor: color }}
        />
      </div>
      
      <button 
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {t('downloadButton')}
      </button>
    </main>
  );
}