import * as React from "react";

import "./styles.css";

import { advantagesList } from "./data";

export const AdvantagesSection = () => {
  return (
    <div className="advantages">
      <div className="wrap">
        <div className="section-title advantages-title">Преимущества программы</div>
        <div className="advantages-list">
          {advantagesList.map(({ title, text, count }, key) => (
            <React.Fragment key={key}>
              <div className="advantages-item" data-item={count}>
                <div className="advantages-subtitle">{title}</div>
                <p className="advantages-text" dangerouslySetInnerHTML={{ __html: text }} />
              </div>
              <div className="advantage-separator" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
