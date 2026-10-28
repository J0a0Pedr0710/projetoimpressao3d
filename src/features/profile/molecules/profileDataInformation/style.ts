import styled from 'styled-components';

export const ProfileDataInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: ${({ theme }) => theme.size[4]};
`;
