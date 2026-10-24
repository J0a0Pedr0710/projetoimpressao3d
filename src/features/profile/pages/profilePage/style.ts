import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.size[6]} ${({ theme }) => theme.size[4]};
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.size[8]} 0;
  position: relative;

  .profile-name {
    margin-top: ${({ theme }) => theme.size[4]};
    color: ${({ theme }) => theme.colors.neutral900};
  }
`;
