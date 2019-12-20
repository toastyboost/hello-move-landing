import * as React from "react";

import "./styles.css";

import { benefitsList } from "./data";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="wrap hero-wrap">
        <div className="hero-leftside">
          <h1 className="hero-title">Золотая виза Испания</h1>
          <p className="hero-desc">
            Самый простой способ получить ВНЖ для инвесторов и состоятельных людей
          </p>
        </div>
        <div className="hero-rightside">
          <div className="benefits hero-benefits">
            {benefitsList.map(({ title, text, icon }, key) => (
              <div className="benefits-item" key={key}>
                <div className="benefits-icon hero-benefits-icon" data-icon={icon} />
                <div className="benefits-content">
                  <div className="benefits-title" dangerouslySetInnerHTML={{ __html: title }} />
                  <p className={`benefits-text ${icon}`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
