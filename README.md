---------React Tree Component------

# Description

Just a simple tree component built with React and Typescript. By using this component, you don't have to install any other dependencies. It is a standalone component and also don't worry about state management, it is handled by the component itself.

# features

1. Expand and collapse tree nodes
2. Select and deselect tree nodes
3. Expand and collapse all tree nodes
4. Select and deselect all tree nodes
5. Search tree nodes
6. Customizable icons
7. Customizable styles
8. ADD/ DELETE/ EDIT tree nodes

## usage

Inside src/Component folder, there is a file called CustomTreeView.tsx. This file contains the Tree component.

To use the component, import it into your file and use it as follows:

```
 <CustomTreeView
          className="hello"
          aria-label="Custom Tree"
          id="1"
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
        ></CustomTreeView>

```

## Inspiration

Inspirated design and implementation style from [Material UI Tree View](https://material-ui.com/components/tree-view/)
