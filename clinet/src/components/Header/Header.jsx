import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import TopbBar from "../topBar/TopBar";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <TopbBar />
        <Navbar />
        <div className="header-content">
          <div className="header-title">
            <h1 >
              A lifetime of discounts? It's Genius.
            </h1>
          </div>
          <div className="header-desc">
            <p >
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
          </div>
          <div className="header_btn">
          <Button className="primary">Sign in / Register</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
