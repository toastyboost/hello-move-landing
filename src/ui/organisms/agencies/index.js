import * as React from "react";

import "./styles.css";

import { benefitsList } from "./data";

export const AgenciesSection = () => {
  return (
    <div className="agencies">
      <div className="wrap">
        <h2 className="section-title agencies-title">Эти агентства готовы вам помочь</h2>
        <div className="agencies-desc">
          Мы сотрудничаем с проверенными агентствами, которые помогут вам пройти весь процесс
          получения ВНЖ
        </div>
        <div className="benefits">
          {benefitsList.map(({ title, text, icon }, key) => (
            <div className="agencies-benefits-item benefits-item" key={key}>
              <div className="agencies-benefits-icon benefits-icon" data-icon={icon} />
              <div className="benefits-content">
                <div className="benefits-title agencies-benefits-title">
                  <b>{title}</b>
                </div>
                <div className="benefits-text agencies-benefits-text">{text}</div>
                <div className="btn benefits-btn">Обратится &rarr;</div>
              </div>
            </div>
          ))}
        </div>
        <div className="agencies-cta">
          <div className="btn agencies-btn">Показать еще </div>
        </div>
      </div>
    </div>
  );
};
