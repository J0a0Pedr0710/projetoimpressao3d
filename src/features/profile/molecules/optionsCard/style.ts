import styled from 'styled-components';

export const OptionsCardStyle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size[4]};

  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  border-radius: ${({ theme }) => theme.size[2]};
  width: 100%;
  height: 96px;
  box-sizing: border-box;

  box-shadow: ${({ theme }) => theme.shadow[1]};

  padding: 0 ${({ theme }) => theme.size[4]};
  position: relative;
`;
