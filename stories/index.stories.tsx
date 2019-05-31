import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from '../src/components/Hello';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';

import '../src/components/Hello/styles.scss';

storiesOf('Hello', module).add(
  "with text",
  withInfo({ inline: true })(() => (
    <Hello text="Testing Hello" />
  )),
);