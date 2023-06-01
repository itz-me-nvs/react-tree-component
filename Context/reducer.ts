import { createContext } from "react";
import {
  TreeContextType,
  TreeInitialStateType,
} from "../src/Shared/Models/contextModel";
import { TreeComponentModel } from "../src/Shared/Models/treeModel";
import { Label } from "@mui/icons-material";
/* Initial State */
export const TreeInitialState: TreeInitialStateType = {
  treeData: null, // The initial tree data
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

      console.log(state);

      // Find the parent node based on the provided parentId
      const NewTreeState = findParentNodeAndAddChild(
        state.treeData!,
        action.payload.parentId,
        (node: TreeComponentModel) => {
          // node.children.push({
          //   ...action.payload.newNode,
          //   labelCode: `${node.labelCode}.${node.children.length + 1}`,
          //   label: "New Node"
          // });
          // node.children[0].label = "New Node rerge";
          //  const currentNode = node;
          //  console.log(currentNode);
           
          node.children.push({
           ...action.payload.newNode,
            labelCode: `${node.labelCode}.${node.children.length + 1}`,
            label: "New Node"
          } as TreeComponentModel);
        }
      );

      console.log(NewTreeState);

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
        (node: TreeComponentModel) => {
          node = {
            ...action.payload.updatedNode,
            label: Label + "- Updated",
          };
        }

      );

      console.log('updatedState', updatedState);
      
      return {
        ...state,
        treeData: updatedState,
      } as TreeInitialStateType;
    case ACTION_TYPES.DELETE_NODE:
      // Logic to delete a node from the treeData array based on the provided node ID
      return {
        ...state,
        treeData: null,
      } as TreeInitialStateType;
    default:
      return state;
  }
};

/* Tree traveral helper functions for node creation and removal */


function findParentNodeAndAddChild(node: TreeComponentModel, targetID: string, callback: (node: TreeComponentModel) => void){

   //check of the current node is root node
   if(node.labelCode === targetID){
    console.log(node);
   callback(node);
    return node;
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
function deleteNodeItem(node: TreeComponentModel, itemID: string){
  // get parent node of the item
  const parentNode = findParentNode(node, itemID);

}

// find parent node of the item
function findParentNode(node: TreeComponentModel, itemID: string){
  //check of the current node is root node
  if(node.labelCode === itemID){
    return node;
  }

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const result = findParentNode(child, itemID);
    if (result) {
      return node; // Return the updated tree object
    }
  }
}

/* Context */
export const TreeContext = createContext<TreeContextType>(undefined!);
