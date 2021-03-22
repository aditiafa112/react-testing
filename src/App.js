import './App.css';
import CompAxiosCall from './testing-area/CompAxiosCall';
import CompRole from './testing-area/CompRole';
import CompUserEvent from './testing-area/CompUserEvent';
import CompVariant from './testing-area/CompVariant';
import SampleCompRTL from './testing-area/SampleCompRTL';
import SimpleShowHide from './testing-area/SimpleShowHide';

function App() {
  return (
    <div className="App">
      <SampleCompRTL />
      <SimpleShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </div>
  );
}

export default App;
