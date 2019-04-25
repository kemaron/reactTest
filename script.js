import React from 'react';
import ReactDOM from 'react-dom';

class welcome extends React.Component {
    render() {
        return (
            <div className="greatings">
            <p>Hej jestem</p>
            </div>
        )
    }
}



ReactDOM.render(<welcome/>, document.getElementById('app'));