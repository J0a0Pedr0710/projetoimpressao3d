import styled from 'styled-components';

export const OrderCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[3]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  border-radius: ${({ theme }) => theme.size[2]};
  padding: ${({ theme }) => theme.size[4]};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  width: 100%;
`;

export const OrderCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size[2]};
`;

export const OrderCardItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size[2]};
`;

export const OrderCardItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
`;

export const OrderCardItemImg = styled.img`
  width: ${({ theme }) => theme.size[10]};
  height: ${({ theme }) => theme.size[10]};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.size[1]};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
`;

export const OrderCardTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
`;

export const StatusBadge = styled.span<{ status: 'pending' | 'paid' | 'canceled' }>`
  font-size: ${({ theme }) => theme.size[3]};
  font-weight: 600;
  padding: ${({ theme }) => `${theme.size[1]} ${theme.size[3]}`};
  border-radius: ${({ theme }) => theme.size[20]};
  background: ${({ theme, status }) =>
    status === 'paid'
      ? theme.colors.success
      : status === 'canceled'
        ? theme.colors.error
        : theme.colors.warning};
  color: ${({ theme }) => theme.colors.neutral50};
`;
