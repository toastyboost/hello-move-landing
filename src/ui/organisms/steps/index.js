import * as React from "react";

import "./styles.css";

import { stepsList } from "./data";

export const StepsSection = () => {
  return (
    <div className="steps">
      <div className="wrap steps-about">
        <div className="section-title steps-title">Краткое описание шагов по программе</div>
        <div className="steps-list">
          {stepsList.map(({ title, text }, key) => (
            <div className="steps-item" data-item={key} key={key}>
              <div className="steps-subtitle">{title}</div>
              <p className="steps-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
