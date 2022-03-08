import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { InputWrapperProps, InputWrapperState } from './InputWrapper.types';

export const useInputWrapper = (props: InputWrapperProps, ref: React.Ref<HTMLElement>): InputWrapperState => {
  const {
    disabled,
    size = 'medium',
    helperText,
    contentAfter,
    contentBefore,
    border,
    appearance = 'outline',
    danger,
    helperTextId,
    labelId,
    label,
    value,
    legend,
  } = props;

  const state: InputWrapperState = {
    size,
    appearance,
    disabled,
    danger,
    labelId,
    value,
    helperTextId,
    components: {
      root: 'span',
      contentBefore: 'span',
      contentAfter: 'span',
      border: 'fieldset',
      helperText: 'p',
      label: 'label',
      legend: 'legend',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    border: resolveShorthand(border, { required: true }),
    helperText: resolveShorthand(helperText),
    contentAfter: resolveShorthand(contentAfter),
    contentBefore: resolveShorthand(contentBefore),
    label: resolveShorthand(label),
    legend: resolveShorthand(legend),
  };

  state.border['aria-hidden'] = true;

  if (state.helperText) {
    state.helperText.id = helperTextId;
  }

  if (state.label) {
    state.label.htmlFor = labelId;
  }

  return state;
};
