import React from 'react'
import './App.less'
import logo from './img/electron-logo.svg'

const App: React.FunctionComponent = () => (
	<div>
		<h1>Hello React from Electron!</h1>
		<img className="logo" src={logo} alt="React Icon" />
	</div>
)

export default App
