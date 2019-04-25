class Welcome extends React.Component {
    render() {
        return (
            <div className="greatings">
            <p>Hej jestem</p>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));
