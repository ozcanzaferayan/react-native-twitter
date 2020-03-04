import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IcBookmarksActive: React.FC<SvgProps> = props => {
  return (
    <Svg height="100" viewBox="0 0 24 24"  {...props}>
      <Path
        fill={props.fill}
        d="M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"
      />
    </Svg>
  );
}

export default IcBookmarksActive;