import React from 'react';
import {
  Container,
  Title,
  Value,
  Footer,
  Icon,
  CategoryName,
  Date,
  Category,
} from './styles';

interface ICategory {
  name: string;
  icon: string;
}

export interface ITransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  value: string;
  category: ICategory;
  date: string;
}

interface Props {
  data: ITransactionCardProps;
}

export default function TransactionCard({data}: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Value type={data.type}>
        {data.type === 'negative' && '- '}
        {data.value}
      </Value>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
