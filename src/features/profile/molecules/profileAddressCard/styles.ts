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

export const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.size[4]};

  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  border-radius: ${({ theme }) => theme.size[2]};
  width: 100%;
  height: 100%;

  box-shadow: ${({ theme }) => theme.shadow[1]};

  padding: ${({ theme }) => theme.size[4]};
  padding-top: ${({ theme }) => theme.size[8]};
  position: relative;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: calc(50% - ${({ theme }) => theme.size[3]});
  }

  @media (min-width: ${({ theme }) => theme.screen.xl}) {
    width: calc(33.333% - ${({ theme }) => theme.size[3]});
  }

  @media (min-width: ${({ theme }) => theme.screen.xl2}) {
    width: calc(25% - ${({ theme }) => theme.size[3]});
  }
`;

export const AddressCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const DefaultAddressLabel = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  font-size: ${({ theme }) => theme.size[3]};
  position: absolute;
  top: ${({ theme }) => theme.size[4]};
  left: ${({ theme }) => theme.size[4]};
  z-index: 1;
`;

export const Divider = styled.div`
  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    width: 1px;
    height: ${({ theme }) => theme.size[5]};
    background: ${({ theme }) => theme.colors.neutral500};
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: none;
  }
`;

export const ToAlterWrapepr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  button {
    color: ${({ theme }) => theme.colors.link};

    line-height: 150%;
    letter-spacing: 0;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    button {
      border: 1px solid ${({ theme }) => theme.colors.neutral300};
      border-radius: ${({ theme }) => theme.size[20]};
      padding: ${({ theme }) => theme.size[3]};
      width: 100%;
    }
  }
`;

export const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  button {
    color: ${({ theme }) => theme.colors.link};

    line-height: 150%;
    letter-spacing: 0;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    button {
      border: 1px solid ${({ theme }) => theme.colors.neutral300};
      border-radius: ${({ theme }) => theme.size[20]};
      padding: ${({ theme }) => theme.size[3]};
      width: 100%;
    }
  }
`;

export const SetAsDefaultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  button {
    color: ${({ theme }) => theme.colors.link};

    line-height: 150%;
    letter-spacing: 0;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    button {
      border: 1px solid ${({ theme }) => theme.colors.neutral300};
      border-radius: ${({ theme }) => theme.size[20]};
      padding: ${({ theme }) => theme.size[3]};
      width: 100%;
    }
  }
`;
