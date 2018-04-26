import React from 'react';
import {Wedding} from './wedding1.jsx';
import {Birthday} from './birthday1.jsx';

class Invite extends React.Component{
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
    print=()=>{
        window.print();

    }
    render(){
        let toDisplay=(this.state.option=='wedding')? <Wedding info={this.state} />:<Birthday info={this.state} /> //do zamiany na switcha gdy będzie więcej


        console.log(this.props)
        return (<div id='displInvSite'>
            {toDisplay}
            <div className="btnAnim">
                    <div className="example-screen inviteBtn" onClick={this.print}  >print</div>
            </div>
        </div>
        )
    }
}
export {Invite}