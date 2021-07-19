import React, { memo, CSSProperties, useCallback, MouseEvent } from 'react';
import styled from 'styled-components';
import useScrollProgress from './hooks/useScrollProgress';

export type ScrollProgressLineProps = {
  backgroundColor: string;
  progressColor: string;
  height?: string | number;
  customStyle?: CSSProperties;
  disableClick?: boolean;
  clickCallback?: () => void | Promise<void>;
}

const ScrollProgressLine = ({
  backgroundColor,
  progressColor,
  height = '5px',
  customStyle,
  disableClick = false,
  clickCallback = () => {},
}: ScrollProgressLineProps): JSX.Element => {
  const {
    progressRef,
    handleProgressMove,
    width,
  } = useScrollProgress();

  const onClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
    if (disableClick) {
      return;
    }

    handleProgressMove(e);
    clickCallback();
  }, []);

  return (
    <ScrollProgressLineWrapper
      ref={progressRef}
      onClick={onClick}
      backgroundColor={backgroundColor}
      height={String(height)}
      style={customStyle}
    >
      <ScrollProgress
        width={width}
        progressColor={progressColor}
      ></ScrollProgress>
    </ScrollProgressLineWrapper>
  );
}

type ScrollProgressLineWrapperProps = {
  backgroundColor: string;
  height: string;
}

const ScrollProgressLineWrapper = styled.div<ScrollProgressLineWrapperProps>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  cursor: pointer;
`;

type ScrollProgressProps = {
  progressColor: string;
  width: number;
}

const ScrollProgress = styled.div<ScrollProgressProps>`
  width: ${({ width }) => width + '%'};
  height: 100%;
  background-color: ${({ progressColor }) => progressColor};
`;

export default memo(ScrollProgressLine);