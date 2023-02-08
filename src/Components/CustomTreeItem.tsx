import { TreeItemProps } from "../Shared/Models/treeModel";
import { TreeItemHTMLClasses } from "../Shared/Utils/ComponentMetaData";
import "../Styles/CustomTreeItem.style.css";

export const CustomTreeItem = (props: TreeItemProps) => {
  const classes = TreeItemHTMLClasses;

  return (
    <li
      className={`${classes.root}`}
      role="treeitem"
      aria-expanded="false"
      id={props.nodeId}
      aria-selected="false"
      tabIndex={-1}
    >
      {/* expanded - selected - focused */}
      <div className={`${classes.content}`}>
        <div className={`${classes.iconContainer}`}>
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ width: "14px", height: "14px" }}
          >
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"></path>
          </svg>
        </div>

        <div className={`${classes.label}`}>{props.label}</div>
      </div>

      <div>
        <ul role="group" className={`${classes.group}`}>
          <div className={`${classes.wrapper}`}>
            <div className={`${classes.wrapperInner}`}>{props.children}</div>
          </div>
        </ul>
      </div>
    </li>
  );
};
