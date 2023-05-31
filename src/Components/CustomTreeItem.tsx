import { useContext, useState } from "react";
import { TreeItemState } from "../Shared/Models/Component/Tree/StateModel";

import { PlusIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Collapse } from "@mui/material";
import { animated, useSpring } from "react-spring";
import { TreeContext } from "../../Context/reducer";
import { TreeContextType } from "../Shared/Models/contextModel";
import { TreeItemProps } from "../Shared/Models/treeModel";
import { TreeItemHTMLClasses } from "../Shared/Utils/ComponentMetaData";
import "../Styles/CustomTreeItem.style.css";

export const CustomTreeItem = (props: TreeItemProps) => {
  const { state, dispatch } = useContext<TreeContextType>(TreeContext);

  // manage the state of tree item
  const handleExpandOrCollapse = (nodeId: string) => {
    console.log(nodeId);

    if (isExpandedNodeIncludes()) {
      handleCollapse(nodeId);
    } else {
      handleExpand(nodeId);
    }
  };

  console.log(state);

  const handleCollapse = (nodeId: string) => {
    dispatch({ type: "COLLAPSE_NODE", payload: nodeId });
  };

  const handleExpand = (nodeId: string) => {
    dispatch({ type: "EXPAND_NODE", payload: nodeId });
  };

  const handleSelect = (nodeId: string) => {
    dispatch({ type: "SELECT_NODE", payload: nodeId });
  };

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

  // handling dynamic content values

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

  const isExpandedNodeIncludes = () => {
    return state.expandedNodes.includes(props.nodeId);
  };
  // Tree expansion animation

  const springAnimation = useSpring({
    opacity: isExpandedNodeIncludes() ? 1 : 0,
    transform: `translate3d(${isExpandedNodeIncludes() ? 0 : 20}px,0,0)`,
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
        aria-selected={state.selectedNode === props.nodeId}
        className={`${classes.content} ${
          state.selectedNode === props.nodeId ? "customTree-selected" : ""
        }`}
        onClick={() => handleSelect(props.nodeId)}
      >
        <div
          className={`${classes.iconContainer}`}
          onClick={() => handleExpandOrCollapse(props.nodeId)}
        >
          {props.children!.toString().length > 0
            ? state.expandedNodes.includes(props.nodeId)
              ? props.collapseIcon
              : props.expandIcon
            : props.endIcon}
        </div>

        <div className={`${classes.label}`}>{props.label}</div>

        {/* Dynamic Contents here */}
        <div
          className="dynamic-content"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <PlusIcon
            color="#fff"
            style={{
              height: "20px",
              width: "20px",
              cursor: "pointer",
              marginInlineEnd: "10px",
              marginBlockEnd: "10px",
            }}
          />
          <TrashIcon
            color="red"
            style={{
              height: "20px",
              width: "20px",
              cursor: "pointer",
              marginInlineEnd: "10px",
              marginBlockEnd: "10px",
            }}
          />
        </div>
      </div>

      <animated.div style={springAnimation}>
        <Collapse
          in={state.expandedNodes.includes(props.nodeId)}
          timeout="auto"
          unmountOnExit
        >
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
