import { useState } from 'react';
import './App.css';
import { CustomTreeItem } from './Components/CustomTreeItem';
import { CustomTreeView } from './Components/CustomTreeView';
import CustomizedTreeView from './customTree';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CustomizedTreeView />
      <CustomTreeView
        className="hello"
        aria-label="Custom Tree"
        defaultExpanded={['1']}
        id="1"
      >
        <CustomTreeItem nodeId="2" componentName="CustomTreeItem" />
      </CustomTreeView>
    </div>
  );
}

export default App;
