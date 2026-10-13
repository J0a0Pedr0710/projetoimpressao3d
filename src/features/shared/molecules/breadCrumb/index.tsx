import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { Text } from '@/features/shared/atoms/text';

import {
  Container,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  ItemGroup,
  Slash,
  Wrapper,
} from './style';
import type { IBreadCrumb } from './types';

export const BreadCrumb = ({ actualPage, pages }: IBreadCrumb) => {
  const { isScreenXs, openNotifyDepartureModal, isNotifyDeparture } = useApp();

  const navigate = useNavigate();

  const { saveChanges } = messages.texts;

  const [showDropdown, setShowDropdown] = useState(false);
  const [shouldShowDots, setShouldShowDots] = useState(false);
  const [isMeasured, setIsMeasured] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (to: string) => {
    if (isNotifyDeparture) {
      openNotifyDepartureModal(saveChanges, to);

      return;
    }
    navigate(to);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;

        const collapse = width < 450 && pages.length > 2;

        setIsMeasured(true);
        setShouldShowDots(collapse);
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [pages.length]);

  const displayDots = isMeasured && shouldShowDots;

  return (
    <Container ref={containerRef}>
      {displayDots ? (
        <>
          <Wrapper>
            <DropdownButton onClick={() => setShowDropdown((prev) => !prev)}>...</DropdownButton>
            {showDropdown && (
              <DropdownMenu>
                {pages.map(({ name, to }) => (
                  <DropdownItem
                    key={to}
                    onClick={() => {
                      setShowDropdown(false);
                      handleNavigation(to);
                    }}
                  >
                    {name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </Wrapper>
          <Slash>/</Slash> <Text isBold>{actualPage}</Text>
        </>
      ) : (
        <>
          {pages.map(({ name, to }, index) => (
            <ItemGroup key={to}>
              <Text style={{ gap: '10px' }} size={isScreenXs ? 'sm' : 'xs'} textColor="link">
                <button onClick={() => handleNavigation(to)}>{name}</button>
              </Text>
              <Slash>/</Slash> {index < pages.length - 1}
            </ItemGroup>
          ))}
          <Text style={{ marginTop: '3px' }} size={isScreenXs ? 'sm' : 'xs'} isBold>
            {actualPage}
          </Text>
        </>
      )}
    </Container>
  );
};
