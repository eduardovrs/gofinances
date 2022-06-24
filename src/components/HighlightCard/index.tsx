import React from 'react';
import {
  Container,
  Title,
  Value,
  LastTransaction,
  Header,
  Icon,
  Footer,
} from './styles';

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  value: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export default function HighlightCard({
  type,
  title,
  value,
  lastTransaction,
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Value type={type}>{value}</Value>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
