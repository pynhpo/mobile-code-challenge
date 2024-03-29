import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type PropsType = {
  fill?: string;
  width?: number;
  height?: number;
};

export const HomeSvg = (props: PropsType): React.ReactElement => {
  const { fill = '#ddd', width = 24, height = 24 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
      <G transform="translate(-2 4) translate(2 -4)">
        <Path fill="rgba(255, 255, 255, 0)" d="M0 0H24V24H0z"></Path>
        <G fill={fill}>
          <Path d="M23.5 14.772c0 .067 0 .133-.069.133a.149.149 0 01-.138-.133c-.207-.266-10.675-11.323-11.157-11.723-.207-.2-.275-.133-.482.067C11.588 3.182.707 14.639.569 14.838c-.069.067-.138.067-.138-.067a10.912 10.912 0 01-.413-3.663 10.341 10.341 0 011.515-5.062A11.451 11.451 0 019.384.318 11.829 11.829 0 0120.61 3.582a10.907 10.907 0 013.237 6.261 8.818 8.818 0 01.138 1.932 15.1 15.1 0 01-.485 2.997z"></Path>
          <Path d="M3.531 20.034c-.069-.067-.138-.133 0-.266s8.195-8.593 8.402-8.793c.069-.067.138-.067.138 0 .275.333 8.2 8.726 8.4 8.859.069.067.069.133-.069.133a9.34 9.34 0 01-1.515 1.266 11.776 11.776 0 01-5.923 2.131 6.121 6.121 0 01-1.1.067 11.907 11.907 0 01-8.333-3.397z"></Path>
        </G>
      </G>
    </Svg>
  );
};
