import React, { type ReactNode, Suspense } from 'react'
import { types } from 'sass'
import Error = types.Error
import { type ErrorInfo } from 'react-dom/client'
import { ErrorPage } from 'widgets/error-page'
interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
    this.state = { hasError: false }
  }

    static getDerivedStateFromError (error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true }
  }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo)
  }

    render () {
        const { hasError } = this.state
        const { children } = this.props
        if (this.state.hasError) {
            return <Suspense fallback={''}>
          <ErrorPage/>
      </Suspense>
    }

        return children
  }
}
