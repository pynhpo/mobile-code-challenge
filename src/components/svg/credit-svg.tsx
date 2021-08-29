import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type PropsType = {
  fill?: string;
  width?: number;
  height?: number;
};

export const CreditSvg = (props: PropsType): React.ReactElement => {
  const { fill = '#ddd', width = 25.5, height = 25 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 25.5 25" {...props}>
      <G transform="translate(-1 4.499) translate(1.5 -4)">
        <Path fill="rgba(255, 255, 255, 0)" d="M0 0H25V24H0z"></Path>
        <Path
          fill={fill}
          d="M12 24A12 12 0 013.515 3.516a12 12 0 0116.97 16.971A11.922 11.922 0 0112 24zM10.453 9.746v8.837a1.162 1.162 0 001.161 1.161h.775a1.162 1.162 0 001.161-1.161V9.746l3.5 3.652a1.159 1.159 0 001.659.021l.527-.533a1.161 1.161 0 00.342-.827 1.142 1.142 0 00-.342-.812l-6.413-6.422a1.159 1.159 0 00-1.64 0l-6.426 6.422a1.155 1.155 0 00-.342.824 1.142 1.142 0 00.342.815l.527.533a1.166 1.166 0 00.823.339 1.151 1.151 0 00.842-.36l3.5-3.65z"></Path>
      </G>
    </Svg>
  );
};
