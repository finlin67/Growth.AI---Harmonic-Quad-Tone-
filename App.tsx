'use client';

import React from 'react';
import { LineChart, Zap } from 'lucide-react';
import AIGrowth from './components/AIGrowth';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#0f172a] overflow-x-hidden text-white font-display selection:bg-purple-500/30">
      <div className="flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b-2 border-transparent px-6 py-4 md:px-20 lg:px-40"
          style={{ borderImage: "linear-gradient(90deg, #3b82f6 0%, #a855f7 100%) 1" }}>
          <div className="flex items-center gap-4 text-white">
            <div className="size-6 text-blue-400">
              <Zap className="w-8 h-8 -ml-1" />
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">GROWTH.AI</h2>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white/80 hover:text-blue-400 text-sm font-medium transition-colors" href="#">Growth Engine</a>
              <a className="text-white/80 hover:text-purple-400 text-sm font-medium transition-colors" href="#">Optimization</a>
              <a className="text-white/80 hover:text-green-400 text-sm font-medium transition-colors" href="#">Pricing</a>
            </div>
            <div className="flex gap-4">
              <button className="flex min-w-[120px] cursor-pointer items-center justify-center h-10 px-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="flex min-w-[100px] cursor-pointer items-center justify-center h-10 px-5 bg-slate-800 border-2 border-slate-700 text-white text-sm font-bold hover:border-blue-500 transition-colors">
                Login
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 lg:px-20">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col gap-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border-2 border-blue-500/50 text-blue-400 text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Market Growth Engine Active
              </div>
              <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                Accelerate Revenue with <span className="bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-transparent">AI Precision.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                The Growth Theme engine transitions data into gold. Transform market signals into high-converting messaging with our continuous learning nodes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center h-14 px-8 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-base font-bold border-0 shadow-lg shadow-green-900/20 hover:scale-105 transition-transform">
                  Boost Conversion
                </button>
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center h-14 px-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-base font-bold border-0 shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform">
                  View Roadmap
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 border-2 border-[#0f172a] bg-blue-600 flex items-center justify-center text-[10px] font-bold rounded-full">GT</div>
                  <div className="w-10 h-10 border-2 border-[#0f172a] bg-purple-600 flex items-center justify-center text-[10px] font-bold rounded-full">RA</div>
                  <div className="w-10 h-10 border-2 border-[#0f172a] bg-green-600 flex items-center justify-center text-[10px] font-bold rounded-full">PM</div>
                </div>
                <p className="text-sm text-white/50">Powering high-growth marketing teams globally</p>
              </div>
            </div>

            {/* Right Column: Animated Tile */}
            <AIGrowth />
            
          </div>
        </main>

        {/* Stats Grid */}
        <div className="bg-slate-900 border-y-2 border-transparent py-10 px-6 md:px-20 lg:px-40 mt-12"
           style={{ borderImage: "linear-gradient(90deg, #3b82f6 0%, #a855f7 100%) 1" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1 border-l-2 border-blue-500 pl-4">
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Engine Latency</p>
              <p className="text-white text-2xl font-bold">1.8ms</p>
              <p className="text-blue-400 text-xs font-bold">Turbo Mode Active</p>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-red-500 pl-4">
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Growth Capital</p>
              <p className="text-white text-2xl font-bold">$2.4M</p>
              <p className="text-red-400 text-xs font-bold">Optimized Weekly</p>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-purple-500 pl-4">
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider">LTV Increase</p>
              <p className="text-white text-2xl font-bold">84%</p>
              <p className="text-purple-400 text-xs font-bold">Model Confidence</p>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-green-500 pl-4">
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Avg CAC Drop</p>
              <p className="text-white text-2xl font-bold">-32%</p>
              <p className="text-green-400 text-xs font-bold">Q4 Performance</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 py-12 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-6 border-t-2 border-transparent"
             style={{ borderImage: "linear-gradient(90deg, #3b82f6 0%, #a855f7 100%) 1" }}>
          <div className="flex items-center gap-4 text-white/40">
            <LineChart className="text-blue-400" />
            <span className="text-sm font-medium">© 2024 Product Marketing AI - Growth Theme. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a className="text-white/40 hover:text-blue-400 text-sm transition-colors" href="#">Growth Docs</a>
            <a className="text-white/40 hover:text-purple-400 text-sm transition-colors" href="#">Security</a>
            <a className="text-white/40 hover:text-green-400 text-sm transition-colors" href="#">Status</a>
          </div>
        </footer>
      </div>
    </div>
  );
}