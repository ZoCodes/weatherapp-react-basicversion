import React from "react";

export default function WeatherIcon(props) {
  return <img src={`/assets/${props.code}.png`} alt="Weather" width="60" />;
}
