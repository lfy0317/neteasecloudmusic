import React, { Fragment } from 'react';
import '../../assets/css/mine/listdetail.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../store/actionCreator/mine/Listdetail';

class Listdetail extends React.Component {
    render(){
        return(
            <div>
               <div className="songsList" style={{ display: this.props.show ? "block" : "none" }}>
                    {this.props.playlist ? this.props.playlist.map((v, index) => (
                        <Fragment key={index}>
                           <div>
                               <span></span>
                               <div>

                               </div>
                               <i></i>
                               <i></i>
                           </div>
                        </Fragment>
                    )) : <div>haha</div>}
                </div>
                <div>
                    我是你爸爸
                </div>
            </div>
        )
    }
    componentDidMount() {
        if (this.props.userId)
            this.props.sheetDisjunctor.call(this);
    }
}

function mapStateToProps({ mineState}) {
    return {
        playlist: mineState.playlist,
        tracks:mineState.tracks,//单个歌单，歌曲信息
        toSinglelist:mineState.toSinglelist,//单个歌单，歌曲列表页开关，
        toAddsongs:mineState.toAddsongs,//添加歌曲开关

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Listdetail)