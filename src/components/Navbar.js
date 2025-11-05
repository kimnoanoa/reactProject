import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RoomMind</div>
      <ul className="menu">
        <li>홈</li>
        <li>AI 추천</li>
        <li>쇼핑</li>
        <li>인테리어</li>
        <li>커뮤니티</li>
      </ul>
      <div className="auth">
        <button className="login-btn">로그인</button>
        <button className="signup-btn">회원가입</button>
      </div>
    </nav>
  );
}

export default Navbar;

