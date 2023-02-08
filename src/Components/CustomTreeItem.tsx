// import { treeViewClasses } from '@mui/lab';
import { TreeItemProps } from '../Shared/Models/treeModel';

export const CustomTreeItem = (props: TreeItemProps) => {
  console.log(props);
  const slots = {
    root: ['root'],
  };
  // console.log(composeClasses(slots,()=>));

  return (
    <li
      className={`${props.componentName}-root`}
      role="treeitem"
      aria-expanded="false"
      id={props.nodeId}
      aria-selected="false"
      tabIndex={-1}
    >
      Hello
    </li>
  );
};
