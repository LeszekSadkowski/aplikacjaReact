import React from 'react';
import {Wedding} from './wedding1.jsx';

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

        console.log(this.props)
        return (<div id='displInvSite'>
            <Wedding info={this.state} />
            <div className="btnAnim">
                    <div className="example-screen inviteBtn" onClick={this.print}  >print</div>
            </div>
        </div>
        )
    }
}
export {Invite}