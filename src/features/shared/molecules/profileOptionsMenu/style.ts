import styled from 'styled-components';

import type { IStyledButton } from './types';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.neutral50};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  height: fit-content;
  width: ${({ theme }) => theme.size[64]};
  box-shadow: ${({ theme }) => theme.shadow[1]};

  margin-right: 0.3rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin-bottom: 0;
    margin-top: 1rem;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.size[4]};

  padding: ${({ theme }) => theme.size[4]};
  margin: 2px;
  text-align: left;
  background: ${({ theme }) => theme.colors.neutral50};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ProfileName = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.size[5]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
  line-height: 1.2;
`;

export const ProfileEmail = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.size[3]};
  color: ${({ theme }) => theme.colors.neutral900};
  line-height: 1.4;
  word-break: break-word;
`;

export const Separator = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.neutral400};
  margin: 4px;
`;

export const MenuItems = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.size[1]} 0;
`;

export const MenuItemStyled = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.size[3]};

  padding: ${({ theme }) => theme.size[2]} ${({ theme }) => theme.size[3]};

  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  min-width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  &:active {
    background: ${({ theme }) => theme.colors.neutral200};
  }
`;

export const Avatar = styled.img`
  width: 27px;
  height: 27px !important;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
  border-radius: 50%;
`;

export const NameAbbreviation = styled.div`
  width: 27px;
  height: 27px;
  padding: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary800};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  font-size: 8px;
`;

export const ProfileButton = styled.button<IStyledButton>`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.size[2]};
  border: ${({ $isOpen, theme }) => ($isOpen ? `2px solid ${theme.colors.blue700}` : 'none')};
  border-radius: 4px;

  &:hover {
    transform: scale(1.15);
  }
`;
export const ProfileButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.size[1]};
`;
