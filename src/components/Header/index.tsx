import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div>Header</div>;
};
