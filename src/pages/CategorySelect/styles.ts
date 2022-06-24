import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface ICategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const CategoryList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Category = styled.TouchableOpacity<ICategoryProps>`
  flex-direction: row;
  width: 100%;
  padding: ${RFValue(15)}px;
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.text};
  background-color: ${({theme, isActive}) =>
    isActive ? theme.colors.success_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

export const SelectButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
