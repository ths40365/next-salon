import SectionHeading from "@/components/SectionHeading";
// 店舗カードコンポーネントのインポート
import ShopCard from "@/components/ShopCard"
// モックデータのインポート
// import { MOCK_SHOPS } from "@/data/MockData";
import { getShops } from "@/lib/services/shops";
// 使えません
// import { useEffect } from "react";

// このコンポーネントは非同期通信を行う
export default async function Home() {
  // shops にモックデータを代入
  // const shops = MOCK_SHOPS;
  // API 経由なので非同期通信じゃないとデータを取得できない
  const shops = await getShops()
  // ServerComponent では使えません
  // useEffect(() => {
  //   console.log(shops);
  // }, [shops]);

  return (
    <div>
      <SectionHeading
        eyebrow="Featured Shops"
        title="今日の気分から選べるサロン"
        description="エリアやメニューから、あなたにぴったりのサロンを見つけましょう。"
      />
      <div className="mt-8 gap-3 grid md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}
