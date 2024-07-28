
import './App.css';
import Loginform from './components/Loginform';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
   <>
 
 
<Navbar title="MyTestApplication" aboutText="About the project" login="Login"/>
<div className='container'>
<Textform heading='Welcome to code with Prabhat' email='Please enter your Email address' textarea="Enter the Valid Texxt"/>
</div>
<div className='container'><Loginform/></div>

   </>
  );
}

export default App;
