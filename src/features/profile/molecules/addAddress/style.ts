import styled from 'styled-components';

export const AddAddressStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size[4]};
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors.neutral300};
  border-style: dashed;
  border-radius: ${({ theme }) => theme.size[2]};
  width: 100%;
  height: 265px;

  padding: ${({ theme }) => theme.size[4]};
  padding-top: ${({ theme }) => theme.size[8]};
  position: relative;
`;
