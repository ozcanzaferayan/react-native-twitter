import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IcMessagesActive: React.FC<SvgProps> = props => {
  return (
    <Svg height="100" viewBox="0 0 24 24"  {...props}>
      <Path fill={props.fill} d="M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z"/>
      <Path fill={props.fill} d="M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z"/>
    </Svg>
  );
}

export default IcMessagesActive;