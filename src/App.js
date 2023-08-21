import { useRef } from 'react';
import './App.css';
import CustomButtons from './components/CustomButtons';
import GeneralTab from './components/GeneralTab';
import TreeView from './components/TreeView';

function App() {
  const focusRef = useRef();

  const handleRefFocus = () => {
    focusRef.current.focus();
  };
  return (
    <div className='App'>
      <TreeView />
      {/* <GeneralTab ref={focusRef} />
      <CustomButtons handleRefFocus={handleRefFocus} /> */}
    </div>
  );
}

export default App;
