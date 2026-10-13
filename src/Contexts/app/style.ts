import styled from 'styled-components';

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: ${({ theme }) => theme.size[14]};
  gap: ${({ theme }) => theme.size[2]};

  width: 100vw;
  height: fit-content;

  z-index: ${({ theme }) => theme.zIndex.alert};

  @media (min-width: ${({ theme }) => theme.screen.xs}) {
    bottom: ${({ theme }) => theme.size[2]};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[2]};
  background: ${({ theme }) => theme.colors.neutral50};

  padding: ${({ theme }) => theme.size[6]};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};

  width: 90vw;

  max-width: 25.875rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size[2]};
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
