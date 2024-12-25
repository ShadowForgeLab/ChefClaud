import Header from "./components/Header";
import Ingredient from "./components/Ingredient";
// import { useState } from "react";


function App() {
  // const [theme,setTheme]=useState('light')

  // function handleDarkMode(){
  //   setTheme((prevTheme) =>( prevTheme === 'light' ? 'dark' : 'light'))
  // }
  return (
    <div /*data-bs-theme={theme}*/>
    <Header />
    {/* <button onClick={handleDarkMode}>{theme === 'Light' ? 'Dark' : 'Light'} Mode</button> */}
    <Ingredient />
    </div>
  );
}

export default App;
