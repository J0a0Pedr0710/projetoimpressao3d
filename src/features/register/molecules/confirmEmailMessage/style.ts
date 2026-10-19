import styled from 'styled-components';

export const EmailConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 488px;

  gap: ${({ theme }) => theme.size[2]};

  justify-items: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }
`;

export const InstructionText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.size[4]};
  font-family: 'Source Sans 3', serif;
`;

export const TextEmail = styled.strong`
  text-decoration: underline;
`;
