import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

interface ITransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  width: ${RFPercentage(55)};
  height: 140px;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.font_dark};
`;

export const Value = styled.Text<ITransactionProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({theme, type}) =>
    type === 'negative' ? theme.colors.attention : theme.colors.success};
`;
export const Footer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  margin-right: 17px;
`;
export const CategoryName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
`;
export const Date = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 24px;
  color: ${({theme}) => theme.colors.text};
`;
