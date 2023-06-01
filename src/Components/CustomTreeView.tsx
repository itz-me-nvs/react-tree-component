import { useContext } from "react";
import { TreeContext } from "../../Context/reducer";
import { TreeContextType } from "../Shared/Models/contextModel";
import { TreeComponentModel, TreeViewProps } from "../Shared/Models/treeModel";
import { TreeViewHTMLClasses } from "../Shared/Utils/ComponentMetaData";
import { CustomTreeItem } from "./CustomTreeItem";

export const CustomTreeView = (props: TreeViewProps): JSX.Element => {
  const classes = TreeViewHTMLClasses;
  console.log("view", props);

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
      {/* NodeList[0].label */}
      <CustomTreeItem
        nodeId="1"
        componentName="CustomTreeItem"
        label="Online Campus Solutions Product Links"
        key="1"
        labelCode="1"
        expandIcon={props.defaultExpandIcon}
        endIcon={props.defaultEndIcon}
        collapseIcon={props.defaultCollapseIcon}
      >
        {state.treeData?.children.map((e: TreeComponentModel) =>
          TreeComponentGenerator(e)
        )}
      </CustomTreeItem>
      {/* {props.children} */}
    </ul>
  );
};

/* Models */
// public class ProductsModules
// {
//     public short ModuleID { get; set; }
//     public string ModuleName { get; set; }
//     public short ProductID { get; set; }
//     public string Description { get; set; }
//     public int ModuleOrder { get; set; }
//     public int LoginUserID { get; set; }
// }

// public class ProductMenuLinks
//     {
//         public int ProductLinkID { get; set; }
//         public short ProductID { get; set; }
//         public short ModuleID { get; set; }
//         public int MenuLinkID { get; set; }
//         public string PrivilegeName { get; set; }
//         public string HelpFilePath { get; set; }
//         public string Keywords { get; set; }
//         public string MenuURL { get; set; }
//         public int MenuOrder { get; set; }
//         public int LoginUserID { get; set; }
//     }
