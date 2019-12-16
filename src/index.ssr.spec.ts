/**
 * @jest-environment node
 */

import { config } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Transitiona11y from './index';
import Child, { TEXT } from './__mocks__/ChildComponent';

// @ts-ignore
config.stubs.transition = false;

describe('SSR', () => {
  test('It renders transition component', async () => {
    const wrapper = await renderToString(Transitiona11y, {
      context: {
        props: {
          name: 'fade',
        },
      },
      slots: {
        default: [Child],
      },
    });

    expect(wrapper).toContain('span');
    expect(wrapper).toContain(TEXT);
  });
});
