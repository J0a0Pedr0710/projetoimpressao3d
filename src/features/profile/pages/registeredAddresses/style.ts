import styled from 'styled-components';

export const RegisterAddressesStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Divider = styled.div`
  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    width: 200px;
    border: 3px solid ${({ theme }) => theme.colors.primary900};
    border-radius: ${({ theme }) => theme.size[2]};

    background: ${({ theme }) => theme.colors.neutral500};
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: none;
  }
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[6]};
`;

export const AddressesList = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size[6]};
  height: 100%;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.size[4]};
  }
`;
