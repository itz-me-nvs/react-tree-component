import { useContext, useState } from "react";
import { TreeItemState } from "../Shared/Models/Component/Tree/StateModel";

import { Collapse } from "@mui/material";
import { animated, useSpring } from "react-spring";
import { TreeContext } from "../../Context/reducer";
import { TreeContextType } from "../Shared/Models/contextModel";
import { TreeItemProps } from "../Shared/Models/treeModel";
import { TreeItemHTMLClasses } from "../Shared/Utils/ComponentMetaData";
import "../Styles/CustomTreeItem.style.css";

export const CustomTreeItem = (props: TreeItemProps) => {


  const {state, dispatch} = useContext<TreeContextType>(TreeContext);

  // manage the state of tree item
  const handleExpand = (nodeId: string) => {
    dispatch({ type: "EXPAND_NODE", payload: nodeId });
  };

  // const handleCollapse = (nodeId) => {
  //   dispatch({ type: actionTypes.COLLAPSE_NODE, payload: nodeId });
  // };

  // const handleSelect = (nodeId) => {
  //   dispatch({ type: actionTypes.SELECT_NODE, payload: nodeId });
  // };

  // const handleFocus = (nodeId) => {
  //   dispatch({ type: actionTypes.FOCUS_NODE, payload: nodeId });
  // };

  // const handleSearch = (query) => {
  //   dispatch({ type: actionTypes.SEARCH, payload: query });
  // };

  // const handleAddNode = (parentNode, newNode) => {
  //   dispatch({ type: actionTypes.ADD_NODE, payload: { parentNode, newNode } });
  // };

  // const handleUpdateNode = (nodeId, updatedNode) => {
  //   dispatch({ type: actionTypes.UPDATE_NODE, payload: { nodeId, updatedNode } });
  // };

  // const handleDeleteNode = (nodeId) => {
  //   dispatch({ type: actionTypes.DELETE_NODE, payload: nodeId });
  // };

  console.log(props);

  const classes = TreeItemHTMLClasses;

  const [TreeItemState, setTreeItemState] = useState<Partial<TreeItemState>>({
    parentID: 1,
    disabled: false,
    descendantElement: null,
    expanded: false,
    focused: false,
    group: false,
    selected: false,
  });

  const expandedHandler = () => {
    setTreeItemState((state) => ({
      ...state,
      expanded: state.expanded ? false : true,
      selected: true,
    }));
  };

  // remove the selected state from all the tree items except the current one
  const removeSelectedState = () => {
    setTreeItemState((state) => ({
      ...state,
      selected: false,
    }));
  };

  // Tree expansion animation

  const springAnimation = useSpring({
    opacity: TreeItemState.expanded ? 1 : 0,
    transform: `translate3d(${TreeItemState.expanded ? 0 : 20}px,0,0)`,
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
  });

  return (
    <li
      className={`${classes.root}`}
      role="treeitem"
      aria-expanded={TreeItemState.expanded}
      id={props.nodeId}
      aria-selected={TreeItemState.selected}
      tabIndex={Number(props.nodeId)}
    >
      {/* expanded - selected - focused */}
      <div
        className={`${classes.content} ${
          TreeItemState.selected ? "customTree-selected" : ""
        }`}
      >
        <div
          className={`${classes.iconContainer}`}
          onClick={() => handleExpand(props.nodeId)}
        >
          {props.children!.toString().length > 0
            ? TreeItemState.expanded
              ? props.collapseIcon
              : props.expandIcon
            : props.endIcon}
        </div>

        <div className={`${classes.label}`}>{props.label}</div>
      </div>

      <animated.div style={springAnimation}>
        <Collapse in={TreeItemState.expanded} timeout="auto" unmountOnExit>
          {
            <animated.ul
              role="group"
              className={`${classes.group}`}
              style={springAnimation}
            >
              <div className={`${classes.wrapper}`}>
                <div className={`${classes.wrapperInner}`}>
                  {props.children}
                </div>
              </div>
            </animated.ul>
          }
        </Collapse>
      </animated.div>
    </li>
  );
};
