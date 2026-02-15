'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  LineChart, 
  Zap, 
  ChevronRight, 
  Layout, 
  Shield, 
  Activity, 
  Globe, 
  Users, 
  Lock, 
  BarChart3,
  Cpu
} from 'lucide-react';
import AIGrowth from './components/AIGrowth';

export default function App() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const kpiData = [
    { 
      icon: Cpu, 
      label: 'Core Utilization', 
      val: '94.2%', 
      sub: 'Engine V3.2 Active',
      color: 'text-blue-400', 
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    { 
      icon: Globe, 
      label: 'Edge Distribution', 
      val: '42 Nodes', 
      sub: 'Global Low Latency',
      color: 'text-purple-400', 
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20'
    },
    { 
      icon: Users, 
      label: 'Scale Throughput', 
      val: '1.2M/s', 
      sub: 'Real-time Requests',
      color: 'text-emerald-400', 
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    { 
      icon: Lock, 
      label: 'Entropy Shield', 
      val: '100%', 
      sub: 'Zero Trust Protocol',
      color: 'text-amber-400', 
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0f172a] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-24 border-b border-white/5 backdrop-blur-md bg-slate-950/20">
        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
            <Zap className="w-5 h-5 text-white fill-white/20" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">Growth.AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Engine', 'Optimization', 'Security', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white">Login</button>
          <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-xl shadow-white/5">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start"
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            V3.2 Model Live
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Predict. Scale. <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Automate.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Harness the world's most advanced growth intelligence engine. Transition your data into actionable revenue pipelines with 99.8% precision.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:brightness-110 transition-all active:scale-95">
              Launch Dashboard
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-slate-800 border border-white/5 font-bold text-lg hover:bg-slate-700 transition-all active:scale-95">
              View Roadmap
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-white/5 w-full">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 12}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Trusted by <span className="text-white font-bold">12,000+</span> growth teams
            </p>
          </motion.div>
        </motion.div>

        {/* Animation Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <AIGrowth />
        </motion.div>
      </main>

      {/* KPI Dashboard Section */}
      <section className="relative z-10 w-full px-6 py-20 lg:py-32 bg-slate-950/40 border-y border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic">
                Performance <span className="text-blue-500">KPI</span> Metrics
              </h2>
              <p className="text-slate-400 text-lg">
                Monitoring the core throughput of your autonomous growth pipelines. Updated every 1.5s.
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit self-center lg:self-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">System Status: Nominal</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group p-8 rounded-3xl bg-slate-900/50 border ${kpi.border} hover:bg-slate-800/80 transition-all duration-500 overflow-hidden shadow-2xl`}
              >
                {/* Decorative Background Icon */}
                <kpi.icon className={`absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.03] ${kpi.color} group-hover:scale-110 transition-transform duration-700`} />
                
                <div className="relative z-10">
                  <div className={`size-12 rounded-2xl ${kpi.bg} flex items-center justify-center mb-6 border border-white/5`}>
                    <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                  </div>
                  
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{kpi.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-black tracking-tighter">{kpi.val}</h3>
                  </div>
                  <p className="mt-3 text-xs font-medium text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity">
                    {kpi.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid (Condensed) */}
      <section className="relative z-10 w-full py-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Layout, label: 'Low Latency', val: '1.2ms', color: 'text-blue-400' },
            { icon: Shield, label: 'Capital Ops', val: '$4.2B', color: 'text-purple-400' },
            { icon: Activity, label: 'LTV Uplift', val: '+124%', color: 'text-emerald-400' },
            { icon: Zap, label: 'CAC Delta', val: '-42%', color: 'text-amber-400' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-xl font-black tracking-tight">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 mt-auto">
        <div className="flex items-center gap-2 opacity-40">
          <LineChart className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium uppercase tracking-tighter">© 2024 GROWTH.AI INFRASTRUCTURE</span>
        </div>
        <div className="flex gap-8">
          {['Docs', 'Privacy', 'Status', 'API'].map((link) => (
            <a key={link} href="#" className="text-xs font-bold text-slate-600 hover:text-blue-400 transition-colors uppercase tracking-widest">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
