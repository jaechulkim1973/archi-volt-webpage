import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      <Head>
        <title>ARCHI-VOLT | 건축 외피 일체형 BIPV의 새로운 기준</title>
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 transition-all">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-white tracking-widest uppercase">
            ARCHI-VOLT<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
            <a href="#structure" className="hover:text-blue-400 transition">Structure</a>
            <a href="#technology" className="hover:text-blue-400 transition">Technology</a>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            도입 문의
          </a>
        </div>
      </nav>

      {/* Hero Section (Code-generated Background) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-800 flex items-center justify-center">
        {/* CSS 코드 기반 추상화된 스마트 빌딩 그리드 배경 */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-950 to-gray-950">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 pb-2">
              최고의 에너지 밀도,
            </span>
            마찰 없는 통합.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            건축가의 디자인 의도를 훼손하지 않는 완벽한 일체감. <br/>
            다이크로익 마이크로 프레넬 광학과 페로브스카이트 탠덤 셀이 결합된 <br className="hidden md:block"/>
            건물 전기·열 통합 에너지 솔루션.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#products" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              제품 라인업
            </a>
            <a href="#structure" className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              혁신 구조 탐색
            </a>
          </div>
        </div>
      </section>

      {/* Product Image & Spec Section */}
      <section id="products" className="px-6 py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">플랫폼의 진화: BSU-500 Series</h2>
            <p className="text-gray-400">500 × 2,400 × 120 mm 표준 커튼월 규격 플러그 앤 플레이 모듈</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 코드로 직접 만든 BIPV 모듈 렌더링 그래픽 */}
            <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 p-8 flex items-center justify-center">
              <div className="w-full max-w-[250px] aspect-[1/4] bg-gray-950 border-8 border-gray-700 rounded shadow-2xl flex flex-col p-1 gap-1 relative z-10 transform group-hover:scale-105 transition duration-700">
                {/* 태양광 탠덤 셀 패턴 (24셀) */}
                <div className="grid grid-cols-2 grid-rows-12 gap-1 w-full h-full opacity-90">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-900/80 to-blue-800/40 border border-blue-500/20 rounded-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_45%,rgba(255,255,255,0.1)_50%,transparent_55%)]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded text-blue-400 border border-blue-500/30">
                Plug & Play 100% 하위 호환성
              </div>
              {/* 후광 효과 */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] z-0"></div>
            </div>

            {/* 제품 스펙 비교표 */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {/* BSU-500A */}
              <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
                <h3 className="text-2xl font-bold text-gray-200 mb-2">BSU-500A <span className="text-sm font-normal text-gray-500 ml-2">A-Series</span></h3>
                <p className="text-sm text-gray-400 mb-4">안정적인 고효율 BIPV 통합 플랫폼</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div><span className="block text-gray-500 text-xs">상부셀 조성</span> FAPbI₃ 단일</div>
                  <div><span className="block text-gray-500 text-xs">출력 (STC/집광)</span> 420W / 540W</div>
                  <div><span className="block text-gray-500 text-xs">연간 발전량</span> 620 kWh</div>
                  <div><span className="block text-gray-500 text-xs">신뢰성 (습열)</span> 1,000h</div>
                </div>
              </div>

              {/* BSU-500B */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900/30 p-8 rounded-2xl border border-emerald-500/50 relative shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div className="absolute top-0 right-0 bg-emerald-500 text-gray-950 text-xs font-black px-4 py-1.5 rounded-bl-xl rounded-tr-xl">
                  NEW EDITION
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">BSU-500B <span className="text-sm font-normal text-blue-200/50 ml-2">B-Series</span></h3>
                <p className="text-sm text-gray-400 mb-4">트리플 양이온 격자 구조를 통한 궁극의 성능</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div><span className="block text-blue-400/70 text-xs">상부셀 조성 (Drop-in)</span> Cs/FA/MA 트리플 양이온</div>
                  <div><span className="block text-blue-400/70 text-xs">출력 (보증)</span> <span className="font-bold text-emerald-400">450W</span> / 580W <span className="text-emerald-400 text-xs">(+30W)</span></div>
                  <div><span className="block text-blue-400/70 text-xs">연간 발전량 (보증)</span> <span className="font-bold text-emerald-400">680 kWh</span> <span className="text-emerald-400 text-xs">(+60kWh)</span></div>
                  <div><span className="block text-blue-400/70 text-xs">신뢰성 극한 돌파</span> 1,500h 통과</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section (코드로 구현한 3D 14-Layer 구조도) */}
      <section id="structure" className="px-6 py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">14-레이어 시스템: 진화의 선택과 집중</h2>
            <p className="text-gray-400">오직 핵심 광학층(L4·L5)만 업그레이드하여 기구/열관리 플랫폼의 마찰을 제로화했습니다.</p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* 레이어 설명 텍스트 */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="border-l-2 border-gray-700 pl-6">
                <h4 className="text-xl font-bold text-gray-200 mb-2">보호 & 광학층 (L0-L3)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  저철분 강화유리와 3.2배 집광용 마이크로 프레넬 필름(L1)이 빛을 제어합니다. 입사광을 파장별로 88% 분광 분리합니다.
                </p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6 bg-emerald-900/10 py-3 rounded-r-lg relative">
                <div className="absolute -left-2 top-4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h4 className="text-xl font-bold text-emerald-400 mb-2">[혁신의 층] 탠덤 셀 캡슐화 (L4-L5)</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  두께 500nm의 <strong className="text-emerald-300">Cs/FA/MA 상부셀(L4)</strong>과 170nm <strong className="text-emerald-300">ITO 캐비티(L5)</strong>. 단일 양이온의 열화 한계를 극복하고 보증 효율 37%를 달성합니다.
                </p>
              </div>
              <div className="border-l-2 border-orange-500/50 pl-6">
                <h4 className="text-xl font-bold text-orange-400/80 mb-2">기구 & 열관리 통합 (L6-L13)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Si HJT 하부셀(L6) 아래로 Roll-bond 냉각판(L9), 급탕/난방용 듀얼 PCM 챔버(L10/L11)가 결합되어 미활용 열을 회수하고 발열을 사전 저감합니다.
                </p>
              </div>
            </div>

            {/* CSS 3D 14-Layer 입체 구조도 */}
            <div className="w-full lg:w-1/2 flex justify-center py-10 perspective-[1000px]">
              <div className="relative w-64 h-64 transform-style-3d rotate-x-[60deg] rotate-z-[-45deg] transition duration-1000 hover:rotate-z-[-35deg] hover:scale-110">
                
                {/* L0-L3: 유리 및 광학 필름 (최상단) */}
                <div className="absolute inset-0 border-2 border-blue-400/50 bg-blue-500/20 backdrop-blur-sm transform translate-z-[120px] shadow-[0_20px_30px_rgba(59,130,246,0.3)] flex items-center justify-center text-blue-200 font-bold tracking-widest text-lg">
                  L0-L3
                </div>
                
                {/* L4-L5: 트리플 양이온 탠덤 셀 (중간 - 혁신의 층) */}
                <div className="absolute inset-0 border-2 border-emerald-400/80 bg-emerald-500/40 backdrop-blur-sm transform translate-z-[60px] shadow-[0_20px_40px_rgba(16,185,129,0.4)] flex items-center justify-center text-emerald-100 font-black tracking-widest text-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-300/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                  L4-L5
                </div>

                {/* L6-L13: PCM 챔버 및 기구 프레임 (최하단) */}
                <div className="absolute inset-0 border-2 border-orange-500/50 bg-orange-600/30 backdrop-blur-md transform translate-z-[0px] shadow-[0_30px_50px_rgba(0,0,0,0.8)] flex items-center justify-center text-orange-200 font-bold tracking-widest text-lg">
                  L6-L13
                </div>

                {/* 연결선 (시각적 데코레이션) */}
                <div className="absolute w-1 h-[120px] bg-gradient-to-b from-blue-400 via-emerald-400 to-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-[60px] rotate-x-[90deg] opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-black text-white tracking-widest mb-2">ARCHI-VOLT</div>
            <p className="text-gray-500 text-sm">© 2026 (주)캠프지 / ARCHI-VOLT 사업부 BSU-500 제품팀.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-1">본 솔루션은 M10 유니버설 앵커를 통한</p>
            <p className="text-gray-400 text-sm">6모듈 세로 연결체 혼용 배치를 지원합니다.</p>
          </div>
        </div>
      </footer>
      
      {/* 3D 애니메이션용 CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[1000px\\] { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-\\[60deg\\] { transform: rotateX(60deg); }
        .rotate-z-\\[-45deg\\] { transform: rotateZ(-45deg); }
        .translate-z-\\[120px\\] { transform: translateZ(120px); }
        .translate-z-\\[60px\\] { transform: translateZ(60px); }
        .translate-z-\\[0px\\] { transform: translateZ(0px); }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}