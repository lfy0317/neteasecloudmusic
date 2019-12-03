import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../store/actionCreator/discover';


class Music extends React.Component{
    render(){
        return(
            <div>
                {this.props.music.map((v,i)=>(
                    <audio src ={v.url} key={i} controls autoPlay></audio>
                ))}
            </div>
            
        )
    }
    componentDidMount(){
      this.props.getMusic.call(this,this.props.location.state.id);
    // console.log( this.props.location.state.id)
    }
}
function mapStateToProps(state) {
//    console.log(1111111111111111111111111,state.discoverReducer.music)
    return {
      music:state.discoverReducer.music
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Music)