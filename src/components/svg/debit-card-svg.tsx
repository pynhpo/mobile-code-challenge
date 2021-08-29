import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type PropsType = {
  fill?: string;
  width?: number;
  height?: number;
};

export const DebitCardSvg = (props: PropsType): React.ReactElement => {
  const { fill = '#ddd', width = 24, height = 24 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
      <G transform="translate(-2.5 4)">
        <Path
          fill="rgba(255, 255, 255, 0)"
          d="M0 0H24V24H0z"
          transform="translate(2.5 -4)"></Path>
        <Path
          fill={fill}
          d="M23.5 0H.5a.474.474 0 00-.5.5v7.053a2.485 2.485 0 002.5 2.519h19A2.485 2.485 0 0024 7.553V.5a.474.474 0 00-.5-.5zm-20 4.03h4a.504.504 0 010 1.008h-4a.504.504 0 010-1.008zm7 3.023h-7a.504.504 0 010-1.008h7a.504.504 0 010 1.008zm8.5 0a1.68 1.68 0 01-1-.3 1.68 1.68 0 01-1 .3 2.015 2.015 0 010-4.03 1.68 1.68 0 011 .3 1.68 1.68 0 011-.3 2.015 2.015 0 010 4.03z"
          transform="translate(2.5 -91.333) translate(0 98.333)"></Path>
        <Path
          fill={fill}
          d="M21.5 0h-19C1.1 0 0 1.378 0 3.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V3.132C24 1.378 22.9 0 21.5 0z"
          transform="translate(2.5 -91.333) translate(0 90.333)"></Path>
      </G>
    </Svg>
  );
};
