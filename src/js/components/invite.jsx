import React from 'react';

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
            <div id='weddingCard1'>
                <div id='invNames' > {this.state.name} </div>
                <div id='invPart1'>together with their parensts<br/> invite you </div>
                <div id='invPart2'>to join them at<br/>{`the celebration of their ${this.state.option}`}</div>
                <div id='invited'>{this.state.who}</div>
                <div id='place'>{this.state.where} </div>
                <div id='when'>{`${this.state.date} ${this.state.month} ${this.state.year}`}</div>
                <div id='hour'>{this.state.hour}</div>
                <div id='monthDay'>miesiąc/data</div>
            </div>
            <div className="btnAnim">
                    <div className="example-screen inviteBtn" onClick={this.print}  >print</div>
            </div>
        </div>
        )
    }
}
export {Invite}