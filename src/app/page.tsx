import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-purple-500 selection:text-white scroll-smooth">
      <Head>
        <title>ARCHI-VOLT | 초격차 BIPV 플랫폼</title>
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 transition-all">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-white tracking-widest uppercase">
            ARCHI-VOLT<span className="text-purple-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#products" className="hover:text-purple-400 transition">Lineup</a>
            <a href="#specs" className="hover:text-purple-400 transition">Matrix</a>
            <a href="#structure" className="hover:text-purple-400 transition">12-Layer System</a>
          </div>
          <a href="#contact" className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            도입 문의
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-gray-950 to-gray-950">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/50 text-purple-300 text-sm font-semibold tracking-wide backdrop-blur-md animate-pulse">
            Software-Defined Photovoltaic (SDPV)
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-500 pb-2">
              살아있는 에너지 노드,
            </span>
            건축의 자율 신경계.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            단순히 전기를 만드는 것을 넘어, 스스로 에너지를 분배하고 열을 저장하며 그리드와 협상합니다.<br className="hidden md:block"/>
            DeepX NPU 100 TOPS와 4단 탠덤이 결합된 궁극의 BIPV 솔루션.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#products" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              전체 라인업 보기
            </a>
            <a href="#structure" className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              12-Layer 아키텍처
            </a>
          </div>
        </div>
      </section>

      {/* Product Lineup Section */}
      <section id="products" className="px-6 py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ARCHI-VOLT Product Lineup</h2>
            <p className="text-gray-400">동일한 커튼월 규격으로 100% 하위 호환성(Drop-in)을 보장하는 3세대 진화 플랫폼</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* BSU-500A */}
            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-blue-500 transition duration-300 relative overflow-hidden group">
              <h3 className="text-2xl font-bold text-gray-100 mb-1">BSU-500A</h3>
              <p className="text-blue-400 text-sm font-semibold mb-6">A-Series : 통합 플랫폼의 시작</p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed h-20">
                FAPbI₃ 단일 페로브스카이트 상부셀. 집광, 분광, 열저장이 하나의 유닛에서 완결되는 고효율 BIPV.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">셀 구조</span> <span>단일 탠덤</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">출력 (보증)</span> <span>420W (집광 540W)</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">두께 / 제어</span> <span>120mm / 기본 MPPT</span>
                </li>
              </ul>
            </div>

            {/* BSU-500B */}
            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-emerald-500 transition duration-300 relative overflow-hidden group">
              <h3 className="text-2xl font-bold text-gray-100 mb-1">BSU-500B</h3>
              <p className="text-emerald-400 text-sm font-semibold mb-6">B-Series : 트리플 양이온 에디션</p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed h-20">
                Drop-in 업그레이드를 통해 단일 조성의 열화 한계를 극복하고 발전량과 신뢰성을 극대화.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">셀 구조</span> <span className="text-emerald-400">Cs/FA/MA 탠덤</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">출력 (보증)</span> <span className="font-bold">450W (집광 580W)</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-500">두께 / 제어</span> <span>120mm / 6 TOPS NPU</span>
                </li>
              </ul>
            </div>

            {/* BSU-600A (New Flagship) */}
            <div className="bg-gradient-to-b from-gray-900 to-purple-900/20 p-8 rounded-3xl border border-purple-500/50 relative shadow-[0_0_30px_rgba(168,85,247,0.15)] group transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-black px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl shadow-lg">
                AUTONOMOUS FLAGSHIP
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-bl-full -z-10 group-hover:scale-125 transition duration-500"></div>
              
              <h3 className="text-3xl font-bold text-white mb-1">BSU-600A</h3>
              <p className="text-purple-400 text-sm font-semibold mb-6">Autonomous Edition</p>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed h-20">
                4단 올-페로브스카이트 탠덤과 QLSC 양자점 집광, 100 TOPS AI 두뇌를 탑재한 초격차 100mm 슬림 모듈.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex justify-between border-b border-purple-900/50 pb-2">
                  <span className="text-purple-400/70 font-semibold">셀 / 광학</span> <span className="text-white font-bold">4단 탠덤 + QLSC 집광</span>
                </li>
                <li className="flex justify-between border-b border-purple-900/50 pb-2">
                  <span className="text-purple-400/70 font-semibold">출력 (보증)</span> <span className="text-purple-400 font-bold text-base">580W (유효 820W)</span>
                </li>
                <li className="flex justify-between border-b border-purple-900/50 pb-2">
                  <span className="text-purple-400/70 font-semibold">두께 / 제어</span> <span className="text-white font-bold">100mm / NPU 100 TOPS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specifications Matrix */}
      <section id="specs" className="px-4 py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">세대별 델타 매트릭스</h2>
            <p className="text-gray-400">한계를 넘어선 정량적 도약 (BSU-500 Series vs BSU-600A)</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-sm">
                  <th className="p-5 font-semibold text-gray-400 w-1/4">비교 항목</th>
                  <th className="p-5 font-bold text-blue-400 w-1/4 border-l border-gray-800">BSU-500A</th>
                  <th className="p-5 font-bold text-emerald-400 w-1/4 border-l border-gray-800">BSU-500B</th>
                  <th className="p-5 font-bold text-purple-400 w-1/4 border-l border-gray-800 bg-purple-900/20">BSU-600A (New)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">폼팩터 (두께 / 무게)</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">120 mm / 22.5 kg</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">120 mm / 22.5 kg</td>
                  <td className="p-5 font-bold text-white border-l border-gray-800 bg-purple-900/10">100 mm / 19.0 kg <span className="text-purple-400 text-xs ml-1">(-20mm)</span></td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">광학 / 집광 기술</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">마이크로 프레넬 (3.2×)</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">마이크로 프레넬 (3.2×)</td>
                  <td className="p-5 font-bold text-white border-l border-gray-800 bg-purple-900/10">QLSC 양자점 + 프레넬 (3.8×)</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">셀 아키텍처</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">단일 페로브스카이트</td>
                  <td className="p-5 text-emerald-400 border-l border-gray-800">트리플 양이온 탠덤</td>
                  <td className="p-5 font-bold text-purple-400 border-l border-gray-800 bg-purple-900/10">4T 하이브리드 올-페로브 4단</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">STC / 집광 유효 출력</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">420W / 540W</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">450W / 580W</td>
                  <td className="p-5 font-bold text-white border-l border-gray-800 bg-purple-900/10">580W / 820W <span className="text-purple-400 text-xs ml-1">(+240W)</span></td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">셀 효율 / 모듈 효율</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">33.0% / 35.0%</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">35.5% / 37.0%</td>
                  <td className="p-5 font-bold text-white border-l border-gray-800 bg-purple-900/10">45.0% / 48.3% <span className="text-purple-400 text-xs ml-1">(이론 46% 근접)</span></td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">열 출력 / 전력 온도계수</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">950 Wth / -0.32 %/°C</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">950 Wth / -0.32 %/°C</td>
                  <td className="p-5 font-bold text-white border-l border-gray-800 bg-purple-900/10">1,400 Wth / -0.18 %/°C</td>
                </tr>
                <tr className="hover:bg-gray-900/50 transition">
                  <td className="p-5 text-gray-400">AI 연산 / 제어망</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">기본 제어 MCU</td>
                  <td className="p-5 text-gray-300 border-l border-gray-800">DeepX 6 TOPS</td>
                  <td className="p-5 font-bold text-purple-400 border-l border-gray-800 bg-purple-900/10">DeepX 100 TOPS (On-device LLM)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 12-Layer Structure Section (4 Pillars) */}
      <section id="structure" className="px-6 py-24 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">단일 진실 공급원: 12-Layer 아키텍처 해부도</h2>
            <p className="text-gray-400">BSU-600A는 14계층을 12계층으로 최적화하여 100mm 슬림화와 성능 극대화를 동시에 달성했습니다.</p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* 4 Pillars 텍스트 */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="border-l-2 border-blue-500 pl-6 py-1">
                <h4 className="text-lg font-bold text-blue-400 mb-1">[Pillar 1] 광학부 (L0-L2)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">QLSC 양자점 & 메타-프레넬:</strong> UV/가시광을 950nm로 하향 변환(Down-shifting)하고 도파를 통해 유효 집광비 3.8배를 달성합니다.
                </p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6 py-1 bg-emerald-900/10 rounded-r-lg relative">
                <div className="absolute -left-2 top-3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-bold text-emerald-400 mb-1">[Pillar 2] 발전부 (L3-L5)</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-gray-100">4단 4T 하이브리드 서브셀:</strong> 2.0eV부터 0.95eV까지 스펙트럼을 분할 흡수하여 셀 효율 45%의 초고효율 발전을 실현합니다.
                </p>
              </div>
              <div className="border-l-2 border-orange-500 pl-6 py-1">
                <h4 className="text-lg font-bold text-orange-400 mb-1">[Pillar 3] 열교환부 (L8-L10)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-200">능동-수동 융합 3중 냉각:</strong> 나노유체 마이크로채널과 3D 그래핀 복합 PCM 챔버를 통해 피크 열 1,400Wth를 즉각 방출합니다.
                </p>
              </div>
              <div className="border-l-2 border-purple-500 pl-6 py-1 bg-purple-900/10 rounded-r-lg">
                <h4 className="text-lg font-bold text-purple-400 mb-1">[Pillar 4] 제어/기구 (L11-L12)</h4>
                <p className="text-purple-200/70 text-sm leading-relaxed">
                  <strong className="text-purple-300">DX-M2 100 TOPS NPU:</strong> 4채널 독립 MPPT와 온디바이스 LLM을 구동하며, 초경량 CFRP 외피로 하드웨어를 보호합니다.
                </p>
              </div>
            </div>

            {/* CSS 3D 12-Layer 입체 구조도 */}
            <div className="w-full lg:w-1/2 flex justify-center py-10 perspective-[1000px]">
              <div className="relative w-64 h-72 transform-style-3d rotate-x-[60deg] rotate-z-[-45deg] transition duration-1000 hover:rotate-z-[-35deg] hover:scale-110">
                
                {/* Pillar 1: 광학 */}
                <div className="absolute inset-0 border-2 border-blue-400/50 bg-blue-500/20 backdrop-blur-sm transform translate-z-[150px] shadow-[0_20px_30px_rgba(59,130,246,0.3)] flex items-center justify-center text-blue-200 font-bold tracking-widest text-lg">
                  L0-L2 QLSC 광학
                </div>
                
                {/* Pillar 2: 4단 탠덤 */}
                <div className="absolute inset-0 border-2 border-emerald-400/80 bg-emerald-500/40 backdrop-blur-sm transform translate-z-[100px] shadow-[0_20px_40px_rgba(16,185,129,0.4)] flex items-center justify-center text-emerald-100 font-black tracking-widest text-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-300/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                  L3-L5 4단 탠덤
                </div>

                {/* Pillar 3: 열관리 */}
                <div className="absolute inset-0 border-2 border-orange-500/50 bg-orange-600/30 backdrop-blur-md transform translate-z-[50px] shadow-[0_30px_50px_rgba(249,115,22,0.3)] flex items-center justify-center text-orange-200 font-bold tracking-widest text-lg">
                  L8-L10 나노유체/PCM
                </div>

                {/* Pillar 4: AI & 기구 (NPU) */}
                <div className="absolute inset-0 border-2 border-purple-500/80 bg-purple-900/60 backdrop-blur-md transform translate-z-[0px] shadow-[0_30px_60px_rgba(0,0,0,0.9)] flex items-center justify-center text-purple-200 font-black tracking-widest text-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,transparent_70%)] animate-pulse"></div>
                  L11-L12 100 TOPS AI
                </div>

                {/* 데이터 흐름 연결선 */}
                <div className="absolute w-1 h-[150px] bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-[75px] rotate-x-[90deg] opacity-70 shadow-[0_0_10px_#a855f7]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-black text-white tracking-widest mb-2">ARCHI-VOLT</div>
            <p className="text-gray-500 text-sm">© 2026 (주)캠프지 / ARCHI-VOLT 사업부 BSU Series 제품팀.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-1">단일 폼팩터(120mm/100mm) 혼용 설치 완벽 대응</p>
            <p className="text-gray-400 text-sm">Matter 1.3 / OpenADR 3.0 VPP / OCPP 2.0.1 지원</p>
          </div>
        </div>
      </footer>
      
      {/* 3D 애니메이션용 CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[1000px\\] { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-\\[60deg\\] { transform: rotateX(60deg); }
        .rotate-z-\\[-45deg\\] { transform: rotateZ(-45deg); }
        .translate-z-\\[150px\\] { transform: translateZ(150px); }
        .translate-z-\\[100px\\] { transform: translateZ(100px); }
        .translate-z-\\[50px\\] { transform: translateZ(50px); }
        .translate-z-\\[0px\\] { transform: translateZ(0px); }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}