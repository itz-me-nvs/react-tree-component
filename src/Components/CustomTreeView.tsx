import { useRef } from 'react';
import { TreeViewProps } from '../Shared/Models/treeModel';
import { TreeClasses } from '../Shared/Utils/ComponentMetaData';

export const CustomTreeView = (props: TreeViewProps): JSX.Element => {
  const classes = TreeClasses;
  console.log(classes);

  const RootTreeElementRef = useRef<HTMLUListElement>(null);
  // Element after focus event
  RootTreeElementRef.current?.addEventListener('focus', (e) => {
    console.log('The ul element has received focus');
    // RootTreeElementRef.current!.setAttribute('aria-activedescendant', ':r1:-2');
  });

  // Element focus out event
  RootTreeElementRef.current?.addEventListener('focusout', () => {
    console.log('The ul element has received focus out');
    // RootTreeElementRef.current!.setAttribute('aria-activedescendant', ':r1:-2');
  });

  return (
    <ul
      role="tree"
      id={props.id}
      aria-multiselectable="false"
      className={classes.root}
      tabIndex={-1}
      ref={RootTreeElementRef}
    >
      {props.children}
    </ul>
  );
};
