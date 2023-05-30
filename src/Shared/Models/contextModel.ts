import React from "react";
import { TreeComponentModel } from "./treeModel";

export type TreeInitialStateType = {
  treeData: TreeComponentModel[];
  expandedNodes: string[];
  selectedNode: string | null;
  focusedNode: string | null;
  searchQuery: string;
};

export type TreeContextType = {
  state: TreeInitialStateType;
  dispatch: React.Dispatch<TreeContextActionType>;
};

export type TreeContextActionType = {
  type: "EXPAND_NODE";
  payload: string;
}

| {
  type: "COLLAPSE_NODE";
  payload: string;
}
|
{
  type: "SELECT_NODE";
  payload: string;
}
