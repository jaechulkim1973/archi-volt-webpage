"use client";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white scroll-smooth overflow-x-hidden">
      <Head>
        <title>ARCHI-VOLT | 건축 자재형 발전소</title>
      </Head>

      {/* 전체 배경 도면 그리드 (Blueprint Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#060913]/80 backdrop-blur-md border-b border-cyan-900/50 transition-all">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
          <div className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-6 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            ARCHI-VOLT
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <a href="#vision" className="text-cyan-400/70 hover:text-cyan-400 transition">Vision</a>
            <a href="#products" className="text-cyan-400/70 hover:text-cyan-400 transition">Lineup</a>
            <a href="#structure" className="text-cyan-400/70 hover:text-cyan-400 transition">Architecture</a>
          </div>
          <a href="#contact" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-2 text-sm font-bold transition shadow-[0_0_15px_rgba(6,182,212,0.3)] relative group overflow-hidden">
            <span className="relative z-10">도입 문의</span>
            <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section: Architectural Harmony (X-Ray 분할 컨셉) */}
      <section id="vision" className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center min-h-[90vh] z-10">
        <div className="max-w-7xl mx-auto px-6 w-full text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            Architectural Harmony
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-widest uppercase mb-12">
            완벽한 심미성과 구조적 통일성
          </p>
        </div>

        {/* X-Ray Slider Mockup UI */}
        <div className="w-full max-w-6xl mx-auto px-4 relative">
          {/* 모서리 테크니컬 브라켓 UI */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>

          <div className="relative h-[400px] md:h-[500px] border border-cyan-900/50 bg-[#0a0f25] flex overflow-hidden group">
            
            {/* 왼쪽: Blueprint (The Mechanics) */}
            <div className="w-1/2 h-full border-r-2 border-cyan-400 shadow-[2px_0_15px_rgba(34,211,238,0.5)] relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]">
              <div className="absolute top-4 left-4 border border-cyan-500/50 bg-cyan-950/50 px-3 py-1 text-xs text-cyan-300 tracking-widest backdrop-blur-sm">The Mechanics</div>
              {/* CSS로 그린 도면 뼈대 */}
              <div className="w-3/4 h-3/4 border-2 border-cyan-500/30 grid grid-cols-3 grid-rows-1 gap-4 p-4 relative">
                <div className="border border-cyan-400/50 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-px h-full bg-cyan-400/30"></div>
                  <div className="absolute w-full h-px bg-cyan-400/30"></div>
                </div>
                <div className="border border-cyan-400/50 rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <div className="w-px h-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee]"></div>
                </div>
                <div className="border border-cyan-400/50 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-px h-full bg-cyan-400/30"></div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 현실 (The Exterior) */}
            <div className="w-1/2 h-full relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-[#1a1c29]">
              <div className="absolute top-4 right-4 border border-gray-500/50 bg-gray-900/50 px-3 py-1 text-xs text-gray-300 tracking-widest backdrop-blur-sm">The Exterior</div>
              {/* 현실 모듈 렌더링 대체 CSS */}
              <div className="w-3/4 h-3/4 grid grid-cols-3 grid-rows-1 gap-4 p-4 relative">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-gray-700 shadow-inner"></div>
                <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-full border border-slate-600 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.1)_40%,transparent_50%)]"></div>
                </div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-gray-700 shadow-inner"></div>
              </div>
            </div>

            {/* 중앙 슬라이더 라인 라벨 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#060913] text-cyan-400 text-[10px] px-2 py-0.5 border border-cyan-500/50 z-10">X-Ray Slider</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#060913] text-cyan-400 text-[10px] px-2 py-0.5 border border-cyan-500/50 z-10">X-Ray Slider</div>
          </div>
        </div>

        {/* 하단 3대 가치 (이미지 1 하단 참조) */}
        <div className="max-w-6xl mx-auto px-4 mt-8 grid md:grid-cols-3 gap-6 w-full z-10">
          <div className="border border-cyan-900/50 bg-[#0a0f25]/80 backdrop-blur p-6 text-center shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]">
            <h3 className="text-xl font-bold text-white mb-2">형태의 통일 (Uniform Form)</h3>
            <p className="text-sm text-cyan-200/60 leading-relaxed">동일한 규격(500x2400) 적용. 건축 외관과의 시각적 이질감 제로.</p>
          </div>
          <div className="border border-cyan-500/50 bg-[#06b6d4]/10 backdrop-blur p-6 text-center shadow-[0_0_20px_rgba(6,182,212,0.15)] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
            <h3 className="text-xl font-bold text-white mb-2">건축 디자인 보존 (Clear View)</h3>
            <p className="text-sm text-cyan-200/80 leading-relaxed">잉여 공간을 완벽히 활용하여 미래지향적 파사드 완성 및 100% 조망권 보장.</p>
          </div>
          <div className="border border-cyan-900/50 bg-[#0a0f25]/80 backdrop-blur p-6 text-center shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]">
            <h3 className="text-xl font-bold text-white mb-2">구조적 안정성 (Aero-Dynamics)</h3>
            <p className="text-sm text-cyan-200/60 leading-relaxed">진동과 소음 없이 작동하는 공기역학적 프레임 및 열관리 쉴드 설계.</p>
          </div>
        </div>
      </section>

      {/* 공간에 편입되는 기술 Section (이미지 2 참조 - Orange/Gold 테마) */}
      <section className="py-24 border-y border-orange-900/30 bg-[radial-gradient(ellipse_at_right,rgba(249,115,22,0.05)_0%,#060913_70%)] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="w-full lg:w-1/2 relative">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white border-l-4 border-orange-500 pl-6 leading-tight">
                공간에 편입되는 기술: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">건축 자재형 발전소</span>
              </h2>
              
              <div className="border border-orange-500/30 bg-[#1a0f0a]/60 backdrop-blur-md p-8 rounded-tr-3xl rounded-bl-3xl relative shadow-[0_0_40px_rgba(249,115,22,0.1)]">
                {/* HUD 스타일 장식 */}
                <div className="absolute top-2 right-4 text-[10px] text-orange-500/50 font-mono tracking-widest">SYS.INTEGRATION.V2</div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"></div>
                    <p className="text-orange-100/80 leading-relaxed text-sm">
                      기계 설비의 한계를 넘어 대형 건축물의 외피 구조물로 <strong className="text-orange-400">완벽히 융화</strong>됩니다.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"></div>
                    <p className="text-orange-100/80 leading-relaxed text-sm">
                      건물의 뼈대이자 메인 파사드 기둥으로 <strong className="text-orange-400">직접 편입(Drop-in)</strong> 가능하도록 설계되었습니다.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"></div>
                    <p className="text-orange-100/80 leading-relaxed text-sm">
                      공간을 낭비하지 않고 공간 자체를 에너지원으로 변모시키는 <strong className="text-orange-400">초격차 마스터 디자인</strong>.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 도면형 건축 기둥 렌더링 (CSS) */}
            <div className="w-full lg:w-1/2 h-[400px] border border-orange-900/50 relative flex items-center justify-center bg-[#0a0502]">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
               
               {/* 중앙 기둥 (Blueprint style) */}
               <div className="w-32 h-[90%] border-2 border-orange-500/40 relative flex flex-col items-center justify-between py-4 shadow-[0_0_30px_rgba(249,115,22,0.15)] z-10">
                  <div className="w-40 h-4 border border-orange-400/50"></div>
                  <div className="w-16 h-full border-x border-orange-400/30 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-orange-400/5 to-orange-500/10"></div>
                    {/* 내장형 모듈 표현 */}
                    <div className="w-10 h-32 border border-orange-400/80 bg-orange-500/20 shadow-[0_0_15px_#f97316] relative flex flex-col justify-around p-1">
                      {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-orange-300/50"></div>)}
                    </div>
                  </div>
                  <div className="w-40 h-4 border border-orange-400/50"></div>
               </div>

               {/* 연결선 및 치수선 */}
               <div className="absolute left-10 top-1/2 w-32 h-px bg-orange-500/50 flex items-center">
                 <div className="w-2 h-2 bg-orange-500 rotate-45 -ml-1"></div>
               </div>
               <div className="absolute left-[30%] top-1/4 text-[10px] text-orange-400 font-mono">Integration Axis</div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Lineup Section */}
      <section id="products" className="px-6 py-24 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-cyan-900 flex-1"></div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-widest uppercase text-center drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              Lineup Matrix
            </h2>
            <div className="h-px bg-cyan-900 flex-1"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* BSU-500A */}
            <div className="bg-[#0a0f25]/80 backdrop-blur border border-cyan-900/50 p-8 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-400"></div>
              
              <div className="text-[10px] text-blue-400/50 font-mono mb-2">MODEL.01 // BASE</div>
              <h3 className="text-3xl font-black text-gray-100 mb-1 tracking-tight">BSU-500A</h3>
              <p className="text-blue-400 text-sm font-bold mb-6">A-Series : 통합 플랫폼</p>
              
              <ul className="space-y-4 text-sm text-gray-300 font-light tracking-wide border-t border-cyan-900/30 pt-6">
                <li className="flex justify-between items-end border-b border-cyan-900/30 pb-2">
                  <span className="text-blue-300/60 text-xs">CELL</span> <span className="font-semibold text-white">단일 탠덤 (FAPbI₃)</span>
                </li>
                <li className="flex justify-between items-end border-b border-cyan-900/30 pb-2">
                  <span className="text-blue-300/60 text-xs">POWER</span> <span className="font-semibold text-white">420W / 540W</span>
                </li>
                <li className="flex justify-between items-end pb-2">
                  <span className="text-blue-300/60 text-xs">CONTROL</span> <span className="font-semibold text-white">기본 MPPT</span>
                </li>
              </ul>
            </div>

            {/* BSU-500B */}
            <div className="bg-[#0a0f25]/80 backdrop-blur border border-cyan-500/50 p-8 relative group overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
              <div className="absolute top-4 right-4 bg-cyan-500/20 text-cyan-300 text-[10px] px-2 py-1 border border-cyan-400/50">NEW EDITION</div>

              <div className="text-[10px] text-cyan-400/50 font-mono mb-2">MODEL.02 // ADVANCED</div>
              <h3 className="text-3xl font-black text-white mb-1 tracking-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">BSU-500B</h3>
              <p className="text-cyan-400 text-sm font-bold mb-6">B-Series : 트리플 양이온</p>
              
              <ul className="space-y-4 text-sm text-gray-300 font-light tracking-wide border-t border-cyan-900/50 pt-6">
                <li className="flex justify-between items-end border-b border-cyan-900/50 pb-2">
                  <span className="text-cyan-300/60 text-xs">CELL</span> <span className="font-bold text-cyan-300">Cs/FA/MA 탠덤</span>
                </li>
                <li className="flex justify-between items-end border-b border-cyan-900/50 pb-2">
                  <span className="text-cyan-300/60 text-xs">POWER</span> <span className="font-bold text-cyan-300">450W / 580W</span>
                </li>
                <li className="flex justify-between items-end pb-2">
                  <span className="text-cyan-300/60 text-xs">CONTROL</span> <span className="font-semibold text-white">6 TOPS NPU</span>
                </li>
              </ul>
            </div>

            {/* BSU-600A (New Flagship) */}
            <div className="bg-[#0a0f25]/90 backdrop-blur border border-purple-500/80 p-8 relative group overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.2)] transform lg:-translate-y-4">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-400 shadow-[0_0_10px_#a855f7]"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400 shadow-[0_0_10px_#a855f7]"></div>
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 shadow-[0_0_15px_#a855f7]">FLAGSHIP</div>

              <div className="text-[10px] text-purple-400/80 font-mono mb-2 animate-pulse">MODEL.03 // AUTONOMOUS</div>
              <h3 className="text-3xl font-black text-white mb-1 tracking-tight drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">BSU-600A</h3>
              <p className="text-purple-400 text-sm font-bold mb-6">Autonomous Edition</p>
              
              <ul className="space-y-4 text-sm text-gray-300 font-light tracking-wide border-t border-purple-900/50 pt-6">
                <li className="flex justify-between items-end border-b border-purple-900/50 pb-2">
                  <span className="text-purple-300/60 text-xs">CELL/OPTICS</span> <span className="font-bold text-purple-300">4단 탠덤 + QLSC</span>
                </li>
                <li className="flex justify-between items-end border-b border-purple-900/50 pb-2">
                  <span className="text-purple-300/60 text-xs">POWER</span> <span className="font-bold text-purple-300 text-base">580W / 820W</span>
                </li>
                <li className="flex justify-between items-end pb-2">
                  <span className="text-purple-300/60 text-xs">CONTROL</span> <span className="font-black text-white drop-shadow-[0_0_5px_#fff]">100 TOPS AI</span>
                </li>
              </ul>
              
              {/* 하단 글로우 효과 */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_-5px_15px_#a855f7]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 12-Layer Structure Section (Blueprint 3D) */}
      <section id="structure" className="px-6 py-24 bg-[#03050a] relative z-10 border-t border-cyan-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">12-Layer 아키텍처 해부도</h2>
            <p className="text-cyan-500/70 font-mono text-sm">System.Blueprint.Render(BSU_600A)</p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* 4 Pillars 텍스트 (HUD Style) */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="border border-cyan-900/50 bg-[#060913]/80 p-5 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                <h4 className="text-sm font-bold text-blue-400 font-mono tracking-widest mb-2">01. OPTICS (L0-L2)</h4>
                <p className="text-gray-400 text-sm">QLSC 양자점 & 메타-프레넬 결합. 유효 집광비 3.8배 증폭.</p>
              </div>
              <div className="border border-cyan-500/50 bg-cyan-900/10 p-5 relative shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                <h4 className="text-sm font-bold text-cyan-300 font-mono tracking-widest mb-2">02. POWER GEN (L3-L5)</h4>
                <p className="text-gray-200 text-sm">4단 4T 하이브리드 서브셀. 셀 효율 45% 초고효율 스펙트럼 흡수.</p>
              </div>
              <div className="border border-orange-900/50 bg-[#060913]/80 p-5 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-orange-500"></div>
                <h4 className="text-sm font-bold text-orange-400 font-mono tracking-widest mb-2">03. THERMAL (L8-L10)</h4>
                <p className="text-gray-400 text-sm">나노유체 마이크로채널 + 3D 그래핀 복합 PCM 챔버 (피크 1,400Wth 방출).</p>
              </div>
              <div className="border border-purple-900/50 bg-[#060913]/80 p-5 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-500"></div>
                <h4 className="text-sm font-bold text-purple-400 font-mono tracking-widest mb-2">04. AI CORE (L11-L12)</h4>
                <p className="text-gray-400 text-sm">DX-M2 100 TOPS NPU 탑재. 온디바이스 LLM 및 자율 제어 구동.</p>
              </div>
            </div>

            {/* CSS 3D Blueprint Rendering */}
            <div className="w-full lg:w-1/2 flex justify-center py-10 perspective-[1000px]">
              <div className="relative w-64 h-72 transform-style-3d rotate-x-[65deg] rotate-z-[-45deg] transition duration-1000 hover:rotate-z-[-35deg] hover:rotate-x-[60deg] hover:scale-105 group">
                
                {/* L0-L2 QLSC */}
                <div className="absolute inset-0 border border-blue-400 bg-blue-500/10 backdrop-blur-sm transform translate-z-[150px] shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center">
                  <div className="w-[90%] h-[90%] border border-blue-400/30 border-dashed"></div>
                </div>
                
                {/* L3-L5 4단 탠덤 (Glowing) */}
                <div className="absolute inset-0 border-2 border-cyan-400 bg-cyan-500/20 backdrop-blur-sm transform translate-z-[100px] shadow-[0_0_40px_rgba(34,211,238,0.4)] flex items-center justify-center">
                   <div className="grid grid-cols-4 grid-rows-6 w-full h-full p-1 gap-1">
                     {Array.from({length:24}).map((_,i) => <div key={i} className="bg-cyan-400/20 border border-cyan-400/50"></div>)}
                   </div>
                </div>

                {/* L8-L10 열관리 (Orange) */}
                <div className="absolute inset-0 border border-orange-500 bg-orange-600/10 backdrop-blur-sm transform translate-z-[50px] flex items-center justify-center">
                   {/* 벌집 모양 육각형 패턴 흉내 */}
                   <div className="w-full h-full bg-[radial-gradient(circle_at_center,transparent_30%,rgba(249,115,22,0.2)_70%)] border-[0.5px] border-orange-500/30"></div>
                </div>

                {/* L11-L12 AI NPU (Purple) */}
                <div className="absolute inset-0 border-2 border-purple-500 bg-purple-900/30 backdrop-blur-md transform translate-z-[0px] shadow-[0_0_50px_rgba(168,85,247,0.4)] flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-16 border border-purple-400 shadow-[0_0_20px_#a855f7] flex flex-col items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500/50 mb-1"></div>
                    <span className="text-[8px] font-mono text-purple-200">NPU</span>
                  </div>
                </div>

                {/* 축(Axis) 연결선 */}
                <div className="absolute w-px h-[200px] bg-cyan-400 shadow-[0_0_10px_#22d3ee] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-[75px] rotate-x-[90deg] opacity-70"></div>
              </div>
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
              <p className="text-cyan-500/50 font-mono text-xs">© 2026 ARCHI-VOLT ENGINEERING GROUP.</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-gray-500">
            <p className="mb-1">SYS.STATUS: <span className="text-cyan-400">ONLINE</span></p>
            <p>INTEGRATION PROTOCOL: <span className="text-cyan-400">ACTIVE</span></p>
          </div>
        </div>
      </footer>
      
      {/* 3D 애니메이션용 CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[1000px\\] { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-\\[65deg\\] { transform: rotateX(65deg); }
        .rotate-x-\\[60deg\\] { transform: rotateX(60deg); }
        .rotate-x-\\[90deg\\] { transform: rotateX(90deg); }
        .rotate-z-\\[-45deg\\] { transform: rotateZ(-45deg); }
        .rotate-z-\\[-35deg\\] { transform: rotateZ(-35deg); }
        .translate-z-\\[150px\\] { transform: translateZ(150px); }
        .translate-z-\\[100px\\] { transform: translateZ(100px); }
        .translate-z-\\[75px\\] { transform: translateZ(75px); }
        .translate-z-\\[50px\\] { transform: translateZ(50px); }
        .translate-z-\\[0px\\] { transform: translateZ(0px); }
      `}} />
    </div>
  );
}