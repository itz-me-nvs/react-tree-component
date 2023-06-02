import { useContext } from "react";

import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/20/solid";
import { animated, useSpring } from "react-spring";
import { TreeContext } from "../../Context/reducer";
import { TreeContextType } from "../Shared/Models/contextModel";
import { TreeComponentModel, TreeItemProps } from "../Shared/Models/treeModel";
import { TreeItemHTMLClasses } from "../Shared/Utils/ComponentMetaData";
import "../Styles/CustomTreeItem.style.css";

export const CustomTreeItem = (props: TreeItemProps) => {
  const { state, dispatch } = useContext<TreeContextType>(TreeContext);

  // manage the state of tree item
  const handleExpandOrCollapse = (labelCode: string) => {
    console.log(labelCode);

    if (isExpandedNodeIncludes()) {
      handleCollapse(labelCode);
    } else {
      handleExpand(labelCode);
    }
  };

  const handleCollapse = (labelCode: string) => {
    dispatch({ type: "COLLAPSE_NODE", payload: labelCode });
  };

  const handleExpand = (labelCode: string) => {
    dispatch({ type: "EXPAND_NODE", payload: labelCode });
  };

  const handleSelect = (labelCode: string) => {
    dispatch({ type: "SELECT_NODE", payload: labelCode });
  };

  // const handleSearch = (query) => {
  //   dispatch({ type: actionTypes.SEARCH, payload: query });
  // };

  const handleAddNode = (
    parentNodeCode: string,
    newNode: TreeComponentModel
  ) => {
    dispatch({
      type: "ADD_NODE",
      payload: {
        parentId: parentNodeCode,
        newNode,
      },
    });
  };

  const handleUpdateNode = (nodeCode: string, newNode: TreeComponentModel) => {
    dispatch({
      type: "UPDATE_NODE",
      payload: {
        parentId: nodeCode,
        updatedNode: newNode,
      },
    });
  };

  const handleDeleteNode = (nodeCode: string) => {
    dispatch({ type: "DELETE_NODE", payload: nodeCode });
  };

  const classes = TreeItemHTMLClasses;

  const isExpandedNodeIncludes = () => {
    return state.expandedNodes.includes(props.labelCode);
  };

  // Tree expansion animation
  const springAnimation = useSpring({
    opacity: isExpandedNodeIncludes() ? 1 : 0,
    transform: `translate3d(${isExpandedNodeIncludes() ? 0 : 10}px,0,0)`,
    from: {
      opacity: 0,
      transform: "translate3d(10px,0,0)",
    },
  });

  return (
    <li
      className={`${classes.root}`}
      role="treeitem"
      aria-expanded={isExpandedNodeIncludes()}
      id={props.labelCode}
      aria-selected={state.selectedNode === props.labelCode}
    >
      {/* expanded - selected - focused */}
      <div
        aria-selected={state.selectedNode === props.labelCode}
        className={`${classes.content} ${
          state.selectedNode === props.labelCode ? "customTree-selected" : ""
        }`}
        onClick={() => handleSelect(props.labelCode)}
      >
        <div
          className={`${classes.iconContainer}`}
          onClick={() => handleExpandOrCollapse(props.labelCode)}
        >
          {props.children?.toString().length! > 0
            ? isExpandedNodeIncludes()
              ? props.collapseIcon
              : props.expandIcon
            : props.endIcon}
        </div>

        <div className={`${classes.label}`}>
          {props.label} - {props.labelCode}
        </div>

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
            onClick={() =>
              handleAddNode(props.labelCode, {
                children: [],
                label: "New Node",
                labelCode: "New Node",
                nodeId: "New Node",
              })
            }
            color="#fff"
            style={{
              height: "20px",
              width: "20px",
              cursor: "pointer",
              marginInlineEnd: "10px",
              marginBlockEnd: "10px",
            }}
          />

          <PencilIcon
            onClick={() =>
              handleUpdateNode(props.labelCode, {
                children: [],
                label: "Updated Node",
                labelCode: "New Node",
                nodeId: "New Node",
              })
            }
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
            onClick={() => handleDeleteNode(props.labelCode)}
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

      <animated.div
        style={{
          ...springAnimation,
          display: "grid",
          gridTemplateRows: `${isExpandedNodeIncludes() ? "1fr" : "0fr"}`,
          overflow: "hidden",
          transition: "grid-template-rows 600ms",
        }}
      >
        <animated.ul role="group" className={`${classes.group}`}>
          <div className={`${classes.wrapper} overflow-hidden`}>
            <div className={`${classes.wrapperInner}`}>{props.children}</div>
          </div>
        </animated.ul>
      </animated.div>
    </li>
  );
};
