import React from 'react';
import {StatusBar} from 'react-native';
import {categories} from '../../utils/categories';
import {
  Container,
  Title,
  Header,
  CategoryList,
  Category,
  Icon,
  Name,
  Footer,
  SelectButton,
  ButtonText,
} from './styles';

interface ICategory {
  key: string;
  name: string;
}

interface IProps {
  category: ICategory;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  closeSelectedCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectedCategory,
}: IProps) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <Container>
      <StatusBar backgroundColor={'#5636D3'} />
      <Header>
        <Title>Categorias</Title>
      </Header>
      <CategoryList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />
      <Footer>
        <SelectButton onPress={closeSelectedCategory}>
          <ButtonText>Selecionar</ButtonText>
        </SelectButton>
      </Footer>
    </Container>
  );
}
