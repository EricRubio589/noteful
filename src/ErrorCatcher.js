import React from 'react';

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
            return (<h2>The connection to the server failed</h2>)
        }
        return this.props.children;     
    }
}

export default ErrorCatcher;