import React, { useContext } from "react";
import { AppContext } from "app";

export const HomeContainer = () => {
  const [{ filterQuery }] = useContext(AppContext);
  return <div style={{ color: "white" }}>Home{filterQuery}</div>;
};
