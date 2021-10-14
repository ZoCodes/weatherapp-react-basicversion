import React from "react";
import "./assets";

export default function WeatherIcon(props) {
  return <img src={assets[props.code]} alt="Weather" />;
}
