import react from 'react';
import "./HideAndSickStyle.css"


class ShowBox extends react.Component {
    constructor(props) {
        super();
        this.state = { box: true };

    }

    showHideBox = () => {
        this.setState(prevState => {
           return {box: !prevState.box}
           console.log(this.state);
        })
    }

    render() {

        return <>
            <input type="button" value='show/hide' onClick={this.showHideBox} />
            { this.state.box ? <button class='box'>HideMe</button> : null }
        </>
    }
}

export default ShowBox;
