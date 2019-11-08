import React,{Component} from 'react';
import Helper from './Helper';
import '../ID.css';
class ID extends Component{
    static defaultProps={
        insertBtn:'Insert Item',
        deleteBtn:'Remove All'
    }
  
    state={
        mainValue:[],
        vaziat2:false,
       
    }
//     componentDidMount(){
//         const get=localStorage.getItem('values');
//         const final=JSON.parse(get);
//         console.log(get)
//         this.setState((myState)=>{
//             return {mainValue:final}
//         })
//     }
//     componentDidUpdate(){
//         const json=JSON.stringify(this.state.mainValue);
//         console.log(json)
//         localStorage.setItem('values',json);
//    }
    handleSubmit=(event)=>{
        var sayid=true;
        event.preventDefault();
        const inputValue=event.target.elements.options.value.trim();
        if(inputValue){
            this.state.mainValue.forEach((m)=>{
                if(m===inputValue){
                   console.log(true)
                   sayid=false
                }
            })
            if(sayid===true){  this.setState((myState)=>{
                return {mainValue:[...myState.mainValue,inputValue],vaziat2:false}
            })
        
        
        }
           }else{
            this.setState((myState)=>(
                 {vaziat2:true}
            ))
        }
        event.target.elements.options.value='';
      
    }
    handleDeleteAll=()=>{
      return  this.setState((myState)=>(
             {mainValue:[]}
        ))
    }
    handleGet=()=>{
       return  this.state.mainValue.map((m)=>{
              return(
                 <li key={m.toString()}  className="option">
                    <p className="option__text">{m}</p>
                    <button className="button button--link" onClick={()=>{
                        var z = this.state.mainValue.filter((t)=>m!==t)
                        this.setState((myState)=>{
                           return {mainValue:z}})
                    }}>Remove</button>
                 </li>
              
              ) ;
         })
      }
   render(){
    const pStyle = {
       padding:0
      };
        return(
            <div className="container">
                 <Helper get={this.state.mainValue} getVaziat={this.state.vaziat2}/>
                 <div className="widget-header">
                 <h3 className="widget-header__title">Your Options</h3>
                 <button className="button button--link" onClick={this.handleDeleteAll}>{this.props.deleteBtn}</button>
                 </div>
                 <div className="widget">
                  <div>
                        <ul style={pStyle}>
                        {this.handleGet()}
                       </ul>
                 </div>
                 <form className="add-option" onSubmit={this.handleSubmit}>
                    <input className="add-option__input" type="text" name="options"></input>
                    <button className="button">{this.props.insertBtn}</button>
                 </form>
                 </div>
              
            
              </div>
        );
    }
}
export default ID;