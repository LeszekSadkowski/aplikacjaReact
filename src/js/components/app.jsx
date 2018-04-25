import React from 'react';
import {View} from './view.jsx';
import {Form} from './form.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            event:false,
            option:''
        }
    }

    handleClick=(e, myEvent)=>{
        this.setState({
            event:true,
            option: myEvent
        });
        console.log(myEvent);

    }

    render(){
        let view=<View action={this.handleClick} />
            if(this.state.event){
                view=<Form option={this.state.option}/>
            }
        return(<div>
            {view}
        </div>)
    }
}
export {App}