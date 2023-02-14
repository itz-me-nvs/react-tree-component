export interface TreeItemState {
  group: boolean;
  expanded: boolean;
  selected: boolean;
  focused: boolean;
  disabled: boolean;
  parentID: number;
  descendantElement: TreeItemState[] | null;
}
