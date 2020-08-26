import React from 'react'
import './App.less'
import logo from './img/electron-logo.svg'

const App: React.FunctionComponent = () => (
	<div className="testApp">
		<h1>Hello React from the Electron!</h1>
		<img className="logo" src={logo} alt="React Icon" />
	</div>
)

export default App
