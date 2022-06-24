import React from 'react';
import {StatusBar} from 'react-native';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard, {
  ITransactionCardProps,
} from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  ProfileImage,
  Greetings,
  User,
  UserName,
  Icon,
  UserWrapper,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface IDataListProps extends ITransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      value: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      value: '59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '10/04/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      value: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '10/04/2022',
    },
    {
      id: '4',
      type: 'negative',
      title: 'RP no lolzinho',
      value: 'R$ 200,00',
      category: {
        name: 'LoL',
        icon: 'frown',
      },
      date: '10/04/2022',
    },
    {
      id: '5',
      type: 'positive',
      title: 'Freela',
      value: 'R$ 1.000,00',
      category: {
        name: 'Freelancer gig',
        icon: 'mouse-pointer',
      },
      date: '10/04/2022',
    },
  ];
  return (
    <Container>
      <StatusBar backgroundColor={'#5636D3'} />
      <Header>
        <UserWrapper>
          <UserInfo>
            <ProfileImage
              source={{
                uri: 'https://avatars.githubusercontent.com/u/92695537?v=4',
              }}
            />
            <User>
              <Greetings>Olá,</Greetings>
              <UserName>Eduardo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          value="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          value="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          value="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
