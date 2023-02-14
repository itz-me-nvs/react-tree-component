/*  Tree example Model */

import { AliasesCSSProperties } from "./Component/Tree/AliasesCSSProperties";
import { OverwriteCSSProperties } from "./Component/Tree/OverwriteCSSProperties";
import { StandardCSSProperties } from "./Component/Tree/StandardCSSproperties";
import { TransitionProps } from "./Component/Tree/Transition";
import * as CSS from "./packages/cssType";

export interface TreeComponentModel {
  nodeId: any;
  label: React.ReactNode;
  children: TreeComponentModel[];
  labelCode: React.ReactNode;
}

export type AccountGroupModel = Partial<AccountGroup>;

export interface AccountGroup {
  AccountGroupID: number;
  AccountGroupCode: string;
  GroupName: string;
  GroupNameNat: string;
  ShortName: string;
  ShortNameNat: string;
  ParentGroupCode: string;
  ParentGroupID?: number;
  Nature: string;
  LevelID?: number;
  children?: Partial<AccountGroup>[];
  NodeID: number;
}

/* TreeView Component Model */

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 */
export type ResponsiveStyleValue<T> =
  | T
  | Array<T | null>
  | { [key: string]: T | null };

/**
 * Map of all available CSS properties (including aliases) and their raw value.
 * Only used internally to map CSS properties to input types (responsive value,
 * theme function or nested) in `SystemCssProperties`.
 */
export interface AllSystemCSSProperties
  extends Omit<StandardCSSProperties, keyof OverwriteCSSProperties>,
    OverwriteCSSProperties,
    AliasesCSSProperties {}

export type SystemCssProperties<Theme extends object = {}> = {
  [K in keyof AllSystemCSSProperties]:
    | ResponsiveStyleValue<AllSystemCSSProperties[K]>
    | ((theme: Theme) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
    | SystemStyleObject<Theme>;
};

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...).
 */
export type CSSPseudoSelectorProps<Theme extends object = {}> = {
  [K in CSS.Pseudos]?:
    | ((theme: Theme) => SystemStyleObject<Theme>)
    | SystemStyleObject<Theme>;
};

type CssVariableType = string | number;

/**
 * Map all nested selectors and CSS variables.
 */
export interface CSSSelectorObjectOrCssVariables<Theme extends object = {}> {
  [cssSelectorOrVariable: string]:
    | ((theme: Theme) => SystemStyleObject<Theme> | string | number)
    | SystemStyleObject<Theme>
    | CssVariableType;
}

/**
 * The `SystemStyleObject` defines custom properties that will be transformed to
 * their corresponding values from the `Theme`. Other valid CSS properties are also allowed.
 */
export type SystemStyleObject<Theme extends object = {}> =
  | SystemCssProperties<Theme>
  | CSSPseudoSelectorProps<Theme>
  | CSSSelectorObjectOrCssVariables<Theme>
  | null;

/**
 * The `SxProps` can be either object or function
 */
export type SxProps<Theme extends Object = {}> =
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)
  | ReadonlyArray<
      | boolean
      | SystemStyleObject<Theme>
      | ((theme: Theme) => SystemStyleObject<Theme>)
    >;

export interface TreeViewPropsBase
  extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * The Name of the component, it is used for className prefix
   */
  componentName?: "CustomTreeView";
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TreeViewClasses>;
  /**
   * The default icon used to collapse the node.
   */
  defaultCollapseIcon?: React.ReactNode;
  /**
   * The default icon displayed next to a end node. This is applied to all
   * tree nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultEndIcon?: React.ReactNode;
  /**
   * Expanded node ids. (Uncontrolled)
   * @default []
   */
  defaultExpanded?: string[];
  /**
   * The default icon used to expand the node.
   */
  defaultExpandIcon?: React.ReactNode;
  /**
   * The default icon displayed next to a parent node. This is applied to all
   * parent nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultParentIcon?: React.ReactNode;
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable?: boolean;
  /**
   * If `true` selection is disabled.
   * @default false
   */
  disableSelection?: boolean;
  /**
   * Expanded node ids. (Controlled)
   */
  expanded?: string[];
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id?: string;
  /**
   * Callback fired when tree items are focused.
   *
   * @param {React.SyntheticEvent} event The event source of the callback **Warning**: This is a generic event not a focus event.
   * @param {string} value of the focused node.
   */
  onNodeFocus?: (event: React.SyntheticEvent, nodeId: string) => void;
  /**
   * Callback fired when tree items are expanded/collapsed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {array} nodeIds The ids of the expanded nodes.
   */
  onNodeToggle?: (event: React.SyntheticEvent, nodeIds: string[]) => void;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps;
}

export interface MultiSelectTreeViewProps extends TreeViewPropsBase {
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   * @default []
   */
  defaultSelected?: string[];
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected?: string[];
  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   * @default false
   */
  multiSelect?: true;
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {React.SyntheticEvent} event The event source of the callback
   * @param {string[] | string} nodeIds Ids of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
  onNodeSelect?: (event: React.SyntheticEvent, nodeIds: string[]) => void;
}

export interface SingleSelectTreeViewProps extends TreeViewPropsBase {
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   * @default []
   */
  defaultSelected?: string;
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected?: string;
  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   * @default false
   */
  multiSelect?: false;
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {React.SyntheticEvent} event The event source of the callback
   * @param {string[] | string} nodeIds Ids of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
  onNodeSelect?: (event: React.SyntheticEvent, nodeIds: string) => void;
}

export type TreeViewProps =
  | SingleSelectTreeViewProps
  | MultiSelectTreeViewProps;

export interface TreeViewClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TreeViewClassKey = keyof TreeViewClasses;

/* TreeItem Component Model */
// StandardProps<React.HTMLAttributes<HTMLLIElement>, 'onFocus'>
export interface TreeItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {
  /**
   * The Name of the component, it is used for className prefix
   */
  componentName?: "CustomTreeItem";
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */

  classes?: Partial<TreeItemClasses>;
  /**
   * The icon used to collapse the node.
   */
  collapseIcon?: React.ReactNode;
  /**s
   * The component used for the content node.
   * @default TreeItemContent
   */
  // ContentComponent?: React.JSXElementConstructor<TreeItemContentProps>;
  /**
   * Props applied to ContentComponent
   */
  ContentProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * If `true`, the node is disabled.
   */
  disabled?: boolean;
  /**
   * The icon displayed next to a end node.
   */
  endIcon?: React.ReactNode;
  /**
   * The icon used to expand the node.
   */
  expandIcon?: React.ReactNode;
  /**
   * The icon to display next to the tree node's label.
   */
  icon?: React.ReactNode;
  /**
   * This prop isn't supported.
   * Use the `onNodeFocus` callback on the tree if you need to monitor a node's focus.
   */
  onFocus?: null;
  /**
   * The tree node label.
   */
  label?: React.ReactNode;
  /**
   * The id of the node.
   */
  nodeId: string;
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent?: React.JSXElementConstructor<TransitionProps>;
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps?: TransitionProps;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps;
}

export interface TreeItemClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the transition component. */
  group?: string;
  /** Styles applied to the content element. */
  content?: string;
  /** State class applied to the content element when expanded. */
  expanded?: string;
  /** State class applied to the content element when selected. */
  selected?: string;
  /** State class applied to the content element when focused. */
  focused?: string;
  /** State class applied to the element when disabled. */
  disabled?: string;
  /** Styles applied to the tree node icon. */
  iconContainer?: string;
  /** Styles applied to the label element. */
  label?: string;
}

export type TreeItemClassKey = keyof TreeItemClasses;

/**
 it is assumed that this variable will be provided by some external source,
  such as a third-party library or the global scope.
 */
declare const treeItemClasses: TreeItemClasses;
export default treeItemClasses;
