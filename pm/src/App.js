import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar title="Play With Text" />
      <div className='container'>
        <Form heading="Play With Text" />
      </div>
    </>
  );
}

export default App;
