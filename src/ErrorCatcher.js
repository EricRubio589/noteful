import React from 'react';
import './ErrorCatcher.css'

class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
            <div className='errorContainer'>
            <   h2>The connection to the server failed</h2>
            </div>)
        }
        return this.props.children;     
    }
}

export default ErrorCatcher;