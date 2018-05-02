import React from 'react'

import Header from './header'
import Action from './action'
import Options from './options'
import AddOptions from './addoptions'
import OptionModal from './optionmodal'

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelectedOption = ()=>(this.setState(()=>({selectedOption:undefined})))
    handleAddOption=(option)=>{
        if(!option){
            return 'please enter a valid option'
        }else if(this.state.options.indexOf(option)>-1){
            return 'you enter a dublicate value please enter another options'
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    handleRemoveAll=()=>{
        if(this.state.options.length > 0)
            this.setState(()=>({options:[]}))
    }
    handleRemoveOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter(option=>optionToRemove !== option)
        }))
    }
    randomPickOption=()=>{
        const option = Math.floor(Math.random()* this.state.options.length)
        const selectedOption = this.state.options[option]
        this.setState(()=>({selectedOption}))
    }
    componentDidMount(){
        try{
            const options = JSON.parse(localStorage.getItem('options'))
            if(options)
                this.setState(()=>({options}))
        }catch(e){
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const options = JSON.stringify(this.state.options)
            localStorage.setItem('options',options)
        }
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
            <Header subtitle={subtitle} />
                <div className="container" >
                <Action 
                    hasOptions = {this.state.options.length <= 0} 
                    randomPickOption = {this.randomPickOption}
                />
                <div className="widget">
                    <Options 
                    options = {this.state.options}
                    handleRemoveAll = {this.handleRemoveAll} 
                    handleRemoveOption = {this.handleRemoveOption}
                    />
                    <AddOptions 
                        handleAddOption = {this.handleAddOption}
                    />
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption} 
                handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
            </div>
        );
    }
}

export default IndecisionApp