import * as React from "react";

import "./styles.css";

import { benefitsList } from "./data";

export const AgenciesSection = () => {
  return (
    <div className="agencies">
      <div className="wrap">
        <h2 className="section-title agencies-title">Эти агентства готовы вам помочь</h2>
        <p className="agencies-desc">
          Мы сотрудничаем с проверенными агентствами, которые помогут вам пройти весь процесс
          получения ВНЖ
        </p>
        <div className="benefits">
          {benefitsList.map(({ title, text, icon }) => (
            <div className="agencies-benefits-item benefits-item">
              <div className="agencies-benefits-icon benefits-icon" data-icon={icon} />
              <div className="benefits-content">
                <div className="agencies-benefits-title benefits-title">
                  <b>{title}</b>
                </div>
                <p className="agencies-benefits-text benefits-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="agencies-cta">
          <div className="btn agencies-btn">Показать еще</div>
        </div>
      </div>
    </div>
  );
};
