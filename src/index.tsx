import ReactDOM from 'react-dom'
import React from 'react'

import { App } from './core/App'
import { registerSW } from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// registerSW()
