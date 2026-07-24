import { Component } from "react";


class Counter extends Component{

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleIncrement =()=> {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = ()=> {
        this.setState({ count: this.state.count - 1 });
    }

    // when component get mounted for the first time
    // 
    // useEffect(() => { }, [])
    componentDidMount() {
        console.log('Component mounted');
    }

     // useEffect(() => { }, [dependency])
    componentDidUpdate() {
        console.log('Component did update');
    }

    /*
        useEffect(()=>{
            return ()=>{
                // cleanup
            }    
        })
    */
    componentWillUnmount() {
        console.log('Component unmounted');
    }

    render() {
        return <div>
            <h2>Count : {this.state.count}</h2>
            <button onClick={this.handleIncrement}>++</button>
            <button onClick={this.handleDecrement}>--</button>
        </div>
    }
}

export default Counter;