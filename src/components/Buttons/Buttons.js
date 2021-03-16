import react from 'react';
import Button from './Button'
import '../Buttons/ButtonsStyle.css';
class Buttons extends react.Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="container">
           <Button name={"Important"} weight={700}/>
            <Button name={"Not Important"} weight={300}/>

        </div>
    }
}

export default Buttons;