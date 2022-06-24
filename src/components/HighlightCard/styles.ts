import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  height: 220px;
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  padding: 19px 23px;
  border-radius: 5px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.font_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(48)}px;
  ${({type}) =>
    type === 'up' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `};

  ${({type}) =>
    type === 'down' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `};

  ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Value = styled.Text<TypeProps>`
  font-size: ${RFValue(34)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.font_dark};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.font_dark};
`;
