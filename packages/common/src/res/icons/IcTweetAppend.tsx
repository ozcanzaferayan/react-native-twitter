import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcTweetAppend: React.FC<SvgProps> = props => {
  return (
    <Svg height="100" viewBox="0 0 24 24"   {...props}>
      <Path
        fill={props.fill}
        d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"/>
    </Svg>
  );
}

export default IcTweetAppend;