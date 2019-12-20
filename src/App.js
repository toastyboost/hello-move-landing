import * as React from "react";

import {
  //
  HeroSection,
  AboutSection,
  AgenciesSection,
  ConsultSection,
  AdvantagesSection,
  CashbackSection,
  StepsSection,
  ContinueSection,
} from "src/ui/organisms";

import "src/static/fonts/fonts.css";

import "src/styles/normalize.css";
import "src/styles/default.css";
import "src/styles/common.css";

export const App = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AgenciesSection />
      <ConsultSection />
      <AdvantagesSection />
      <CashbackSection />
      <StepsSection />
      <ContinueSection />
    </>
  );
};

export default App;
