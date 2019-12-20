import * as React from "react";

import "./styles.css";

export const AboutSection = () => {
  return (
    <div className="about">
      <div className="wrap wrap-about">
        <div className="about-leftside" />
        <div className="about-rightside">
          <div className="section-title about-title">О программе</div>
          <p className="about-desc">
            Испания является одной из наиболее приоритетных стран для инвестирования средств
            состоятельных граждан. Золотая виза ― это возможность получить разрешение на пребывание
            в Испании 365 дней в году, а через 5 лет получить ПМЖ. В отличие от обычного Вида на
            Жительство, данный вариант НЕ требует обязательного пребывания на территории государства
            больше 181 дня в год. Кроме того, полученный ВНЖ позволяет заявителю официально
            трудоустроиться.
          </p>
        </div>
      </div>
    </div>
  );
};
