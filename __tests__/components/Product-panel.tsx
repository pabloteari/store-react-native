import 'react-native';
import React from 'react';
import ProductPanel from '../../src/components/product-panel';

import renderer from 'react-test-renderer';
jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');

it('product panel render correctly', () => {
  renderer.create(
    <ProductPanel
      id={'1'}
      name={'name'}
      image={'image'}
      stock={0}
      price={'price'}
      createdAt={'createAt'}
      count={0}
    />,
  );
});

test('renders tree product correctly', () => {
  const tree = renderer
    .create(
      <ProductPanel
        id={'1'}
        name={'name'}
        image={'image'}
        stock={0}
        price={'price'}
        createdAt={'createAt'}
        count={0}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
