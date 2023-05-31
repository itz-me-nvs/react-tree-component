import {
  AccountGroup,
  AccountGroupModel,
  TreeComponentModel,
} from "../Models/treeModel";

export const DataToNode = (data: AccountGroupModel[]) => {
  let TreeMap = new Map<number, TreeComponentModel>();
  var NodeLength: number = 0;
  const TreeMapToComponentNode = (
    data: AccountGroupModel[],
    rootNodeID: number = 0,
    nodeId: number = 1
  ) => {
    let NodeList = DynamicNodeID(
      data.filter((e) => e.ParentGroupID === rootNodeID),
      nodeId
    );

    NodeLength += NodeList.length;

    return NodeList.reduce((prev, current: any) => {
      current.children = TreeMapToComponentNode(data, current.ID, NodeLength);
      return prev.concat({
        label: current.Name,
        nodeId: current.NodeID,
        children: current.children,
        labelCode: "",
      } as any);
    }, []);
  };
  let TreeMapToComponentNodeList = TreeMapToComponentNode(data);
  return TreeMapToComponentNodeList;
};

const DynamicNodeID = (NodeList: Partial<AccountGroup>[], NodeID: number) => {
  NodeList.map((e, index) => {
    if (e.ParentGroupID === 0) {
      e["NodeID"] = 1;
    } else e["NodeID"] = NodeID + index + 1;
  });
  // console.log(NodeList);
  return NodeList;
};

/* Map reduce handler  */
// return filteredList.reduce((prev, current: any) => {
//       prev?.set(current.AccountGroupID!, [
//         {
//           label: current.Name,
//           nodeId: current.Code,
//           children: TreeMapToComponentNode(data, rootNodeID + 1),
//         },
//       ]);
//       return prev;
//     }, new Map());

/*  Traversal Algorithms */

// DFS()
// BFS()

/* Delete Node */
