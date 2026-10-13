import type React from 'react';
import { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import type { ITooltip } from './types';

export const Tooltip = ({
  children,
  render,
  color,
  id,
  disable,
  place,
  size,
  truncate,
}: ITooltip) => {
  const tooltipId = id ?? uuidv4();
  const theme = useTheme();
  const truncateRef = useRef<HTMLElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const style = {
    backgroundColor: theme.colors[color ?? 'neutral500'],
    zIndex: theme.zIndex.xhigh,
  };

  const isOpen = truncate ? (isTruncated ? undefined : false) : undefined;

  const checkTruncation = () => {
    const el = truncateRef.current?.firstElementChild as HTMLElement | null;
    if (el) setIsTruncated(el.scrollWidth > el.offsetWidth);
  };

  useEffect(() => {
    if (truncate) checkTruncation();
  }, [truncate, children]);

  const handleMouseEnter = truncate ? checkTruncation : undefined;

  return (
    <>
      <div
        data-tooltip-id={tooltipId}
        data-testid={tooltipId}
        ref={truncate ? (truncateRef as React.RefObject<HTMLDivElement>) : undefined}
        onMouseEnter={handleMouseEnter}
        style={{
          width: size ?? 'auto',
        }}
      >
        {children}
      </div>
      {!disable &&
        createPortal(
          <ReactTooltip
            id={tooltipId}
            style={style}
            opacity={'100%'}
            place={place}
            positionStrategy="fixed"
            isOpen={isOpen}
          >
            {render}
          </ReactTooltip>,
          document.body,
        )}
    </>
  );
};
