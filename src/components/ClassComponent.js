import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {a: 0,b: 25};
        console.log('constructor');
    }

    componentDidMount() {
        console.log('didMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a === 5) {
            return "Snapshot";
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didUpdate')
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}));
    }

    render() {
        console.log('render');
        return (
            <div>
                <div>Hello from class Component</div>
                <div> Props: {this.props.ssss}</div>
                <div>
                    A: {this.state.a}
                    <button onClick={() => this.inc()}>inc A</button>
                </div>
                <div> B: {this.state.b}</div>
            </div>
        )
    }

}

export {ClassComponent};