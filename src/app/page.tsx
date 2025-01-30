'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-grow relative">
      {/* 固定背景とオーバーレイ */}

      {/* 最初のビューポート - アニメーションテキスト */}
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-between items-center space-x-4 px-4 -mt-28">

          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            className="writing-vertical text-6xl font-bold"
          >
            かき鳴らせ
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="writing-vertical text-6xl font-bold"
          >
            世界を
          </motion.div>

          
        </div>
      </div>

      {/* スクロールで表示されるメインコンテンツ */}
      <div ref={contentRef} className="">
        <motion.div
          style={{ opacity }}
          className="container mx-auto px-6 sm:px-8 md:px-4 pb-32"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-3xl font-bold mb-8">
              ひらり生活の稟議
            </h1>
            <p className="text-lg leading-relaxed">
              東京を拠点に活動する3人組ロックバンド。
              緻密に計算された楽曲と、荒々しくも繊細な演奏で、
              聴く者の心を揺さぶる音楽を追求している。
              <br /><br />
              2023年結成。路上ライブからスタートし、
              独自の世界観と圧倒的な演奏力で着実にファンを増やしていく。
              2024年、待望のファーストデモ「Re:start」をリリース。
              インディーズシーンで注目を集める。
              <br /><br />
              現在は、東京を中心としたライブ活動を展開しながら、
              次なる作品の制作に向けて精力的に活動中。
              音楽の可能性を追求し続ける3人の挑戦は、まだ始まったばかり。
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
