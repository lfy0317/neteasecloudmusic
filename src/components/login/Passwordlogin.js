import React from 'react';
import { createForm } from 'rc-form';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actionCreator/login';
import {connect} from 'react-redux';
class Passwordlogin extends React.Component{
    render(){
        return(
            <div>Passwordlogin</div>
        )
    }
}
function mapStateToProps({ loginState }) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Passwordlogin))