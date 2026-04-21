import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      <Head>
        <title>ARCHI-VOLT | 커튼월 일체형 BIPV 모듈</title>
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 transition-all">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-white tracking-widest uppercase">
            ARCHI-VOLT<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
            <a href="#specs" className="hover:text-blue-400 transition">Specifications</a>
            <a href="#structure" className="hover:text-blue-400 transition">Structure</a>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            도입 문의
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-950 to-gray-950">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/50 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-md">
            Integrated Curtain-Wall BIPV Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 pb-2">
              최고의 에너지 밀도,
            </span>
            마찰 없는 통합.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            건축가의 디자인 의도를 훼손하지 않는 완벽한 일체감. <br/>
            다이크로익 마이크로 프레넬 광학과 페로브스카이트 탠덤 셀이 결합된 <br className="hidden md:block"/>
            건물 전기·열 통합 에너지 솔루션 BSU-500 시리즈.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#products" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              제품 모델 보기
            </a>
            <a href="#specs" className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              상세 스펙 비교
            </a>
          </div>
        </div>
      </section>

      {/* Product Lineup Section */}
      <section id="products" className="px-6 py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ARCHI-VOLT Product Lineup</h2>
            <p className="text-gray-400">단일 규격(500×2,400×120mm) 플랫폼으로 100% 하위 호환성 및 혼용 배치를 지원합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BSU-500A (A-Series) */}
            <div className="bg-gray-950 p-10 rounded-3xl border border-gray-700 hover:border-blue-500 transition duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition duration-500"></div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">BSU-500A</h3>
              <p className="text-blue-400 font-semibold mb-6">A-Series : 통합 플랫폼의 시작</p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                FAPbI₃ 단일 페로브스카이트 상부셀을 적용하여 집광, 분광, 열저장이 하나의 유닛에서 완결되는 고효율 BIPV 모듈입니다.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="w-32 text-gray-500">상부셀 화학조성</span> FAPbI₃ 단일 양이온
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="w-32 text-gray-500">출력 (보증)</span> 420W (집광 시 540W)
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="w-32 text-gray-500">모듈 / 셀 효율</span> 35.0% / 33.0%
                </li>
              </ul>
            </div>

            {/* BSU-500B (B-Series) */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 p-10 rounded-3xl border border-emerald-500/50 relative shadow-[0_0_30px_rgba(16,185,129,0.1)] group">
              <div className="absolute top-0 right-0 bg-emerald-500 text-gray-950 text-sm font-black px-5 py-2 rounded-bl-2xl rounded-tr-3xl shadow-lg">
                NEW EDITION
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition duration-500"></div>
              
              <h3 className="text-3xl font-bold text-gray-100 mb-2">BSU-500B</h3>
              <p className="text-emerald-400 font-semibold mb-6">B-Series : 트리플 양이온 에디션</p>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                오직 상부셀(L4)과 광캐비티(L5)만 Drop-in 업그레이드하여, 단일 조성의 열화 한계를 극복하고 발전량과 신뢰성을 극대화했습니다.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span className="w-32 text-emerald-500/70 font-semibold">상부셀 화학조성</span> <span className="text-white font-bold">Cs/FA/MA 트리플 양이온</span>
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span className="w-32 text-emerald-500/70 font-semibold">출력 (보증)</span> <span className="text-emerald-400 font-bold">450W (집광 시 580W)</span>
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  <span className="w-32 text-emerald-500/70 font-semibold">모듈 / 셀 효율</span> <span className="text-emerald-400 font-bold">37.0% / 35.5%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specifications Table Section */}
      <section id="specs" className="px-6 py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">델타 매트릭스 상세 비교</h2>
            <p className="text-gray-400">BSU-500A와 BSU-500B의 핵심 성능 지표를 비교합니다.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700">
                  <th className="p-6 font-semibold text-gray-300 w-1/3">비교 항목</th>
                  <th className="p-6 font-bold text-blue-400 w-1/3 border-l border-gray-800">BSU-500A (A-Series)</th>
                  <th className="p-6 font-bold text-emerald-400 w-1/3 border-l border-gray-800 bg-emerald-900/10">BSU-500B (B-Series)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">외형 / 기구 규격</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800" colSpan={2}>
                    <div className="text-center font-semibold text-gray-200">500 × 2,400 × 120 mm / 22 kg / 100% 동일 (Plug & Play)</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">상부셀 화학조성</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800">FAPbI₃ 단일 페로브스카이트</td>
                  <td className="p-6 font-bold text-emerald-400 border-l border-gray-800 bg-emerald-900/5">Cs/FA/MA 트리플 양이온</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">STC 출력 / 집광 보증</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800">420W / 540W</td>
                  <td className="p-6 font-bold text-white border-l border-gray-800 bg-emerald-900/5">450W / 580W <span className="text-emerald-500 text-xs ml-1">(+30W)</span></td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">모듈 효율 / 셀 효율</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800">35.0% / 33.0%</td>
                  <td className="p-6 font-bold text-white border-l border-gray-800 bg-emerald-900/5">37.0% / 35.5% <span className="text-emerald-500 text-xs ml-1">(+2.0%p)</span></td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">연간 발전량 (단위 모듈)</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800">620 kWh</td>
                  <td className="p-6 font-bold text-white border-l border-gray-800 bg-emerald-900/5">680 kWh <span className="text-emerald-500 text-xs ml-1">(+60 kWh)</span></td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">극한 신뢰성 (습열 DH)</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800">1,000h (출력 감소 &lt; 5%)</td>
                  <td className="p-6 font-bold text-emerald-400 border-l border-gray-800 bg-emerald-900/5">1,500h (안정성 극대화)</td>
                </tr>
                <tr className="hover:bg-gray-900/50 transition">
                  <td className="p-6 text-gray-400">열관리 시스템</td>
                  <td className="p-6 text-gray-300 border-l border-gray-800" colSpan={2}>
                    <div className="text-center text-gray-300">Roll-bond 냉각판 + 듀얼 PCM 챔버 (저온 55°C / 고온 80°C) 공통 적용</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Structure Section (코드로 구현한 3D 14-Layer 구조도) */}
      <section id="structure" className="px-6 py-24 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">14-레이어 공통 시스템 아키텍처</h2>
            <p className="text-gray-400">집광, 분광, 발열 제어가 하나의 유닛 안에서 완결되는 첨단 구조입니다.</p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* 레이어 설명 텍스트 */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="border-l-2 border-gray-700 pl-6">
                <h4 className="text-xl font-bold text-gray-200 mb-2">보호 & 3.2x 광학층 (L0-L3)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  마이크로 프레넬 필름(L1)이 입사 태양광을 3.2배 집광하고, TiO₂/SiO₂ 다층 코팅으로 파장대별로 88% 분리하여 효율을 극대화합니다.
                </p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6 bg-emerald-900/10 py-3 rounded-r-lg relative">
                <div className="absolute -left-2 top-4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h4 className="text-xl font-bold text-emerald-400 mb-2">탠덤 셀 캡슐화 (L4-L5)</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  BSU-500A는 FAPbI₃를, BSU-500B는 두께 500nm의 <strong className="text-emerald-300">Cs/FA/MA 트리플 양이온 셀</strong>을 적용합니다. ITO 광캐비티(170nm)로 전류를 완벽히 정합합니다.
                </p>
              </div>
              <div className="border-l-2 border-orange-500/50 pl-6">
                <h4 className="text-xl font-bold text-orange-400/80 mb-2">기구 & 열 분산 통합 (L6-L13)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  근적외선(NIR) 대역을 사전 분리하여 셀 발열을 28% 저감시키며, 남은 잔열은 PCM 챔버에 9,600kJ 용량으로 저장되어 건물 난방에 사용됩니다.
                </p>
              </div>
            </div>

            {/* CSS 3D 14-Layer 입체 구조도 */}
            <div className="w-full lg:w-1/2 flex justify-center py-10 perspective-[1000px]">
              <div className="relative w-64 h-64 transform-style-3d rotate-x-[60deg] rotate-z-[-45deg] transition duration-1000 hover:rotate-z-[-35deg] hover:scale-110">
                {/* L0-L3: 유리 및 광학 필름 */}
                <div className="absolute inset-0 border-2 border-blue-400/50 bg-blue-500/20 backdrop-blur-sm transform translate-z-[120px] shadow-[0_20px_30px_rgba(59,130,246,0.3)] flex items-center justify-center text-blue-200 font-bold tracking-widest text-lg">
                  L0-L3 광학
                </div>
                {/* L4-L5: 탠덤 셀 */}
                <div className="absolute inset-0 border-2 border-emerald-400/80 bg-emerald-500/40 backdrop-blur-sm transform translate-z-[60px] shadow-[0_20px_40px_rgba(16,185,129,0.4)] flex items-center justify-center text-emerald-100 font-black tracking-widest text-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-300/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                  L4-L5 셀
                </div>
                {/* L6-L13: PCM 챔버 및 기구 프레임 */}
                <div className="absolute inset-0 border-2 border-orange-500/50 bg-orange-600/30 backdrop-blur-md transform translate-z-[0px] shadow-[0_30px_50px_rgba(0,0,0,0.8)] flex items-center justify-center text-orange-200 font-bold tracking-widest text-lg">
                  L6-L13 열관리
                </div>
                {/* 연결선 */}
                <div className="absolute w-1 h-[120px] bg-gradient-to-b from-blue-400 via-emerald-400 to-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-[60px] rotate-x-[90deg] opacity-50"></div>
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
            <p className="text-gray-500 text-sm">© 2026 (주)캠프지 / ARCHI-VOLT 사업부 BSU-500 제품팀.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-1">DeepX NPU AI 제어 기반 최적화</p>
            <p className="text-gray-400 text-sm">M10 유니버설 앵커 6모듈 세로 연결체 플러그 앤 플레이 지원</p>
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