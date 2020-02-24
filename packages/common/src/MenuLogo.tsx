import React from 'react';
import { SvgProps } from 'react-native-svg';


type Props = {
  Icon: React.FC<SvgProps>;
  color?: string;
}

const MenuLogo: React.FC<Props> = props => {
  const Icon = props.Icon;
  const color = props.color == null ? '#ffffff' : props.color;

  return (
    <Icon fill={color} width={24} height={24} />
  );
}

export default MenuLogo;