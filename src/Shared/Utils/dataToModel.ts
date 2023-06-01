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
    nodeId: number = 1,
    labelCode: string = '',
  ) => {
    
    let NodeList = DynamicNodeID(
      data.filter((e) => e.ParentGroupID === rootNodeID),
      nodeId
    );
    NodeLength += NodeList.length;
    
    
    return NodeList.reduce((prev, current: any, currentIndex: number) => {   
      let childCode = currentIndex + 1;
      current.children = TreeMapToComponentNode(data, current.ID, NodeLength, labelCode + childCode + '.');
      return prev.concat({
        label: current.Name,
        nodeId: current.NodeID,
        children: current.children,
        labelCode: `${labelCode}${childCode}`
      } as any);
    }, []);
  };



  // Generating Tree Component Model
  let TreeMapToComponentNodeList = TreeMapToComponentNode(data);
  return TreeMapToComponentNodeList;
};

const DynamicNodeID = (NodeList: Partial<AccountGroup>[], NodeID: number) => {
  NodeList.map((e, index) => {
    if (e.ParentGroupID === 0) {
      e["NodeID"] = 1;
    } else e["NodeID"] = NodeID + index + 1;
  });
  return NodeList;
};

