import React from 'react';

class Invite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.info.name,
            who:this.props.info.who,
            where:this.props.info.where,
            when:this.props.info.when,
            option:this.props.info.option,
            month:this.props.info.month
        }
    }
    print=()=>{
        window.print();

    }
    render(){
        console.log(this.props)
        return (
        <div id='inviteCard'>
            <div id='invNames' > {this.state.name} </div>
            <div id='invInformation'>{`Lorem ${this.state.who}ipsum dolor sit amet, consectetur ${this.state.where}adipisicing elit. Ea nobis voluptatem dolorem, mollitia hic dolores optio labore. Consequatur perspiciatis molestiae ratione numquam blanditiis quia! Quis blanditiis illum sequi aliquam recusandae.`}</div>
            <div className="btnAnim">
                 <div className="example-screen inviteBtn" onClick={this.print}  >print</div>
            </div>
        </div>
        )
    }
}
export {Invite}