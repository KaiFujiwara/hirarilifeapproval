import PageTransition from '@/components/PageTransition';

export default function Discography() {
  return (
    <main className="flex-grow">
      <PageTransition>
        <div className="container mx-auto px-6 sm:px-8 md:px-4 pt-8 md:pt-16 pb-28 md:pb-48">
          <h1 className="text-4xl font-bold text-center mb-16">DISCOGRAPHY</h1>

          <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-0">
            <div className="space-y-8">
              {/* 動画タイトル */}
              <h2 className="text-2xl font-bold">
                1st Single「Re:start」
              </h2>

              {/* YouTube埋め込み - レスポンシブ対応 */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/JfJjZK9yOLQ?si=HhYPAJ1_qC9JRfMs" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* 説明文 */}
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed">
                  2024年10月14日リリース。バンド初のオフィシャルミュージックビデオ。
                  都会の喧騒と静寂が交錯する中で、現代を生きる若者たちの心情を繊細に描いた楽曲。
                  プロデュースにはシーンで注目のダイナマイト山崎を迎え、バンドの新たな一面を引き出すことに成功している。
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  );
}
