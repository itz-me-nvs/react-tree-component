import { memo, useContext } from "react";
import { TreeContext } from "../../Context/reducer";
import { TreeContextType } from "../Shared/Models/contextModel";
import { TreeComponentModel, TreeViewProps } from "../Shared/Models/treeModel";
import { TreeViewHTMLClasses } from "../Shared/Utils/ComponentMetaData";
import CustomTreeItem from "./CustomTreeItem";

const CustomTreeView = (props: TreeViewProps): JSX.Element => {
  const classes = TreeViewHTMLClasses;
  const { state } = useContext<TreeContextType>(TreeContext);

  const TreeComponentGenerator = (node: TreeComponentModel) => {
    return (
      <CustomTreeItem
        nodeId={node.nodeId?.toString()}
        label={node.label}
        labelCode={node.labelCode}
        key={node?.labelCode?.toString()}
        expandIcon={props.defaultExpandIcon}
        endIcon={props.defaultEndIcon}
        collapseIcon={props.defaultCollapseIcon}
      >
        {node.children?.map((e: any) => {
          return TreeComponentGenerator(e);
        })}
      </CustomTreeItem>
    );
  };

  return (
    <ul
      role="tree"
      id={props.id}
      aria-multiselectable="false"
      className={classes.root}
      tabIndex={-1}
    >
      <CustomTreeItem
        nodeId="1"
        componentName="CustomTreeItem"
        label="Online Campus Solutions Menu Links"
        key="1"
        labelCode="1"
        expandIcon={props.defaultExpandIcon}
        endIcon={props.defaultEndIcon}
        collapseIcon={props.defaultCollapseIcon}
      >
        {state.treeData?.children?.map((e: TreeComponentModel) =>
          TreeComponentGenerator(e)
        )}
      </CustomTreeItem>
    </ul>
  );
};

export default memo(CustomTreeView);
