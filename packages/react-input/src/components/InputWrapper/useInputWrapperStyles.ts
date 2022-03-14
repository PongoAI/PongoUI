import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import type { InputWrapperState } from './InputWrapper.types';
import { tokens } from '@pongo-ui/react-theme';

export const inputRootClassName = 'pongo-input-wrapper';
export const inputLabelClassName = 'pongo-input-label';
export const inputLegendClassName = 'pongo-input-legend';

const labelFocusedSize = '--focused-label-font-size';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexGrow: 2,
    alignItems: 'center',
    flexWrap: 'nowrap',
    color: tokens.textColor,
    backgroundColor: tokens.canvasColor,
    fontFamily: tokens.fontFamilyBase,
    justifyContent: 'center',
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px'),
    ...shorthands.borderStyle('none'),
  },

  // Appearance
  outline: {
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      userSelect: 'none',
      pointerEvents: 'none',
      ...shorthands.border('1px', 'solid', tokens.inherit),
      ...shorthands.borderRadius(tokens.rounded),
    },
  },

  standard: {
    ':before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      userSelect: 'none',
      pointerEvents: 'none',
      ...shorthands.borderBottom('1px', 'solid', tokens.inherit),
    },
  },

  filled: {
    backgroundColor: tokens.inheritForegroundPressed,
    ...shorthands.borderRadius(tokens.rounded, tokens.rounded, tokens.square, tokens.square),

    ':before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      userSelect: 'none',
      pointerEvents: 'none',
      ...shorthands.borderBottom('1px', 'solid', tokens.inherit),
    },
  },

  defaultFocus: {
    ':focus-within': {
      ':before': {
        ...shorthands.borderColor(tokens.brand),
        ...shorthands.borderWidth('2px'),
      },
      [`& .${inputLabelClassName}`]: {
        color: tokens.brand,
      },
      [`& .${inputLegendClassName}`]: {
        width: 'auto',
      },
    },
  },

  dangerFocus: {
    ':focus-within': {
      ':before': {
        ...shorthands.borderColor(tokens.danger),
        ...shorthands.borderWidth('2px'),
      },
      [`& .${inputLabelClassName}`]: {
        color: tokens.danger,
      },
    },
  },

  enabled: {
    ':before': {
      transitionProperty: 'border-width',
      transitionDuration: '.1s',
      transitionDelay: 'cubic-bezier(0.33, 0.0, 0.67, 1)',
      boxSizing: 'border-box',
    },
  },

  disabled: {
    ':before': {
      ...shorthands.borderColor(tokens.inheritDisabled),
    },
  },

  disabledDanger: {
    ':before': {
      ...shorthands.borderColor(tokens.dangerDisabled),
    },
  },

  // Size
  small: {
    height: '35px',
    width: '150px',
    fontSize: tokens.fontSize200,
    [labelFocusedSize]: tokens.fontSize100,
  },

  medium: {
    minHeight: '45px',
    minWidth: '200px',
    fontSize: tokens.fontSize300,
    [labelFocusedSize]: tokens.fontSize200,
  },

  large: {
    height: '50px',
    width: '300px',
    fontSize: tokens.fontSize400,
    [labelFocusedSize]: tokens.fontSize300,
  },

  // Danger
  danger: {
    ':before': {
      ...shorthands.borderColor(tokens.danger),
    },
  },
});

const useHelperTextStyles = makeStyles({
  helperText: {
    ...shorthands.padding('5px', '10px'),
    ...shorthands.margin('0px'),
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSize200,
    textAlign: 'left',
  },
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
    '& svg': {
      fill: tokens.inherit,
    },
  },

  danger: {
    color: tokens.danger,
    '& svg': {
      fill: tokens.danger,
    },
  },

  disabled: {
    color: tokens.inheritDisabled,
    '& svg': {
      fill: tokens.inheritDisabled,
    },
  },

  disabledDanger: {
    color: tokens.dangerDisabled,
    '& svg': {
      fill: tokens.dangerDisabled,
    },
  },

  lowerPadding: {
    paddingTop: '10px',
  },
});

const useLabelStyles = makeStyles({
  label: {
    position: 'absolute',
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px', '2px'),
    left: '8px',
    color: tokens.inherit,
    fontFamily: tokens.fontFamilyBase,
    whiteSpace: 'nowrap',
    overflowStyle: 'hidden',
    textOverflow: 'ellipsis',
    touchAction: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'left',
    alignItems: 'center',
    transitionProperty: 'transform, font-size, top',
    transitionDuration: '.1s',
    transitionDelay: 'cubic-bezier(0.33, 0.0, 0.67, 1)',
    background: 'red',
    ':before': {
      content: '""',
      position: 'absolute',
      right: '0px',
      top: '5px',
      left: '0px',
      height: '5px',
      userSelect: 'none',
      pointerEvents: 'none',
      zIndex: -1,
    },
  },

  standardActive: {
    ':focus-within': {
      [`& .${inputLabelClassName}`]: {
        transform: 'translateY(-100%)',
        fontSize: `var(${labelFocusedSize})`,
      },
    },
  },

  outlineActive: {
    ':focus-within': {
      [`& .${inputLabelClassName}`]: {
        transform: 'translateY(-150%)',
        fontSize: `var(${labelFocusedSize})`,
      },
    },
  },

  filledActive: {
    ':focus-within': {
      [`& .${inputLabelClassName}`]: {
        transform: 'translateY(-100%)',
        fontSize: `var(${labelFocusedSize})`,
      },
    },
  },

  standard: {
    transform: 'translateY(-100%)',
    fontSize: `var(${labelFocusedSize})`,
  },

  outline: {
    transform: 'translateY(-150%)',
    fontSize: `var(${labelFocusedSize})`,
  },

  filled: {
    transform: 'translateY(-100%)',
    fontSize: `var(${labelFocusedSize})`,
  },

  outlineBackground: {
    ':before': {
      backgroundColor: tokens.canvasColor,
    },
  },
});

export const useInputWrapperStyles = (state: InputWrapperState) => {
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();
  const labelStyles = useLabelStyles();
  const helperTextStyles = useHelperTextStyles();

  state.border.className = mergeClasses(
    inputRootClassName,
    rootStyles.root,
    rootStyles[state.size!],
    rootStyles[state.appearance!],
    state.danger && rootStyles.danger,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    !state.disabled && (state.danger ? rootStyles.dangerFocus : rootStyles.defaultFocus),
    !state.disabled &&
      labelStyles[(state.appearance! + 'Active') as 'standardActive' | 'outlineActive' | 'filledActive'],
    state.disabled && state.danger && rootStyles.disabledDanger,
    state.border.className,
  );

  if (state.helperText) {
    state.helperText.className = mergeClasses(
      helperTextStyles.helperText,
      state.disabled ? contentStyles.disabled : contentStyles.enabled,
      state.danger && contentStyles.danger,
      state.disabled && state.danger && contentStyles.disabledDanger,
      state.helperText.className,
    );
  }

  const contentClasses = [
    contentStyles.base,
    state.disabled ? contentStyles.disabled : contentStyles.enabled,
    state.danger && contentStyles.danger,
    state.disabled && state.danger && contentStyles.disabledDanger,
    state.label && (state.appearance === 'filled' || state.appearance === 'standard') && contentStyles.lowerPadding,
  ];

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

  if (state.label) {
    state.label.className = mergeClasses(
      inputLabelClassName,
      labelStyles.label,
      state.disabled ? contentStyles.disabled : contentStyles.enabled,
      state.danger && contentStyles.danger,
      state.disabled && state.danger && contentStyles.disabledDanger,
      (state.currentValue !== (undefined || '') || state.contentBefore !== undefined) &&
        state.label !== undefined &&
        labelStyles[state.appearance!],
      state.appearance === 'outline' && labelStyles.outlineBackground,
      state.label.className,
    );
  }

  return state;
};
