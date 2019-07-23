import React from 'react';


class Error extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="error">
                <h1>404</h1>
                <h1>Ooops!</h1>
                <h1>Page not found</h1>
            </div>
        )
    }
}

export default Error;