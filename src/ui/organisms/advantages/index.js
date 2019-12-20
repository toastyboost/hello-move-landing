import * as React from "react";

import "./styles.css";

import { advantagesList } from "./data";

export const AdvantagesSection = () => {
  return (
    <div className="advantages">
      <div className="wrap">
        <div className="section-title advantages-title">Преимущества программы</div>
        <div className="advantages-list">
          {advantagesList.map(({ title, text, count }) => (
            <>
              <div className="advantages-item" data-item={count}>
                <div className="advantages-subtitle">{title}</div>
                <p className="advantages-text">{text}</p>
              </div>
              <div className="advantage-separator" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
