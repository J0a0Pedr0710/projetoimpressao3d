import styled from 'styled-components';

export const PasswordRulesStyle = styled.div``;

export const PasswordRules = styled.div`
  list-style: none;
  padding: ${({ theme }) => theme.size[0]};
  margin: ${({ theme }) => theme.size[0]};
`;

export const Li = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[0.5]};
  margin-bottom: ${({ theme }) => theme.size[1]};
  font-size: ${({ theme }) => theme.size[3.5]};

  &.valid {
    color: ${({ theme }) => theme.colors.success};
  }

  &.invalid {
    color: ${({ theme }) => theme.colors.error};
  }

  svg {
    width: ${({ theme }) => theme.size[3.5]};
    height: ${({ theme }) => theme.size[3.5]};
    margin-top: ${({ theme }) => theme.size[0.5]};
    flex-shrink: 0;
  }
`;
