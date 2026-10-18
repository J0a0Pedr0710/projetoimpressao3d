import styled from 'styled-components';

export const ErrorMessageStyled = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.size[1]};
  margin-top: ${({ theme }) => theme.size[1]};
  margin-left: ${({ theme }) => theme.size[2]};

  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    margin-top: ${({ theme }) => theme.size[1]};
    margin-left: ${({ theme }) => theme.size[1]};
  }
`;

export const ErrorMessageWrapper = styled.div`
  margin-left: ${({ theme }) => theme.size[20]};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    margin-top: ${({ theme }) => theme.size[1]};
    margin-left: ${({ theme }) => theme.size[2]};
    margin-left: ${({ theme }) => theme.size[12]};
  }
`;
