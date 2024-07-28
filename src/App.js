
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
   <>
 
 
<Navbar title="MyTestApplication" aboutText="About the project"/>
<div className='container'>
<Textform heading='Welcome to code with Prabhat' email='Please enter your Email address' textarea="Enter the Valid Texxt"/>
</div>
   
   </>
  );
}

export default App;
