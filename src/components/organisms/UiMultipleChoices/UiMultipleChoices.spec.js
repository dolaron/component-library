import { mount } from '@vue/test-utils';
import UiMultipleChoices from './UiMultipleChoices.vue';
import UiMultipleChoicesItem from './_internal/UiMultipleChoicesItem.vue';

describe('UiMultipleChoices.vue', () => {
  test('renders a component', () => {
    const wrapper = mount(UiMultipleChoices);
    expect(wrapper.classes('ui-multiple-choices')).toBe(true);
  });
  test('a component emits update:modelValue as array', async () => {
    const wrapper = mount(UiMultipleChoices, {
      props: {
        choices: [{
          id: 6,
          name: 'I have diabetes',
          linked_observation: 'p_8',
        }],
      },
    });
    const emitted = [{ id: 'p_8', choice_id: 'present', source: 'initial' }];
    await wrapper.find('input[type="radio"]').trigger('click');
    expect(wrapper.emitted('update:modelValue')[0][0]).toStrictEqual(emitted);
  });
  test('a possible to pass custom choices by options property', () => {
    const options = [{ name: 'I think so', value: 'present' }];
    const wrapper = mount(UiMultipleChoices, {
      props: {
        choices: [{
          id: 6,
          name: 'I have diabetes',
          linked_observation: 'p_8',
        }],
        options,
      },
    });
    const choicesItemOptions = wrapper.findComponent(UiMultipleChoicesItem).vm.options;
    expect(choicesItemOptions).toStrictEqual(options);
  });
});