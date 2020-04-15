import React from 'react'
import ReactDOM from 'react-dom'
import LiveMode from './LiveMode'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LiveMode />, div)
    ReactDOM.unmountComponentAtNode(div)
})
