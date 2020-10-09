import React from "react";
import Header from "../Header/Header";
import TinderCards from "./TinderCards/TinderCards";
import SwipeButtons from "./SwipeButtons";

export default function Cards() {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}
