import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');
it('renders App correctly', () => {
  renderer.create(<App />);
});
