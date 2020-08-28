import React, {useState}  from 'react';
import { SwatchesPicker } from 'react-color';
import './App.css';
import Logo from './Logo';





function App() {
  const [Color, Set_Color] = useState("red");
  const Set_Color_Inner = Color_Object => Set_Color ( Color_Object.hex );
	return (
		<div className="App">
			<header className="App-header">

		
        <Logo Color={Color} />      
        <SwatchesPicker
		color={Color}
		onChangeComplete={Set_Color_Inner} />
      </header>
		</div>
	);
}

export default App;