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