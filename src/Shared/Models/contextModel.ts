import React from "react";
import { TreeComponentModel } from "./treeModel";

export type TreeInitialStateType = {
  treeData: TreeComponentModel | null;
  expandedNodes: string[];
  selectedNode: string | null;
  focusedNode: string | null;
  searchQuery: string;
  expandedAll: boolean;
  collapsedAll: boolean;
};

export type TreeContextType = {
  state: TreeInitialStateType;
  dispatch: React.Dispatch<TreeContextActionType>;
};

export type TreeContextActionType =
  | {
      type: "EXPAND_NODE";
      payload: string;
    }
  | {
      type: "COLLAPSE_NODE";
      payload: string;
    }
  | {
      type: "SELECT_NODE";
      payload: string;
    }
  | {
      type: "ADD_NODE";
      payload: {
        parentId: string;
        newNode: TreeComponentModel;
      };
    }
  | {
      type: "UPDATE_NODE";
      payload: {
        parentId: string;
        updatedNode: TreeComponentModel;
      };
    }
  | {
      type: "DELETE_NODE";
      payload: string;
    }
  | {
      type: "EXPAND_ALL_NODES";
    }
  | {
      type: "COLLAPSE_ALL_NODES";
    };
