import styled from 'styled-components';

export const ProfileAddressCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: ${({ theme }) => theme.size[6]};
  height: 100%;
`;

export const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.size[3]};
  width: 100%;
  padding: ${({ theme }) => theme.size[4]};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.size[2]};
`;

export const AddressCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
`;

export const DefaultAddressLabel = styled.span`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
`;

export const Divider = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.screen.md}) {
    display: flex;
    width: 1px;
    height: 100%;
    border-radius: 1000px;
    background-color: ${({ theme }) => theme.colors.neutral300};
  }
`;

export const ToAlterWrapepr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

export const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

export const SetAsDefaultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
