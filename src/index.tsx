import React from 'react'
import App from './app/app'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/theme-provider'
import 'shared/config/i18n/i18n'
import { render } from 'react-dom'
import { ErrorBoundary } from 'app/providers/error-boundary'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
