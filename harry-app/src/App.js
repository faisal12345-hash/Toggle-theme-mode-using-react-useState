import './App.css';
import Navbar from './Component/Navbar';
// import TextForm from './Component/TextForm';
import About from './Component/About';

function App() {
  return (
    <>
      <Navbar title="TextUtlis" aboutText="About Us" />
      {/* <div className="container">
        <TextForm heading="Enter the text here below..." />
      </div> */}
      <div className='container'>
        <About />

      </div>
    </>
  );
}

export default App;
