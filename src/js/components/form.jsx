import React from 'react';
import {Invite} from './invite.jsx';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            who:'',
            where:'',
            when:'',
            hour:'',
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
            this.state.name.where!=0||this.state.when.length!=0
        ||this.state.hour!=0){
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
        let inviteEvent=(
        <div className="full-page">
            <div className='table'>
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
                <div id='calendar'>
                    <span > when </span>

                    <div>
                        <input type="date"
                                id="date"
                                onChange={e => this.handleChange(e, "when")}
                                value={this.state.when}/>
                    </div>
                    <div>
                        <input type="time"
                                id="time"
                                onChange={e => this.handleChange(e, "hour")}
                                value={this.state.hour}/>
                    </div>
                </div>
                <div>
                    <input type="text"
                    placeholder="event place"
                    id="place" name="place"
                    onChange={e => this.handleChange(e, "where")}
                    value={this.state.where}/>
                </div>


                <div>
                    <button  id='formBtn'
                            onClick={this.handleClick} >save</button>
                </div>
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
export {Form}