import React from 'react';
import {StatusBar, Modal} from 'react-native';
import {Button} from '../../components/Forms/Button';
import {CategorySelectButton} from '../../components/Forms/CategorySelectButton';
import Input from '../../components/Forms/Input';
import {TransactionTypeButon} from '../../components/Forms/TransactionType';
import {CategorySelect} from '../CategorySelect';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionButtonWrapper,
} from './styles';

export default function Register() {
  const [category, setCategory] = React.useState({
    key: 'category',
    name: 'Categoria',
  });
  const [transactionType, setTransactionType] = React.useState('');
  const [categoryModalOpen, setcategoryModalOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectedCategoryModal() {
    setcategoryModalOpen(true);
  }

  function handleCloseSelectedCategoryModal() {
    setcategoryModalOpen(false);
  }

  function handleRegister() {
    const data = {
      name,
      value,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <Container>
      <StatusBar backgroundColor={'#5636D3'} />
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input
            placeholder="Nome"
            placeholderTextColor={'#969CB2'}
            onChangeText={setName}
          />
          <Input
            placeholder="Preço"
            placeholderTextColor={'#969CB2'}
            onChangeText={setValue}
          />
          <TransactionButtonWrapper>
            <TransactionTypeButon
              type="up"
              title="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButon
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionButtonWrapper>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectedCategoryModal}
          />
        </Fields>
        <Button title="Enviar" onPress={handleRegister} />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectedCategory={handleCloseSelectedCategoryModal}
        />
      </Modal>
    </Container>
  );
}
