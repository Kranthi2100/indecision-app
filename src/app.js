import './styles/style.scss'
import 'normalize.css/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/indecisionapp'


const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, appRoot);