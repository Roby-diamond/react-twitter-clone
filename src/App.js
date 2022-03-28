import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Main />

      <Widgets />

    </div>
  );
}

export default App;
