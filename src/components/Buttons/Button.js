import react from 'react';

class Button extends react.Component {
    constructor(props) {
        super();

        // console.log(props.name)
    }

    render() {
        return <div className="button">
            {/* {<button style={{fontWeight:props.weight}} type="button">{this.props.name}</button>} */}
            {/* {<button type="button">{this.props.name} {this.props.weight}</button>} */}
            {<button style= {{fontWeight:this.props.weight}} type="button">{this.props.name}</button>}
        </div>
    }
}

export default Button;