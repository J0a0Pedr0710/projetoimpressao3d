import styled from 'styled-components';

export const ProfileAddressCardWrapper = styled.div`
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
