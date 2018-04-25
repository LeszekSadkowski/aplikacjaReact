import React from 'react';

class ChoseButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option:this.props.option
        }
    }
    handleClick=(e, props)=>{
        console.log(this.state.option);
        this.props.action(e,props)
    }
    render(){
       return( <div>
        <button className="page-button" onClick={e=>this.handleClick(e,this.state.option)}>{this.props.option}</button>
        </div>
       )
    }
}
export {ChoseButton}