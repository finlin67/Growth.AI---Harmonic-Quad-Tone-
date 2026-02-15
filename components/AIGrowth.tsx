'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { TrendingUp, Brain, Sparkles, LineChart } from 'lucide-react';

// Chart dimensions and constants
const CHART_WIDTH = 240;
const CHART_HEIGHT = 80;

export default function AIGrowth() {
  const [chartData, setChartData] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Generate mock data for the line chart
    const data = [42.1];
    for (let i = 1; i < 12; i++) {
      const prev = data[i-1];
      const newValue = prev + (Math.random() * 6 - 3);
      data.push(Math.max(20, parseFloat(newValue.toFixed(1))));
    }
    setChartData(data);
  }, []);

  // Framer Motion v12+ compatible animation variants (ease property removed)
  const floatVariant = (delay: number): Variants => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        delay: delay,
      },
    },
  });

  // SVG path calculation helpers
  const getMinMax = (data: number[]) => {
      if (data.length === 0) return { min: 0, max: 1 };
      const min = Math.min(...data);
      const max = Math.max(...data);
      return { min, max };
  };

  const createPath = (data: number[]) => {
    if (data.length < 2) return "";
    const { min, max } = getMinMax(data);
    const range = max - min === 0 ? 1 : max - min;

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * CHART_WIDTH;
        const y = CHART_HEIGHT - ((d - min) / range * (CHART_HEIGHT - 10)) + 5;
        return `${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" L ");
    
    return `M ${points}`;
  };
  
  const path = createPath(chartData);
  const areaPath = `${path} L ${CHART_WIDTH},${CHART_HEIGHT} L 0,${CHART_HEIGHT} Z`;

  const lastDataPoint = chartData.length > 0 ? chartData[chartData.length - 1] : 42;

  return (
    <div className="relative aspect-square w-full max-w-[600px] mx-auto flex items-center justify-center select-none">
      {/* Background Animated Dots */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div variants={floatVariant(0)} animate="animate" className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full" />
        <motion.div variants={floatVariant(2)} animate="animate" className="absolute top-3/4 left-1/3 w-2 h-2 bg-red-500 rounded-full" />
        <motion.div variants={floatVariant(1)} animate="animate" className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full" />
        <motion.div variants={floatVariant(3)} animate="animate" className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-green-500 rounded-full" />
      </div>

      {/* Center Main Card */}
      <div className="relative z-20 flex flex-col items-center justify-between p-6 bg-slate-900 border-4 border-slate-700 h-[300px] w-[300px] md:h-[360px] md:w-[360px] shadow-2xl shadow-black/50">
        <div className="flex flex-col items-center">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
              Revenue Growth
            </p>
            <h2 className="text-5xl md:text-6xl font-bold leading-none tracking-tighter bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent">
              +{lastDataPoint.toFixed(1)}%
            </h2>
            <p className="text-white/80 font-bold text-sm mt-1 uppercase tracking-tighter">
              Conversion Lift
            </p>
        </div>
        
        {/* Interactive Line Chart */}
        <div className="relative w-full h-[120px] flex flex-col items-center justify-center">
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-4 bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded shadow-lg z-50 pointer-events-none"
                    >
                        {chartData[hoveredIndex].toFixed(1)}%
                    </motion.div>
                )}
            </AnimatePresence>
            <svg width={CHART_WIDTH} height={CHART_HEIGHT} viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} className="overflow-visible">
                <defs>
                    <linearGradient id="chart-area-gradient" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="chart-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fcd34d" />
                        <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                </defs>
                <motion.path
                    d={areaPath}
                    fill="url(#chart-area-gradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#chart-line-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                />
                {chartData.map((d, i) => {
                    const { min, max } = getMinMax(chartData);
                    const range = max - min === 0 ? 1 : max - min;
                    const x = (i / (chartData.length - 1)) * CHART_WIDTH;
                    const y = CHART_HEIGHT - ((d - min) / range * (CHART_HEIGHT - 10)) + 5;
                    return (
                        <g key={i}>
                            <motion.circle
                                cx={x}
                                cy={y}
                                r={hoveredIndex === i ? 6 : 4}
                                fill="#f59e0b"
                                stroke="#0f172a"
                                strokeWidth="2"
                                className="transition-all duration-150"
                            />
                            <rect
                                x={x - 10}
                                y="0"
                                width="20"
                                height={CHART_HEIGHT}
                                fill="transparent"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ cursor: 'pointer' }}
                            />
                        </g>
                    )
                })}
            </svg>
            <div className="w-full flex justify-between text-[10px] text-white/40 mt-1 px-1">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
            </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white/40 text-[10px] font-medium uppercase tracking-[0.2em]">
            Growth Engine v2.1
          </span>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mt-2"></div>
        </div>
      </div>

      {/* Side Panels */}
      <motion.div variants={floatVariant(0)} animate="animate" className="absolute top-[10%] left-[-5%] md:left-0 z-30 bg-[#1e293b] border-l-4 border-blue-500 p-4 w-[160px] md:w-[200px] shadow-lg">
        <div className="flex items-center gap-3 mb-2"> <TrendingUp className="w-4 h-4 text-blue-400" /> <span className="text-xs font-bold text-white">Market Intel</span> </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full bg-slate-700 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5 }} className="h-full bg-blue-500" />
          </div>
          <p className="text-[10px] text-white/50">Analyzing 24 data streams</p>
        </div>
      </motion.div>
      <motion.div variants={floatVariant(1.5)} animate="animate" className="absolute bottom-[15%] left-[-2%] md:left-[5%] z-30 bg-[#1e293b] border-l-4 border-green-500 p-4 w-[160px] md:w-[200px] shadow-lg">
        <div className="flex items-center gap-3 mb-2"> <Brain className="w-4 h-4 text-green-400" /> <span className="text-xs font-bold text-white">Sentiment Analysis</span> </div>
        <div className="flex items-end gap-1 h-8">
          <div className="w-2 bg-green-500/20 h-1/2"></div><div className="w-2 bg-green-500/40 h-3/4"></div><div className="w-2 bg-green-500 h-full"></div><div className="w-2 bg-green-400 h-2/3"></div><div className="w-2 bg-green-300 h-1/3"></div>
        </div>
      </motion.div>
      <motion.div variants={floatVariant(0.8)} animate="animate" className="absolute top-[15%] right-[-5%] md:right-0 z-30 bg-[#1e293b] border-l-4 border-red-500 p-4 w-[180px] md:w-[220px] shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-tighter">Messaging Node</span>
          <span className="text-[9px] bg-red-600 text-white px-1.5 border border-red-500">99.2% ROI</span>
        </div>
        <p className="text-[11px] text-white/80 leading-relaxed italic">&quot;Unlock unprecedented scale with AI-driven market intelligence...&quot;</p>
      </motion.div>
      <motion.div variants={floatVariant(2.2)} animate="animate" className="absolute bottom-[10%] right-[-2%] md:right-[5%] z-30 bg-[#1e293b] border-l-4 border-purple-500 p-4 w-[180px] md:w-[220px] shadow-lg">
        <div className="flex items-center gap-3 mb-2"> <Sparkles className="w-4 h-4 text-purple-400" /> <span className="text-xs font-bold text-white">Growth Assets</span> </div>
        <div className="flex flex-col gap-1.5">
          <div className="h-2 w-full bg-slate-700"></div><div className="h-2 w-2/3 bg-slate-700"></div><div className="h-2 w-4/5 bg-purple-600"></div>
        </div>
      </motion.div>
      
      {/* Connecting SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 600 600">
        <path d="M150 120 Q 200 150, 250 250" fill="none" stroke="url(#blue-grad-line)" strokeWidth="2"/>
        <path d="M160 500 Q 220 450, 260 350" fill="none" stroke="url(#green-grad-line)" strokeWidth="2"/>
        <path d="M350 250 Q 400 180, 480 140" fill="none" stroke="url(#red-grad-line)" strokeWidth="2"/>
        <path d="M350 350 Q 420 420, 480 500" fill="none" stroke="url(#purple-grad-line)" strokeWidth="2"/>
        <defs>
          <linearGradient id="blue-grad-line" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#2dd4bf"/></linearGradient>
          <linearGradient id="red-grad-line" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stopColor="#ef4444"/><stop offset="100%" stopColor="#f97316"/></linearGradient>
          <linearGradient id="purple-grad-line" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stopColor="#a855f7"/><stop offset="100%" stopColor="#ec4899"/></linearGradient>
          <linearGradient id="green-grad-line" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="#84cc16"/></linearGradient>
        </defs>
      </svg>
    </div>
  );
}
