import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import CreateGreeting from '../CreateGreeting.vue';
import { useGreetingStore } from '../../../stores/greeting.js';

describe('Create', () => {
  it('creates a greeting', () => {
    const wrapper = mount(CreateGreeting, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    const store = useGreetingStore();
    const newMessage = 'arbitrary message';

    const input = wrapper.find('input');
    input.setValue(newMessage);

    wrapper.find('form').trigger('submit');

    expect(store.addGreeting).toHaveBeenCalled();
    expect(store.addGreeting).toHaveBeenCalledWith({
      message: newMessage,
    });
  });
});
