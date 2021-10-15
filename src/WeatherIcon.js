import React from "react";
import "./Assets";

export default function WeatherIcon(props) {
  return <img src={`/assets/${props.code}.png`} alt="Weather" />;
}
