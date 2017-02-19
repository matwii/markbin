import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze } from 'meteor/blaze';

class Accounts extends Component{
    //Automatically called when rendered
    componentDidMount(){
        //Render the blaze accounts form then find the div
        // We just rendered in the 'render' method and place
        //the Blaze accounts form in that div
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    //Called when component is removed
    componentWillUnmount(){
        //Go find the forms we created and destroy them
        //We need to clean up those forms ourselves
        Blaze.remove(this.view);
    }

    render() {
        return(
            <div ref="container"></div>
        );
    }
}

export default Accounts;