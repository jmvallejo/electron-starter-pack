import React from 'react'
import './App.less'
import logo from './img/react-logo.svg'

const App: React.FunctionComponent = () => (
	<div className="testApp">
		<h1>Hello React from the Web!</h1>
		<img className="logo" src={logo} alt="React Icon" />
		<span>Version {process.env.APP_VERSION}</span>
	</div>
)

export default App
