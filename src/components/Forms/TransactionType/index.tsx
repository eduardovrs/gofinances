import React from 'react';
import {Container, Icon, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface IProps extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButon({type, title, isActive, ...rest}: IProps) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
