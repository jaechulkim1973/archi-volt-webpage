"use client";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040710] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white scroll-smooth overflow-x-hidden">
      <Head>
        <title>ARCHI-VOLT | AI 자율형 4단 탠덤 BIPV 플랫폼</title>
      </Head>

      {/* 전체 배경 도면 그리드 */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#040710]/80 backdrop-blur-md border-b border-cyan-900/50 transition-all">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
          <div className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-6 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            ARCHI-VOLT<span className="text-cyan-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <a href="#vision" className="text-cyan-400/70 hover:text-cyan-400 transition">SDPV Vision</a>
            <a href="#products" className="text-cyan-400/70 hover:text-cyan-400 transition">Lineup</a>
            <a href="#architecture" className="text-cyan-400/70 hover:text-cyan-400 transition">12-Layer Tech</a>
            <a href="#economics" className="text-cyan-400/70 hover:text-cyan-400 transition">Economics</a>
          </div>
          <a href="#contact" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-2 text-sm font-bold transition shadow-[0_0_15px_rgba(6,182,212,0.3)] relative group overflow-hidden">
            <span className="relative z-10">도입 문의</span>
            <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section: Blueprint & DeepX NPU Concept */}
      <section id="vision" className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center min-h-[90vh] z-10">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover mix-blend-luminosity grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040710] via-[#040710]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full text-center mb-12 z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-300 text-sm font-semibold tracking-wide backdrop-blur-md animate-pulse">
            Software-Defined Photovoltaic (SDPV)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            태양광 하드웨어의 한계를 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">소프트웨어로 정의하다</span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-100/70 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            100 TOPS AI 자율 제어 기반 4단 탠덤 플랫폼, <strong className="text-cyan-400">BSU-600A</strong>.<br/>
            초고효율 45% PCE와 On-device LLM을 통해 에너지를 스스로 생산, 관리, 거래하는 지능형 에너지 노드의 탄생.
          </p>
        </div>

        {/* 5 Pillars of Mass Production Edge */}
        <div className="max-w-6xl mx-auto px-4 w-full z-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { title: "Cost", val: "₩1,620k", desc: "BOM 원가 (-12%)", color: "border-blue-500/50" },
            { title: "Performance", val: "620 Wp", desc: "4T 탠덤 45% 효율", color: "border-cyan-500/50" },
            { title: "Reliability", val: "1,500h", desc: "Damp Heat 통과", color: "border-emerald-500/50" },
            { title: "AI/SW", val: "100 TOPS", desc: "DeepX DX-M2 탑재", color: "border-purple-500/50" },
            { title: "Profitability", val: "14.7%", desc: "25년 IRR 수익률", color: "border-orange-500/50" }
          ].map((item, i) => (
            <div key={i} className={`bg-[#0a0f25]/80 backdrop-blur border-t-2 ${item.color} p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
              <h4 className="text-xs text-gray-400 font-mono mb-2">{item.title}</h4>
              <div className="text-xl font-black text-white mb-1">{item.val}</div>
              <div className="text-[10px] text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Lineup Section (A, B, and 600A) */}
      <section id="products" className="px-6 py-24 z-10 relative bg-[#060913]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-cyan-900 flex-1"></div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-widest uppercase text-center drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              Platform Lineup
            </h2>
            <div className="h-px bg-cyan-900 flex-1"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* BSU-500A */}
            <div className="bg-[#0a0f25]/80 backdrop-blur border border-slate-700 p-8 flex flex-col relative group overflow-hidden">
              <div className="text-[10px] text-slate-400 font-mono mb-2">MODEL.01 // BASE</div>
              <h3 className="text-3xl font-black text-gray-100 mb-1">BSU-500A</h3>
              <p className="text-slate-400 text-sm font-bold mb-6">단일 페로브스카이트</p>
              <div className="h-32 mb-6 opacity-60">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop" alt="500A" className="w-full h-full object-cover border border-slate-700" />
              </div>
              <ul className="space-y-4 text-sm text-gray-300 border-t border-slate-800 pt-6 mt-auto">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 text-xs">출력 / 효율</span> <span className="font-semibold text-white">420W / 33.0%</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 text-xs">두께 / 제어</span> <span className="font-semibold text-white">120mm / MCU</span>
                </li>
              </ul>
            </div>

            {/* BSU-500B */}
            <div className="bg-[#0a0f25]/80 backdrop-blur border border-cyan-500/50 p-8 flex flex-col relative group overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <div className="text-[10px] text-cyan-400 font-mono mb-2">MODEL.02 // ADVANCED</div>
              <h3 className="text-3xl font-black text-white mb-1 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">BSU-500B</h3>
              <p className="text-cyan-400 text-sm font-bold mb-6">Cs/FA/MA 트리플 양이온</p>
              <div className="h-32 mb-6">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" alt="500B" className="w-full h-full object-cover border border-cyan-500/50 hue-rotate-[180deg]" />
              </div>
              <ul className="space-y-4 text-sm text-gray-300 border-t border-cyan-900/50 pt-6 mt-auto">
                <li className="flex justify-between border-b border-cyan-900/50 pb-2">
                  <span className="text-cyan-500 text-xs">출력 / 효율</span> <span className="font-bold text-cyan-300">450W / 35.5%</span>
                </li>
                <li className="flex justify-between border-b border-cyan-900/50 pb-2">
                  <span className="text-cyan-500 text-xs">두께 / 제어</span> <span className="font-bold text-white">120mm / 6 TOPS AI</span>
                </li>
              </ul>
            </div>

            {/* BSU-600A (Flagship) */}
            <div className="bg-gradient-to-b from-[#0a0f25] to-purple-900/20 backdrop-blur border border-purple-500 p-8 flex flex-col relative group overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.25)] transform lg:-translate-y-4">
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 shadow-[0_0_15px_#a855f7]">FLAGSHIP</div>
              <div className="text-[10px] text-purple-400 font-mono mb-2 animate-pulse">MODEL.03 // AUTONOMOUS</div>
              <h3 className="text-3xl font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">BSU-600A</h3>
              <p className="text-purple-400 text-sm font-bold mb-6">4단 올-페로브스카이트 탠덤</p>
              
              <div className="h-40 mb-6 relative overflow-hidden border border-purple-500/50 shadow-[0_0_20px_#a855f7]">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" alt="600A AI Chip" className="w-full h-full object-cover hue-rotate-[260deg] opacity-80 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25] to-transparent"></div>
                <div className="absolute bottom-2 right-2 border border-purple-400 bg-purple-900/80 px-2 py-1 text-[10px] text-white">DX-M2 100 TOPS</div>
              </div>

              <ul className="space-y-4 text-sm text-gray-300 border-t border-purple-900/50 pt-6 mt-auto">
                <li className="flex justify-between border-b border-purple-900/50 pb-2">
                  <span className="text-purple-400/70 text-xs">광학 / 출력</span> <span className="font-bold text-purple-300">QLSC 복합 / <span className="text-white">620W</span></span>
                </li>
                <li className="flex justify-between border-b border-purple-900/50 pb-2">
                  <span className="text-purple-400/70 text-xs">두께 / 무게</span> <span className="font-bold text-white">100mm (-20mm) / 19kg</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-purple-400/70 text-xs">자율 제어망</span> <span className="font-black text-purple-400 drop-shadow-[0_0_5px_#a855f7]">100 TOPS On-device LLM</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 12-Layer Tech Architecture (4-Pillar Stack) */}
      <section id="architecture" className="px-6 py-24 bg-[#03050a] relative z-10 border-y border-cyan-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">The 4-Pillar Stack: 12-Layer 해부도</h2>
            <p className="text-cyan-500/70 font-mono text-sm">100mm 슬림화와 성능 극대화를 동시에 이룬 단일 진실 공급원</p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* 4 Pillars Text */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="border border-cyan-900/50 bg-[#060913]/80 p-5 relative group hover:border-blue-500 transition">
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                <h4 className="text-sm font-bold text-blue-400 font-mono tracking-widest mb-2">01. OPTICAL STACK (L0-L2)</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-blue-300">QLSC 양자점 & 메타-프레넬:</strong> UV/가시광을 NIR(950nm)로 하향 변환(Down-shifting)하여 유효 집광비를 3.8배 증폭시킵니다.
                </p>
              </div>
              <div className="border border-emerald-900/50 bg-[#060913]/80 p-5 relative group hover:border-emerald-500 transition shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
                <h4 className="text-sm font-bold text-emerald-400 font-mono tracking-widest mb-2">02. POWER GEN (L3-L5)</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-emerald-300">4T 하이브리드 올-페로브 탠덤:</strong> 2.0eV~0.95eV를 분할 흡수하며 전류 정합 제약을 제거, 45% 실측 효율을 달성합니다. SnF₂ 및 Ge 도핑으로 NBG 산화를 완벽 방어합니다.
                </p>
              </div>
              <div className="border border-orange-900/50 bg-[#060913]/80 p-5 relative group hover:border-orange-500 transition">
                <div className="absolute left-0 top-0 w-1 h-full bg-orange-500"></div>
                <h4 className="text-sm font-bold text-orange-400 font-mono tracking-widest mb-2">03. THERMAL (L8-L10)</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-orange-300">나노유체 & 3D 그래핀 복합 PCM:</strong> 1,400Wth 피크 열을 방출하며, 온도계수를 -0.18 %/℃로 억제합니다.
                </p>
              </div>
              <div className="border border-purple-500/50 bg-purple-900/10 p-5 relative group hover:border-purple-400 transition shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-400 shadow-[0_0_10px_#a855f7]"></div>
                <h4 className="text-sm font-bold text-purple-300 font-mono tracking-widest mb-2">04. EDGE-AI CONTROL (L11-L12)</h4>
                <p className="text-gray-200 text-sm">
                  <strong className="text-purple-300">DeepX DX-M2 100 TOPS NPU:</strong> 8ms 내 MPPT 수렴. 남는 82%의 연산 헤드룸으로 VPP 자율 응찰 및 On-device LLM 구동.
                </p>
              </div>
            </div>

            {/* CSS 3D Layer Architecture (Visual representation) */}
            <div className="w-full lg:w-1/2 flex justify-center py-10 perspective-[1000px]">
              <div className="relative w-64 h-80 transform-style-3d rotate-x-[60deg] rotate-z-[-45deg] transition duration-1000 hover:rotate-z-[-35deg] hover:rotate-x-[55deg] hover:scale-105">
                
                {/* L0-L2 QLSC Optical */}
                <div className="absolute inset-0 border border-blue-400 bg-blue-500/20 backdrop-blur-md transform translate-z-[160px] shadow-[0_20px_30px_rgba(59,130,246,0.2)] flex items-center justify-center font-bold text-blue-200 tracking-widest">
                  L0-L2 OPTICS
                </div>
                
                {/* L3-L5 4-Junction Tandem Cell */}
                <div className="absolute inset-0 border-2 border-emerald-400 bg-emerald-500/30 backdrop-blur-md transform translate-z-[110px] shadow-[0_20px_40px_rgba(16,185,129,0.3)] flex flex-col gap-1 p-2">
                  <div className="text-center text-[10px] font-bold text-emerald-200 mb-1">L3-L5 TANDEM</div>
                  <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-1">
                    {[1,2,3,4].map(i => <div key={i} className="bg-emerald-400/40 border border-emerald-300/50"></div>)}
                  </div>
                </div>

                {/* L8-L10 Thermal Management */}
                <div className="absolute inset-0 border border-orange-500 bg-orange-600/30 backdrop-blur-md transform translate-z-[60px] shadow-[0_30px_50px_rgba(249,115,22,0.3)] flex items-center justify-center font-bold text-orange-200 tracking-widest text-sm">
                   L8-L10 THERMAL
                </div>

                {/* L11-L12 DeepX NPU AI Edge */}
                <div className="absolute inset-0 border-2 border-purple-500 bg-purple-900/60 backdrop-blur-xl transform translate-z-[0px] shadow-[0_30px_60px_rgba(168,85,247,0.6)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.5)_0%,transparent_60%)] animate-pulse"></div>
                  <div className="w-20 h-20 border border-purple-400 shadow-[0_0_20px_#a855f7] flex flex-col items-center justify-center bg-black/50 z-10 rounded">
                    <div className="w-10 h-10 bg-purple-500/50 mb-2 relative">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,white_50%,transparent_60%)] opacity-20"></div>
                    </div>
                    <span className="text-[10px] font-black text-purple-100">DX-M2</span>
                  </div>
                </div>

                {/* Axis Line */}
                <div className="absolute w-1 h-[200px] bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-[80px] rotate-x-[90deg] opacity-70 shadow-[0_0_15px_#22d3ee]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economics & Manufacturing Section */}
      <section id="economics" className="px-6 py-24 relative z-10 bg-[radial-gradient(ellipse_at_left,rgba(6,182,212,0.05)_0%,#040710_70%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">비즈니스 수익성 및 제조 혁신</h2>
            <p className="text-gray-400">단순한 발전 패널이 아닌, 5.3년 안에 자본을 회수하는 지능형 금융 자산입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 수익성 모델 Dashboard */}
            <div className="border border-cyan-900/50 bg-[#0a0f25]/60 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                단품(1매) 수익성 및 ROI 모델 (서울 기준)
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl text-center">
                  <p className="text-xs text-gray-500 mb-1">단순 투자 회수기간</p>
                  <p className="text-3xl font-black text-white">5.3<span className="text-lg font-medium text-gray-400 ml-1">년</span></p>
                </div>
                <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-xl text-center">
                  <p className="text-xs text-gray-500 mb-1">25년 IRR</p>
                  <p className="text-3xl font-black text-emerald-400">14.7<span className="text-lg font-medium text-emerald-600 ml-1">%</span></p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded border border-gray-800">
                  <span className="text-sm text-gray-400">연간 전력/REC 수익</span>
                  <span className="text-sm font-bold text-white">₩ 350.6k</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded border border-gray-800">
                  <span className="text-sm text-gray-400">연간 열 회수 절감액 (LNG대체)</span>
                  <span className="text-sm font-bold text-orange-400">₩ 85.2k</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded border border-gray-800">
                  <span className="text-sm text-gray-400">VPP 자율 응찰 수익 (OpenADR)</span>
                  <span className="text-sm font-bold text-purple-400">₩ 42.0k</span>
                </div>
                <div className="flex justify-between items-center p-3 border-t border-cyan-900/50 mt-2">
                  <span className="text-base font-bold text-cyan-400">연간 총수익 (매당)</span>
                  <span className="text-xl font-black text-cyan-300">₩ 477.8k</span>
                </div>
              </div>
            </div>

            {/* 제조 혁신 & BOM Dashboard */}
            <div className="border border-blue-900/50 bg-[#0a0f25]/60 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                스마트 제조 & 원가 구조 혁신
              </h3>

              <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">총 BOM 원가 (1매 기준)</p>
                  <p className="text-3xl font-black text-white">₩ 1,620<span className="text-lg font-medium text-gray-400 ml-1">k</span></p>
                  <p className="text-xs text-emerald-400 mt-1">▼ 전작 대비 12.4% 절감</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Takt Time</p>
                  <p className="text-3xl font-black text-white">6.0<span className="text-lg font-medium text-gray-400 ml-1">분</span></p>
                  <p className="text-xs text-blue-400 mt-1">29% 처리속도 향상</p>
                </div>
              </div>

              <ul className="space-y-5 text-sm text-gray-300">
                <li className="flex gap-4">
                  <div className="min-w-[70px] text-xs font-bold text-blue-500 font-mono">STEP 1</div>
                  <div>
                    <p className="font-semibold text-white mb-1">R2R 슬롯다이 전환 (재료이용률 99%)</p>
                    <p className="text-xs text-gray-500 leading-relaxed">대면적 페로브스카이트 코팅 시 고가 전구체 손실 원천 차단. Ag 나노그리드 축소.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-[70px] text-xs font-bold text-blue-500 font-mono">STEP 2</div>
                  <div>
                    <p className="font-semibold text-white mb-1">글로브박스 산화 방지 공정 (O₂ &lt; 0.1ppm)</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Sn계 저Pb 탠덤 셀의 고질적 산화 리스크를 ALD 및 극저산소 제어로 완벽히 방어 (수율 92%).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="min-w-[70px] text-xs font-bold text-blue-500 font-mono">STEP 3</div>
                  <div>
                    <p className="font-semibold text-white mb-1">Edge-AI 실시간 SPC</p>
                    <p className="text-xs text-gray-500 leading-relaxed">NPU 인라인 모니터링으로 Cpk 1.33 이상 통계적 공정 관리 지속.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#03050a] py-12 border-t border-cyan-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <div className="w-3 h-3 bg-cyan-400"></div>
            </div>
            <div>
              <div className="text-xl font-black text-white tracking-widest mb-1">ARCHI-VOLT</div>
              <p className="text-cyan-500/50 font-mono text-xs">© 2026 ARCHI-VOLT ENGINEERING GROUP. All Rights Reserved.</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-gray-500">
            <p className="mb-1">COMPATIBILITY: <span className="text-cyan-400">100% DROP-IN (BSU-500/600)</span></p>
            <p>INTEGRATION: <span className="text-cyan-400">OpenADR 3.0 / Matter 1.3 / OCPP 2.0.1</span></p>
          </div>
        </div>
      </footer>
      
      {/* 3D 애니메이션용 CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[1000px\\] { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-\\[60deg\\] { transform: rotateX(60deg); }
        .rotate-x-\\[55deg\\] { transform: rotateX(55deg); }
        .rotate-x-\\[90deg\\] { transform: rotateX(90deg); }
        .rotate-z-\\[-45deg\\] { transform: rotateZ(-45deg); }
        .rotate-z-\\[-35deg\\] { transform: rotateZ(-35deg); }
        .translate-z-\\[160px\\] { transform: translateZ(160px); }
        .translate-z-\\[110px\\] { transform: translateZ(110px); }
        .translate-z-\\[80px\\] { transform: translateZ(80px); }
        .translate-z-\\[60px\\] { transform: translateZ(60px); }
        .translate-z-\\[0px\\] { transform: translateZ(0px); }
      `}} />
    </div>
  );
}