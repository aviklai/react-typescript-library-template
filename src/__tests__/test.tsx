import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Hello } from '../components/Hello/index';

import '../components/Hello/styles.scss';

it('Hello renders correctly', () => {
  const tree = renderer
    .create(<Hello text="hello" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});