import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';
import {css} from 'styled-components';

interface IconProps {
  type: 'up' | 'down';
}

interface IContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  width: 48%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  border: solid 1.5px ${({theme}) => theme.colors.text_light};
  ${({isActive, type}) =>
    isActive === true &&
    type === 'up' &&
    css`
      background-color: ${({theme}) => theme.colors.success_light};
      border: 0px;
    `}

  ${({isActive, type}) =>
    isActive === true &&
    type === 'down' &&
    css`
      background-color: ${({theme}) => theme.colors.attention_light};
      border: 0px;
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({theme, type}) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title};
`;
