import React from "react";
import "./Home.css";
import Transition from "../../components/Transition/Transition";

import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Home = () => {
  return <ComingSoon deadline="05 09 2024 20:20:20 UTC+1" />;
};

export default Transition(Home);
