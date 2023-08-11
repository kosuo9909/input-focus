import { useRef } from 'react';
import './App.css';
import CustomButtons from './components/CustomButtons';
import GeneralTab from './components/GeneralTab';

function App() {
  const focusRef = useRef();

  const handleRefFocus = () => {
    focusRef.current.focus();
  };
  return (
    <div className="App">
      <GeneralTab ref={focusRef} />
      <CustomButtons handleRefFocus={handleRefFocus} />
    </div>
  );
}

export default App;
