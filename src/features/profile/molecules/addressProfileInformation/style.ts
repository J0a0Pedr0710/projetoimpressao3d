import styled from 'styled-components';

export const AddressProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: ${({ theme }) => theme.size[2]};
`;

export const AddDeliveryInstructionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;

  button {
    color: ${({ theme }) => theme.colors.link};

    line-height: 150%;
    letter-spacing: 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;
