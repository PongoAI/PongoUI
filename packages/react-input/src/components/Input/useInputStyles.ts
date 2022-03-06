import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import type { InputState } from './Input.types';
import { tokens } from '@pongo-ui/react-theme';

export const inputHeight = `--pongoai-input-height`;

export const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    height: inputHeight,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    color: tokens.textColor,
    backgroundColor: tokens.canvasColor,
    fontFamily: tokens.baseFont,
  },

  // Appearance
  outline: {
    ...shorthands.border('2px', 'solid', tokens.inherit),
    ...shorthands.borderRadius(tokens.rounded),
  },

  standard: {
    ...shorthands.borderBottom('2px', 'solid', tokens.inherit),
  },

  filled: {
    backgroundColor: tokens.inheritForegroundPressed,
    ...shorthands.borderRadius(tokens.rounded, tokens.rounded, tokens.square, tokens.square),
    ...shorthands.borderBottom('2px', 'solid', tokens.inherit),
  },

  disabled: {
    ...shorthands.borderColor(tokens.inheritDisabled),
  },

  // Size
  small: {
    height: '35px',
    width: '150px',
    fontSize: tokens.fontSize200,
  },

  medium: {
    height: '45px',
    width: '200px',
    fontSize: tokens.fontSize300,
  },

  large: {
    height: '50px',
    width: '300px',
    fontSize: tokens.fontSize400,
  },

  // Focus
  focusIndicator: createCustomFocusIndicatorStyle(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        bottom: '-8px',
        left: '-8px',
        boxSizing: 'border-box',
        ...shorthands.border('2px', 'solid', tokens.textColor),
        ...shorthands.borderRadius(tokens.rounded),
      },
    },
    { selector: 'focus-within' },
  ),
});

const useContentStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    '> svg': { display: 'block' },
  },

  before: {
    paddingLeft: '10px',
  },

  after: {
    paddingRight: '10px',
  },

  enabled: {
    color: tokens.inherit,
    fill: tokens.inherit,
  },

  disabled: {
    color: tokens.inheritDisabled,
    fill: tokens.inheritDisabled,
  },
});

export const useInputElementStyles = makeStyles({
  input: {
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px'),
    ...shorthands.borderStyle('none'),
    boxSizing: 'border-box',
    flexGrow: 1,
    minWidth: 0,
    height: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'transparent',
    ':focus-visible': {
      outlineStyle: 'none',
    },
  },

  enabled: {
    cursor: 'text',
    color: tokens.textColor,
    '::placeholder': {
      color: tokens.inherit,
      opacity: 1,
    },
  },

  disabled: {
    cursor: 'not-allowed',
    color: tokens.inheritDisabled,
    '::placeholder': {
      color: tokens.inheritDisabled,
      opacity: 1,
    },
  },
});

export const useInputStyles = (state: InputState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputElementStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.size!],
    rootStyles[state.appearance!],
    rootStyles.focusIndicator,
    state.disabled && rootStyles.disabled,
    state.root.className,
  );

  if (state.input) {
    state.input.className = mergeClasses(
      inputStyles.input,
      state.disabled ? inputStyles.disabled : inputStyles.enabled,
      state.input.className,
    );
  }

  const contentClasses = [contentStyles.base, state.disabled ? contentStyles.disabled : contentStyles.enabled];

  if (state.contentBefore) {
    state.contentBefore.className = mergeClasses(
      ...contentClasses,
      contentStyles.before,
      state.contentBefore.className,
    );
  }
  if (state.contentAfter) {
    state.contentAfter.className = mergeClasses(...contentClasses, contentStyles.after, state.contentAfter.className);
  }

  return state;
};
