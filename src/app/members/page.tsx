import PageTransition from '@/components/PageTransition';
import Image from 'next/image';

const members = [
  {
    name: "Co:uRyo",
    part: "Vocal & Guitar",
    description: "バンドのフロントマンとして、独特な歌声とギターで楽曲を牽引。幼少期からギターを始め、高校時代にバンドを結成。楽曲の作詞作曲も手がける。影響を受けたアーティストは、細野晴臣、坂本龍一、David Bowie。",
    image: "/member_1.png",  // 仮の画像パス
    imagePosition: "left"
  },
  {
    name: "Risi Rico",
    part: "Bass",
    description: "重厚なベースラインと繊細なコーラスワークを担当。クラシカルな音楽教育を受けた後、ロックに転向。バンドのサウンドの要として、リズム隊を支える。好きなベーシストは、Paul McCartney、John Paul Jones。",
    image: "/member_2.png",  // 仮の画像パス
    imagePosition: "right"
  },
  {
    name: "CATAN",
    part: "Drums",
    description: "グルーヴィーなドラミングでバンドの推進力となる。ジャズドラムをルーツに持ち、様々なジャンルの音楽性を取り入れた独自のプレイスタイルが特徴。影響を受けたドラマーは、Steve Gadd、Elvin Jones。",
    image: "/member_3.png",  // 仮の画像パス
    imagePosition: "left"
  }
];

export default function Members() {
  return (
    <main className="flex-grow">
      <PageTransition>
        <div className="container mx-auto px-6 sm:px-8 md:px-4 pt-8 md:pt-16 pb-28 md:pb-48">
          <h1 className="text-4xl font-bold text-center mb-16">MEMBERS</h1>
          
          <div className="space-y-24 max-w-6xl mx-auto px-4 sm:px-8 md:px-0">
            {members.map((member) => (
              <div 
                key={member.name}
                className={`flex flex-col gap-8 ${
                  member.imagePosition === 'right' 
                    ? 'md:flex-row-reverse' 
                    : 'md:flex-row'
                }`}
              >
                {/* 画像部分 */}
                <div className="md:w-1/2">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg max-w-md mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover hover:scale-90 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* テキスト部分 */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className={`space-y-4 ${
                    member.imagePosition === 'right' 
                      ? 'md:pr-12' 
                      : 'md:pl-12'
                  }`}>
                    <h2 className="text-3xl font-bold">{member.name}</h2>
                    <p className="text-xl">{member.part}</p>
                    <p className="leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </main>
  );
}
