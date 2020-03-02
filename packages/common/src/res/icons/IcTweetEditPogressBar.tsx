import React from "react";
import Svg, { Path, SvgProps, Circle, CircleProps } from "react-native-svg";
import colors from "../styles/colors";

export interface CircleSvgProps extends SvgProps {
  r: number;
  strokearray: number;
  strokeoffset: number;
  passiveStrokeColor: string;
}

const IcTweetEditPogressBar: React.FC<CircleSvgProps> = props => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" {...props} >
      <Circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r={props.r}
        stroke={props.passiveStrokeColor}
      />
      <Circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r={props.r}
        stroke={props.fill}
        strokeLinecap="round"
        strokeDashoffset={props.strokeoffset}
        strokeDasharray={props.strokearray} // 2 * pi * r
      />
    </Svg>
  );
};

export default IcTweetEditPogressBar;
