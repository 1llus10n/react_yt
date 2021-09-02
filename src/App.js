import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <div className="container my-3">
 
    <TextForm heading="Enter The Text to Analyze below"/>
    </div>
   
    </>
  );
}

export default App;
