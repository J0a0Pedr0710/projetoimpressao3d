import styled from 'styled-components';

export const ProfileSummarySectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[6]};
  min-width: 0;
  width: 100%;
  padding: ${({ theme }) => theme.size[6]};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.size[2]};
  background: ${({ theme }) => theme.colors.neutral50};
  box-shadow: ${({ theme }) => theme.shadow[1]};
`;

export const ProfileSummaryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size[4]};
`;

export const ProfileSummaryHeading = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
  min-width: 0;
`;
