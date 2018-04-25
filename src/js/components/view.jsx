import React from 'react';
import {ChoseButton} from './choseButton.jsx';

class View extends React.Component{
    handleClickView=(e, myEvent)=>{
        this.props.action(e,myEvent)
    }
    render(){
        return(<div className="full-page">
        <ChoseButton option='wedding' action={this.handleClickView}/>
        <ChoseButton option='birthday' action={this.handleClickView}/>

    </div>)
    }
}
export {View}