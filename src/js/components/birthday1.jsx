import React from 'react';



class Birthday extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.info.name,
            who:this.props.info.who,
            where:this.props.info.where,
            hour:this.props.info.hour,
            when:this.props.info.when,
            option:this.props.info.option,
            month:this.props.info.month,
            date:this.props.info.date,
            year:this.props.info.year
        }
    }
    render(){
        return(
            <div id='birthdayCard1'>
               <div id='under'><img src={'../../../images/under-construction.gif'}/></div>
            </div>
        )
    }



}
export {Birthday}