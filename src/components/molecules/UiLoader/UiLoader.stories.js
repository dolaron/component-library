
import UiLoader from '@/components/molecules/UiLoader/UiLoader.vue';
import UiButton from '@/components/atoms/UiButton/UiButton.vue';
import UiPopover from '@/components/molecules/UiPopover/UiPopover.vue';
import UiContainer from '@/components/organisms/UiContainer/UiContainer.vue';
import UiSidePanel from '@/components/organisms/UiSidePanel/UiSidePanel.vue';
import UiControls from '@/components/organisms/UiControls/UiControls.vue';

export default {
  title: 'Molecules/Loader',
  component: UiLoader,
  subcomponents: {},
  args: {
    tag: 'div',
    transition: 'fade',
    loaderAttrs: {},
  },
  argTypes: {
    tag: { control: 'text' },
    transition: { control: 'text' },
  },
};
const Template = (args) => ({
  components: { UiLoader },
  setup() {
    return { ...args };
  },
  template: `<UiLoader
    :is-loading="isLoading"
    :loader-attrs="loaderAttrs"
    :type="type"
    :transition="transition"
    class="absolute w-full h-full flex justify-center items-center"
  >It seems you’re offline right now. Please check your connection and try again.</UiLoader>`,
});

export const Spinner = Template.bind({});
Spinner.parameters = {
  layout: 'fullscreen',
};
Spinner.decorators = [() => ({ template: '<div style="min-height: 320px;"><story /></div>' })];

export const SpinnerOnDark = (args) => ({
  components: { UiLoader },
  setup() {
    return { ...args };
  },
  template: `<UiLoader
    :is-loading="isLoading"
    :loader-attrs="loaderAttrs"
    :type="type"
    :transition="transition"
    :tag="tag"
    class="absolute w-full h-full flex justify-center items-center"
    style="background: var(--color-blue-600)"
  >
    It seems you’re offline right now. Please check your connection and try again.
  </UiLoader>`,
});
SpinnerOnDark.args = {
  loaderAttrs: {
    class: 'ui-loader-spinner--on-dark',
  },
};
SpinnerOnDark.parameters = {
  layout: 'fullscreen',
};
SpinnerOnDark.decorators = [() => ({ template: '<div style="min-height: 320px;"><story /></div>' })];

export const LoadingButton = (args) => ({
  components: { UiLoader, UiButton },
  setup() {
    return { ...args };
  },
  template: `<UiButton class="relative">
    <UiLoader
      :is-loading="isLoading"
      :loader-attrs="loaderAttrs"
      :type="type"
      :transition="transition"
      :tag="tag"
      class="absolute"
    />
    <span :class="{ 'opacity-0': isLoading }">
      Next
    </span>
  </UiButton>`,
});
LoadingButton.args = {
  type: 'ellipsis',
};

export const LoadingPopover = (args) => ({
  components: { UiLoader, UiPopover },
  setup() {
    return { ...args };
  },
  template: `<UiPopover
    title="Loading..."
    class="max-w-80 ui-popover--has-arrow"
    style="--popover-content-padding: 0"
  >
    <UiLoader
      :is-loading="isLoading"
      :loader-attrs="loaderAttrs"
      :type="type"
      :transition="transition"
      :tag="tag"
      style="--loader-skeleton-block-tablet-height: 0.75rem; --loader-skeleton-block-tablet-margin: 0 0 var(--space-24); padding: var(--space-16)"
    >
      <template #loader-blocks>
        <div class="ui-loader-skeleton__block"/>
        <div class="ui-loader-skeleton__block" style="width: 50%;"/>
        <div class="ui-loader-skeleton__block" style="width: 75%;"/>
        <div class="ui-loader-skeleton__block" style="width: 50%;"/>
      </template>
      A custom Symptomate app that you can use anywhere.
    </UiLoader>
  </UiPopover>`,
});
LoadingPopover.args = {
  type: 'skeleton',
};

export const LoadingContainer = (args) => ({
  components: { UiLoader, UiContainer },
  setup() {
    return { ...args };
  },
  template: `<UiContainer
    class="max-w-195 w-full"
    style="--container-padding: var(--space-40) var(--space-48);"
  >
    <UiLoader
      :is-loading="isLoading"
      :loader-attrs="loaderAttrs"
      :type="type"
      :transition="transition"
      :tag="tag"
      style="--loader-skeleton-block-tablet-margin: var(--space-12) 0 var(--space-20);"
    >
      <template #loader-blocks>
        <div class="ui-loader-skeleton__block" style="width: 75%;"/>
        <div class="ui-loader-skeleton__block" style="width: 50%;"/>
        <div class="ui-loader-skeleton__block"/>
        <div class="ui-loader-skeleton__block" style="width: 50%;"/>
      </template>
      A custom Symptomate app that you can use anywhere.
    </UiLoader>
  </UiContainer>`,
});
LoadingContainer.args = {
  type: 'skeleton',
};

export const LoadingSidePanel = (args) => ({
  components: { UiLoader, UiSidePanel },
  setup() {
    return { ...args };
  },
  template: `<UiSidePanel
    :model-value="true"
    title="Loading..."
  >
    <UiLoader
      :is-loading="isLoading"
      :loader-attrs="loaderAttrs"
      :type="type"
      :transition="transition"
      :tag="tag"
      style="--loader-skeleton-block-tablet-margin: var(--space-12) 0 var(--space-20);"
    >
      <template #loader-blocks>
        <div class="ui-loader-skeleton__block" style="width: 75%;"/>
        <div class="ui-loader-skeleton__block" style="width: 50%;"/>
        <div class="ui-loader-skeleton__block"/>
        <div class="ui-loader-skeleton__block" style="width: 50%;"/>
      </template>
      A custom Symptomate app that you can use anywhere.
    </UiLoader>
  </UiSidePanel>`,
});
LoadingSidePanel.args = {
  type: 'skeleton',
};
LoadingSidePanel.decorators = [() => ({ template: '<div style="--backdrop-position: absolute; --side-panel-position: absolute; --side-panel-z-index: 0; min-height: 320px;"><story /></div>' })];

export const LoadingControls = (args) => ({
  components: { UiLoader, UiControls },
  setup() {
    return { ...args };
  },
  template: `<UiControls
    to-next="#"
    to-back="#"
    :invalid="false"
    class="max-w-195 min-h-135 w-full"
  >
    <UiLoader
      :is-loading="isLoading"
      :loader-attrs="loaderAttrs"
      :type="type"
      :transition="transition"
      :tag="tag"
      class="flex-1"
      style="--loader-skeleton-block-tablet-margin: var(--space-12) 0 var(--space-20);"
    >
      <template #loader-blocks>
        <div class="ui-loader-skeleton__block"/>
        <div class="ui-loader-skeleton__block" style="width: 75%;"/>
        <div class="ui-loader-skeleton__block ui-loader-skeleton__block--large"/>
      </template>
      A custom Symptomate app that you can use anywhere.
    </UiLoader>
  </UiControls>`,
});
LoadingControls.args = {
  type: 'skeleton',
};