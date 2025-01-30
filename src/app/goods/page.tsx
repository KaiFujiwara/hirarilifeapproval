import PageTransition from '@/components/PageTransition';
import Image from 'next/image';

const goods = [
  {
    title: "1st Demo Tape「夜明けの詩」",
    image: "/goods_3.png",  // 仮の画像パス
    price: "¥2,000",
    description: "バンド初のデモテープ。アナログならではの温かみのある音色で、初期の名曲3曲を収録。限定100本。クリアカセットケース使用。"
  },
  {
    title: "Live Tape「新宿路上ライブ 2024」",
    image: "/goods_1.png",  // 仮の画像パス
    price: "¥2,500",
    description: "2024年1月、新宿路上ライブの音源を完全収録。生々しいライブの熱気がそのまま詰まった永久保存版。特製ステッカー付き。"
  },
  {
    title: "Compilation Tape「深夜の音源集」",
    image: "/goods_2.png",  // 仮の画像パス
    price: "¥2,300",
    description: "未発表音源とレアトラックを集めたコンピレーション。深夜のスタジオで録音された秘蔵の音源を含む全6曲を収録。"
  }
];

export default function Goods() {
  return (
    <main className="flex-grow">
      <PageTransition>
        <div className="container mx-auto px-6 sm:px-8 md:px-4 pt-8 md:pt-16 pb-28 md:pb-48">
          <h1 className="text-4xl font-bold text-center mb-16">GOODS</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-8 md:px-0">
            {goods.map((item) => (
              <div 
                key={item.title}
                className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* 画像 */}
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* テキストコンテンツ */}
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h2>
                  
                  <p className="text-2xl font-bold text-gray-800">
                    {item.price}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </main>
  );
}
