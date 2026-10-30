import styled from 'styled-components';

export const Teste = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.size[4]};

  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  border-radius: ${({ theme }) => theme.size[2]};
  height: 100%;

  box-shadow: ${({ theme }) => theme.shadow[1]};

  padding: ${({ theme }) => theme.size[4]};
  padding-top: ${({ theme }) => theme.size[8]};
  position: relative;
`;
