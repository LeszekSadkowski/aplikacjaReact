import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/main.scss');

class Invite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            who:'',
            where:'',
            when:''
        }
    }
    render(){
        return (
        <div id='inviteCard'>
            <div id='invNames' > {this.state.name} </div>
            <div id='invInformation'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nobis voluptatem dolorem, mollitia hic dolores optio labore. Consequatur perspiciatis molestiae ratione numquam blanditiis quia! Quis blanditiis illum sequi aliquam recusandae.</div>
        </div>
        )
    }
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            who:'',
            where:'',
            when:'',
            option:this.props.option,
            invite:false
        }
    }
    handleChange = (e, keyState) => {
        const tempState = {}
        tempState[keyState] = e.target.value;
        this.setState(tempState)
    }
    handleClick=()=>{

        this.setState({
            invite:true
        })
        console.log(this.state);

    }


    render(){
        let inviteEvent=(<div className="full-page">
            <div>
                <input type="text"
                    placeholder="inviters"
                    id='user' name="user"
                    onChange={e => this.handleChange(e, "name")}
                    value={this.state.name}/>
            </div>
            <div>
                <input type="text"
                    id="invite"
                    placeholder="invited"
                    onChange={e => this.handleChange(e, "who")}
                    value={this.state.who} />
            </div>
            <div>
                <input type="text"
                placeholder="event place"
                id="place" name="place"
                onChange={e => this.handleChange(e, "where")}
                value={this.state.where}/>
            </div>
            <div id='calendar'>
                <span > when </span>
            </div>
            <div>
                <input type="date"
                        id="date"
                        placeholder='dzisiejsza data'
                        onChange={e => this.handleChange(e, "when")}
                        value={this.state.when}/>
            </div>
            <div>
                <button type="" id='formBtn'
                        onClick={this.handleClick} >save</button>
            </div>
        </div>)
        if(this.state.invite){
            inviteEvent=<Invite info={this.state}/>
        }
        console.log(this.state)
        return(
            <div>
                 {inviteEvent}
            </div>
        )
    }
}
class View extends React.Component{
    handleClickView=(e, myEvent)=>{
        console.log('work');
        this.props.action(e,myEvent)
    }
    render(){
        return(<div className="full-page">
        <div><button className="page-button" onClick={e=>this.handleClickView(e,'wedding')}>wedding</button></div>
        <div><button className="page-button" onClick={e=>this.handleClickView(e,'birth')}>birthday</button></div>
    </div>)
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            event:false,
            option:''
        }
    }

    handleClick=(e, myEvent)=>{
        console.log('work');
        this.setState({
            event:true,
            option: myEvent
        })
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

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);