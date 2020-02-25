import React from 'react';
import { SvgProps } from 'react-native-svg';
import spacing from '../res/styles/spacing';
import colors from '../res/styles/colors';


type Props = {
  Icon: React.FC<SvgProps>;
  color?: string;
}

const MenuLogo: React.FC<Props> = props => {
  const Icon = props.Icon;
  const color = props.color == null ? colors.text : props.color;

  return (
    <Icon fill={color} width={spacing.icon} height={spacing.icon} />
  );
}

export default MenuLogo;