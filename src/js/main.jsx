import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/main.scss');

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

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            who:'',
            where:'',
            when:'',
            option:this.props.option,
            invite:false,
            month:null
        }
    }
    handleChange = (e, keyState) => {
        const tempState = {}
        tempState[keyState] = e.target.value;
        this.setState(tempState)
    }
    handleClick=()=>{
        let empty=true;
        let wrgDate=true;
        let whenEl= this.state.when.split('-');
        const curYear= new Date().getFullYear();
        const curMonth= new Date().getMonth();
        const currDay= new Date().getDate();
        const monthsArr=['January','February','March','April','May','June','July','August','September','October','November','December']
        let monthUse=parseInt(whenEl[1]);
        const monthName=monthsArr[monthUse-1];
        if(this.state.name.length!=0||this.state.who.length!=0||
            this.state.name.where!=0||this.state.when.length!=0){
            empty=false;
        }
        if(whenEl[0]>=curYear && whenEl[1]>=curMonth && whenEl[2]>=currDay){
            wrgDate=false;
        }else{
            alert('please fill out the form')
        }

        if (empty==false && wrgDate==false){
           this.setState({
            month:monthName,
            invite:true

            })
        }else{
            alert('date cannot be past')
        }
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
                <button  id='formBtn'
                        onClick={this.handleClick} >save</button>
            </div>
        </div>)
        if(this.state.invite){
            inviteEvent=<Invite info={this.state}/>
        }

        return(
            <div>
                 {inviteEvent}
            </div>
        )
    }
}
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

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);