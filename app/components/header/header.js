"use client";
import "./header.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link href="/">
            <Image
              className="logo"
              src={"/assets/cross.png"}
              width={60}
              height={60}
              alt="man reading book"
            />
          </Link>
        </div>
        <div className="burger-menu-icon" onClick={toggleMenu}>
          <MenuOutlined />
        </div>

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
        <div className={`header-right-mobile ${isMenuOpen ? "open" : ""}`}>
          <div className="burger-menu-close" onClick={toggleMenu}>
            <CloseOutlined />
          </div>
          <div className="header-right-mobile-inner">
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
        </div>
      </div>
    </div>
  );
}

export default Header;
