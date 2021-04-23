import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import OnHeader from './components/OnHeader';

import Routes from './routes';

import GlobalStyle from './styles/global'

const App: React.FC = () => (
    <BrowserRouter>
        <OnHeader />

        <Routes />

        <GlobalStyle />
    </BrowserRouter>
)

export default App
