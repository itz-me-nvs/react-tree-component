import { createContext } from "react";
import {
  TreeContextType,
  TreeInitialStateType,
} from "../src/Shared/Models/contextModel";
import { TreeComponentModel } from "../src/Shared/Models/treeModel";
/* Initial State */
export const TreeInitialState: TreeInitialStateType = {
  treeData: null, // The initial tree data
  expandedNodes: [], // Nodes that are expanded
  selectedNode: null, // Currently selected node
  focusedNode: null, // Currently focused node
  searchQuery: "", // Search query
  expandedAll: false,
  collapsedAll: false,
};

/* Reducer Action types */
export const ACTION_TYPES = {
  EXPAND_NODE: "EXPAND_NODE",
  COLLAPSE_NODE: "COLLAPSE_NODE",
  SELECT_NODE: "SELECT_NODE",
  FOCUS_NODE: "FOCUS_NODE",
  SEARCH: "SEARCH",
  ADD_NODE: "ADD_NODE",
  UPDATE_NODE: "UPDATE_NODE",
  DELETE_NODE: "DELETE_NODE",
  EXPAND_ALL_NODES: "EXPAND_ALL_NODES",
  COLLAPSE_ALL_NODES: "COLLAPSE_ALL_NODES",
};

export const TreeReducer = (state: TreeInitialStateType, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.EXPAND_NODE:
      if (state.expandedNodes.includes(action.payload)) return state;
      return {
        ...state,
        expandedNodes: [...state.expandedNodes, action.payload],
      };
    case ACTION_TYPES.COLLAPSE_NODE:
      return {
        ...state,
        expandedNodes: state.expandedNodes.filter(
          (nodeId) => nodeId !== action.payload
        ),
      };
    case ACTION_TYPES.SELECT_NODE:
      return {
        ...state,
        selectedNode: action.payload,
      };
    case ACTION_TYPES.FOCUS_NODE:
      return {
        ...state,
        focusedNode: action.payload,
      };
    case ACTION_TYPES.SEARCH:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case ACTION_TYPES.ADD_NODE:
      // Logic to add a new node to the treeData array
      // You may need to recursively traverse the tree to find the parent node
      // and append the new node to its children array

      // Find the parent node based on the provided parentId
      const NewTreeState = findParentNodeAndAddChild(
        state.treeData!,
        action.payload.parentId,
        (node: TreeComponentModel) => {
          node.children.push({
            ...action.payload.newNode,
            labelCode: `${node.labelCode}.${node.children.length + 1}`,
            label: "New Node",
          } as TreeComponentModel);
        }
      );

      return {
        ...state,
        treeData: NewTreeState,
      } as TreeInitialStateType;
    case ACTION_TYPES.UPDATE_NODE:
      // Logic to update a node in the treeData array based on the provided node ID
      // Find the parent node based on the provided parentId
      const updatedState = findParentNodeAndAddChild(
        state.treeData!,
        action.payload.parentId,
        (updatedNode: TreeComponentModel) => {
          // change the updated node label and code
          updatedNode.label = updatedNode.label + " updated";
        }
      );

      return {
        ...state,
        treeData: updatedState,
      } as TreeInitialStateType;
    case ACTION_TYPES.DELETE_NODE:
      // Find the parent node based on the provided parentId;
      const deletedState = deleteNodeItem(state.treeData!, action.payload);

      return {
        ...state,
        treeData: deletedState,
      } as TreeInitialStateType;

    case ACTION_TYPES.EXPAND_ALL_NODES:
      // check if all nodes are already expanded
      if (state.expandedAll) return state;

      // label code list of all nodes
      const labelCodeList = getAllLabelCodes(state.treeData!);
      return {
        ...state,
        expandedNodes: ["1", ...labelCodeList],
        expandedAll: true,
        collapsedAll: false,
      } as TreeInitialStateType;

    case ACTION_TYPES.COLLAPSE_ALL_NODES:
      if (state.collapsedAll) return state;
      return {
        ...state,
        expandedNodes: [],
        collapsedAll: true,
        expandedAll: false,
      } as TreeInitialStateType;

    default:
      return state;
  }
};

/* Tree traveral helper functions for node creation and removal */

function findParentNodeAndAddChild(
  node: TreeComponentModel,
  targetID: string,
  callback?: (node: TreeComponentModel) => void
) {
  //check of the current node is root node
  if (node.labelCode === targetID) {
    callback!(node);
    return node; // Return the updated tree object
  }

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const result = findParentNodeAndAddChild(child, targetID, callback);
    if (result) {
      return node; // Return the updated tree object
    }
  }
}

// delete node item from tree
function deleteNodeItem(tree: TreeComponentModel, itemID: string) {
  // get parent node of the item
  const parentNode = findParentNode(tree, itemID);

  // remove the target node from the parent node
  if (parentNode) {
    parentNode.children = parentNode.children.filter(
      (item) => item.labelCode !== itemID
    );

    reArrangeTreeLabelCode(parentNode);
  }

  // updated parent node to the tree
  return tree;
}

/* find parent node of the item */
function findParentNode(
  tree: TreeComponentModel,
  itemID: string
): TreeComponentModel | null {
  //check of the current node is root node
  if (tree.labelCode === itemID.slice(0, itemID.lastIndexOf("."))) {
    return tree; // Return the updated tree object
  }

  for (const child of tree.children) {
    const result = findParentNode(child, itemID);
    if (result) {
      return result; // Return the updated tree object
    }
  }
  /* if not found the parent node */
  return null;
}

/* Rearrange the label code of tree item after modification  */
function reArrangeTreeLabelCode(tree: TreeComponentModel) {
  let count = 1;
  for (const child of tree.children) {
    child.labelCode = `${tree.labelCode}.${count}`;
    count++;

    // if child has children then call the function recursively
    if (child.children.length > 0) {
      reArrangeTreeLabelCode(child);
    }
  }
}

/* return list of all label codes array */
function getAllLabelCodes(tree: TreeComponentModel) {
  let labelCodes: string[] = [];
  for (const child of tree.children) {
    labelCodes.push(child.labelCode);
    if (child.children.length > 0) {
      labelCodes = [...labelCodes, ...getAllLabelCodes(child)];
    }
  }
  return labelCodes;
}

/* Context */
export const TreeContext = createContext<TreeContextType>(undefined!);
