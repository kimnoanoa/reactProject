import React from "react";
import BannerSlider from "../components/BannerSlider";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const products = [
    { image: "/images/whiteTable.jpg", title: "화이트 원목 테이블", price: "129,000" },
    { image: "/images/minimalStand.jpg", title: "미니멀 조명 스탠드", price: "89,000" },
    { image: "/images/fabricSofa.jpg", title: "패브릭 소파", price: "329,000" },
  ];

  return (
    <div className="home">
      <BannerSlider />
      <h2 className="section-title">추천 가구</h2>
      <div className="card-grid">
        {products.map((item, i) => <Card key={i} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
