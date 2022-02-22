import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { useButtonStyles } from '../Button';
import { tokens } from '@pongoai/react-theme';
import { ToggleButtonState } from './ToggleButton.types';
import {
  backgroundCSSVariable,
  hoverCSSVariable,
  pressedCSSVariable,
  foregroundHoverCSSVariable,
  foregroundPressedCSSVariable,
} from '../Button/useButtonStyles';

export const useToggleStyles = makeStyles({
  checked: {
    backgroundColor: `var(${backgroundCSSVariable})`,
    ...shorthands.borderColor('transparent'),
    color: `${tokens.white}`,
  },

  checkedEnabled: {
    '&:hover': {
      backgroundColor: `var(${hoverCSSVariable})`,
    },
    '&:active': {
      backgroundColor: `var(${pressedCSSVariable})`,
    },
  },

  unchecked: {
    backgroundColor: tokens.neutral,
    ...shorthands.border('2px', 'solid', `var(${backgroundCSSVariable})`),
    color: `var(${backgroundCSSVariable})`,
  },

  uncheckedEnabled: {
    '&:hover': {
      color: `var(${hoverCSSVariable})`,
      backgroundColor: `var(${foregroundHoverCSSVariable})`,
    },
    '&:active': {
      color: `var(${pressedCSSVariable})`,
      backgroundColor: `var(${foregroundPressedCSSVariable})`,
    },
  },
});

export const useToggleButtonStyles = (state: ToggleButtonState) => {
  const { disabled, checked } = state;
  const toggleStyles = useToggleStyles();

  state.root.className = mergeClasses(
    checked ? toggleStyles.checked : toggleStyles.unchecked,
    !disabled && (checked ? toggleStyles.checkedEnabled : toggleStyles.uncheckedEnabled),
    state.root.className,
  );

  // Add standard Button styles
  useButtonStyles(state);

  return state;
};
