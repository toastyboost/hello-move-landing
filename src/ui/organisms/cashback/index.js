import * as React from "react";

import "./styles.css";

export const CashbackSection = () => {
  return (
    <div className="cashback">
      <div className="wrap cashback-wrap">
        <div className="cashback-leftside">
          <div className="section-title cashback-title">
            5% cash-back при <br />
            обращении к агентству
          </div>
          <p className="cashback-desc">
            Оставьте заявку прямо сейчас и получите cash-back от HelloMove после оплаты услуг
            агентств-партнера. Используйте cash-back при последующих оплатах наших услуг
          </p>
          <div className="cashback-cta">
            <div className="btn cashback-btn">Написать агентствам</div>
          </div>
        </div>
      </div>
    </div>
  );
};
