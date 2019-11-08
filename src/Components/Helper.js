import React,{Component} from 'react';
import OptionModal from './OptionModal';
import '../Helper.css'
class Helper extends Component{
    static defaultProps={
        btnTitle:'What should i do ?'
    }
    state={
        vaziat:false,
        dastresi:false,
        modalShow:undefined
    }
    handleHelp=()=>{
       if(this.props.get.length>0){
         this.setState((myState)=>(
             {modalShow:true}
            ))
       } 
     }
     handleValue=()=>{
        const value=this.props.get;
        var randIndex=Math.floor(Math.random()*value.length);
        return value[randIndex];
     }
     handleModalShow=()=>{
         this.setState((myState)=>(
              {modalShow:undefined}
         ))
     }
    render(){
        return(
            <div>
               <div className="container">
                  <button className='big-button' disabled={this.props.get.length === 0? true : false} onClick={this.handleHelp}>{this.props.btnTitle}</button>
                  <p className={this.props.getVaziat ?'  addOptionTitle show':'addOptionTitle  hidden'}>Please add an option!</p>
                  <OptionModal show={this.state.modalShow} handleClose={this.handleModalShow} value={this.handleValue}/>
               </div>
            </div>
        );
    }
}
export default Helper;