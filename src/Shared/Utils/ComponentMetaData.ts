/*
Global Component Definitions
*/

import { TreeItemClasses, TreeViewClasses } from "../Models/treeModel";
import { ComposeClass } from "./composeClasses";

export type RegisteredComponent = "CustomTreeView" | "CustomTreeItem";

export type GlobalStateSlot =
  | "active"
  | "checked"
  | "completed"
  | "disabled"
  | "error"
  | "expanded"
  | "focused"
  | "focusVisible"
  | "required"
  | "selected";

export const globalStateClassesMapping: Record<GlobalStateSlot, string> = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected",
};

// export const globalStateClasses = Object.keys(globalStateClassesMapping)
console.log(globalStateClassesMapping.active);

/* ****************************************************************************
Tree view Meta data
* Interface
* key enums
* Styled Class Names Object
*/

export interface TreeViewStyleClasses {
  /** Styles applied to the root element. */
  content: string;
}

const TreeItemslots: TreeViewClasses = {
  root: "root",
};
const TreeViewStyleClasses: TreeViewStyleClasses = { content: "content" };
export const TreeViewHTMLClasses = ComposeClass.getUtilityClass(
  "CustomTreeView",
  TreeItemslots,
  TreeViewStyleClasses
);

/*  **************************************************************************** */

/* ****************************************************************************
Tree Item Meta data
* Interface
* key enums
* Styled Class Names Object
*/

export interface TreeItemStyleClasses {
  /** Styles applied to the root element. */
  content: string;
  iconContainer: string;
  label: string;
  group: string;
  wrapper: string;
  wrapperInner: string;
}

export type TreeItemClassKey = keyof TreeViewClasses;

const slots: TreeItemClasses = {
  root: "root",
};

const TreeItemStyleClasses: TreeItemStyleClasses = {
  content: "content",
  iconContainer: "iconContainer",
  label: "label",
  group: "group",
  wrapper: "wrapper",
  wrapperInner: "wrapperInner",
};
export const TreeItemHTMLClasses = ComposeClass.getUtilityClass<
  TreeItemClasses,
  TreeItemStyleClasses
>("CustomTreeItem", slots, TreeItemStyleClasses);

/*  **************************************************************************** */
export type TreeKeyof<T> = keyof T;
export type InferObject<T> = T extends { [key: string]: infer U } ? U : never;
export type InferArray<T> = T extends Array<infer U> ? U : never;
