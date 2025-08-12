import React from "react";

export default function App() {
  const sayHello = () => {
    alert("Halo! Thankiess udah mengunjungi portofolio enjOi.");
  };

  return (
    <>
      {/* Navigasi */}
      <nav className="navigasi clearfix">
        <div className="logo">
          <h2>𝜗ৎ Portofolio</h2>
        </div>

        <div className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#project">Project & Achievements</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
