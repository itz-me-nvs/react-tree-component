import { createContext } from "react";
import {
  TreeContextType,
  TreeInitialStateType,
} from "../src/Shared/Models/contextModel";
/* Initial State */
export const TreeInitialState: TreeInitialStateType = {
  treeData: [], // The initial tree data
  expandedNodes: [], // Nodes that are expanded
  selectedNode: null, // Currently selected node
  focusedNode: null, // Currently focused node
  searchQuery: "", // Search query
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
};

export const TreeReducer = (state: TreeInitialStateType, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.EXPAND_NODE:
     if(state.expandedNodes.includes(action.payload)) return state;
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
      return {
        ...state,
        treeData: [],
      };
    case ACTION_TYPES.UPDATE_NODE:
      // Logic to update a node in the treeData array based on the provided node ID
      return {
        ...state,
        treeData: [],
      };
    case ACTION_TYPES.DELETE_NODE:
      // Logic to delete a node from the treeData array based on the provided node ID
      return {
        ...state,
        treeData: [],
      };
    default:
      return state;
  }
};

/* Context */
export const TreeContext = createContext<TreeContextType>(undefined!);
