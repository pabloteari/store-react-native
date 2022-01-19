import 'react-native';
import React from 'react';
import ProductShoppingPanel from '../../src/components/product-panel-shopping-cart';

import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');

it('product shopping panel render correctly', () => {
  renderer.create(<ProductShoppingPanel />);
});

test('renders tree shopping correctly', () => {
  const tree = renderer.create(<ProductShoppingPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});
