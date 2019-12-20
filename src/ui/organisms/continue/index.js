import * as React from "react";

import "./styles.css";

export const ContinueSection = () => {
  return (
    <div className="continue">
      <div className="wrap">
        <div className="section-title continue-title">Какие мои дальнейшие шаги?</div>
        <div className="continue-desc">
          Вы можете пройти самостоятельно путь получения ВНЖ по нашей пошаговой и очень подробной
          инструкции, либо воспользоваться услугами наших агентств-партнеров
        </div>
        <div className="continue-cta">
          <div className="btn get-btn">Получить инструкцию</div>
          <div className="btn call-btn">Обратится в агентства</div>
        </div>
      </div>
    </div>
  );
};
