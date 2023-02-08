/*
Global Component Definitions
*/

import { ComposeClass } from './composeClasses';

export type RegisteredComponent = 'CustomTreeView' | 'CustomTreeItem';

export type GlobalStateSlot =
  | 'active'
  | 'checked'
  | 'completed'
  | 'disabled'
  | 'error'
  | 'expanded'
  | 'focused'
  | 'focusVisible'
  | 'required'
  | 'selected';

export const globalStateClassesMapping: Record<GlobalStateSlot, string> = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  required: 'required',
  selected: 'selected',
};

// export const globalStateClasses = Object.keys(globalStateClassesMapping)
console.log(globalStateClassesMapping.active);

/*
Tree view Meta data
* Interface
* key enums
* Styled Class Names Object
*/

export interface TreeViewClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TreeViewClassKey = keyof TreeViewClasses;

const slots: TreeViewClasses = {
  root: 'root',
};

export const TreeClasses = ComposeClass.getUtilityClass(
  'CustomTreeItem',
  slots
);
