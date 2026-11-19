import styled from 'styled-components';

export const ProfileDataCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.size[4]};

  width: 100%;
  padding: 0;
  position: relative;
`;

export const ProfileDataCardActions = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: start;
  gap: ${({ theme }) => theme.size[5]};
  width: 100%;
`;

export const DefaultAddressLabel = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  font-size: ${({ theme }) => theme.size[3]};
  position: absolute;
  top: ${({ theme }) => theme.size[4]};
  left: ${({ theme }) => theme.size[4]};
  z-index: 1;
`;

export const ToEditWrapper = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const ExcludeWrapper = styled.div`
  display: flex;
  grid-column: 1 / -1;
  white-space: nowrap;
`;

export const ChangePasswordWrapper = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const ProfileDataCardActionButton = styled.button`
  min-height: ${({ theme }) => theme.size[10]};
  padding: 0 ${({ theme }) => theme.size[3]};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  background: ${({ theme }) => theme.colors.neutral50};
  color: ${({ theme }) => theme.colors.neutral900};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary600};
    outline-offset: 2px;
  }
`;
