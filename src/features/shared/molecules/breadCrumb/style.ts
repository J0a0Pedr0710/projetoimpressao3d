import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.size[1]};

  gap: ${({ theme }) => theme.size[2]};
  width: 100%;

  & > div button,
  & > span button {
    color: ${({ theme }) => theme.colors.blue500} !important;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ItemGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    color: ${({ theme }) => theme.colors.blue500};
    text-decoration: underline;
    cursor: pointer;
    background: transparent;
    border: none;
    font: inherit;
  }
`;

export const Slash = styled.div`
  color: ${({ theme }) => theme.colors.neutral500};
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;
`;

export const DropdownButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue500};
  font-weight: bold;
  font-size: ${({ theme }) => theme.size[4]};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  @media (max-width: ${({ theme }) => theme.screen.xs}) {
    background: ${({ theme }) => theme.colors.neutral50};
    box-shadow: ${({ theme }) => theme.shadow[2]};
    border-radius: ${({ theme }) => theme.size[2]};
    z-index: 10;
    min-width: 120px;
    overflow: hidden;
  }
`;

export const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.size[2]} ${({ theme }) => theme.size[3]};
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
  }
`;
