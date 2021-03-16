import react from 'react';

class Increment extends react.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

    }

    handleClick = () => {
        this.setState(prevState => {
           return {count: prevState.count + 1}
           console.log(this.state);
        })
    }

//     downByOne=()=>{
//         this.setState({
//             count:this.state.count-1
//         })
// console.log('downByOne');
//     }

//     upByOne=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//         console.log('downByOne');
//     }

    render() {
console.log(this.state);
        return <>
            {/* <input type="button" value={+} onClick={this.upByOne} /> */}
            <input type="button" value={this.state.count} onClick={this.handleClick} />
            {/* {this.state.count}
            <input type="button" value={-} onClick={this.downByOne} /> */}
        </>
    }
}

export default Increment;