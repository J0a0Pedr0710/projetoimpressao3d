import styled from 'styled-components';

export const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff2d55;
  color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 10px;
  transform: translate(50%, -50%) scale(0.8);
`;

export const CartContainer = styled.div`
  position: relative;
  display: inline-flex;
  border-radius: 5px;

  padding: 3px;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral200};
    transform: scale(1.2);
  }

  &:hover ${Badge} {
    background-color: ${({ theme }) => theme.colors.primary500};
  }
`;
