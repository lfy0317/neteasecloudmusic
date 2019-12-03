import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../store/actionCreator/discover';


class Discover extends React.Component{
    render(){
        return(
            
            <div>
                <i className={"iconfont icon-fangdajing"}></i><input placeholder={"placeholder"} ></input>
                <div style={{display:"flex",flexWrap:"wrap",justifycontent:"spacebetween"}}>
                    {
                        this.props.songSheet.map((v)=>(
                        <div key={v.id} style={{height:"1.6rem"}}>
                            
                                <img src={v.picUrl}alt="加载中..." style={{width:"1.20rem"} }></img>
                                <div style={{width:"1.24rem",height:"0.36rem",overflow:"hidden"}}>{v.name}</div>
                        </div>
                        ))
                    }
                </div>
                <div>
                    {this.props.newSong.map((v,i)=>(
                        <div key={i}>
                            <div style={{fontSize:"0.2rem"}} 
                            onClick={()=>this.props.router.props.history.push({pathname:"/music",state:{id:v.id}})} >{v.name}</div>

                        </div>
                    ))}
                </div>
            </div>
            
        )
    }
    componentDidMount(){
        this.props.getMusicList.call(this);
        this.props.getNewSong.call(this);
    }
}
function mapStateToProps(state) {
    return {
        newSong:state.discoverReducer.newSong.slice(0,10),
        songSheet:state.discoverReducer.songSheet.slice(0,6)
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Discover)