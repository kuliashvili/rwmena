"use client";
import "./header.css";
import { useState } from "react";
import Image from "next/image";
import Reader from "../../../public/assets/reading.jpg";
import Link from "next/link";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // `header-right ${isMenuOpen ? "open" : ""}`

  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <Image
            className="logo"
            src={Reader}
            width={60}
            height={60}
            alt="man reading book"
          />
        </div>
        <div className="burger-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        {/* for pic menu */}
        {/* for pic menu */}
        {/* for pic menu */}
        <div className="header-right">
          <div className="header-item">
            <Link href="/" className="header-item-text">
              მთავარი
            </Link>
          </div>
          <div className="header-item">
            <p className="header-item-text">ბლოგები</p>
          </div>
          <div className="header-item">
            <Link href="/info" className="header-item-text">
              ინფორმაცია
            </Link>
          </div>
          <div className="header-item">
            <p className="header-item-text">კონტაქტი</p>
          </div>
        </div>
        {/* for burger menu */}
        {isMenuOpen && (
          <div className="header-right-mobile">
            <div className="burger-menu-close" onClick={toggleMenu}>
              x
            </div>
            <div className="header-right-mobile-inner">
              <div className="header-item">
                <Link href="/" className="header-item-text">
                  მთssssავარი
                </Link>
              </div>
              <div className="header-item">
                <p className="header-item-text">ბლოგები</p>
              </div>
              <div className="header-item">
                <Link href="/info" className="header-item-text">
                  ინფორმაცია
                </Link>
              </div>
              <div className="header-item">
                <p className="header-item-text">კონტაქტი</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
