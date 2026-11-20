import styled from 'styled-components';

export const ProfilePersonalDataPageWrapper = styled.form`
  margin-bottom: ${({ theme }) => theme.size[4]};
  gap: ${({ theme }) => theme.size[20]};
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

export const ProfilePersonalDataPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[6]};
`;

export const ProfilePersonalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
  min-width: 0;
`;
