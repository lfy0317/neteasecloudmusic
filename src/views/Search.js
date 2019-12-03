import React from 'react';
import { SearchBar, WhiteSpace } from 'antd-mobile';
import '../assets/css/search/search.scss';
import {bindActionCreators} from 'redux';
import actionCreator from '../store/actionCreator/search';
import {connect} from 'react-redux'
class Search extends React.Component{
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    render(){
        return(
            <div className="search">
                <SearchBar placeholder="搜索歌曲、歌手、专辑" ref='search' value={this.state.value}
                onChange={this.onChange} onSubmit={this.props.changeKeyWord.bind(this,this.props.keyWords)}/>
                <WhiteSpace />
                <div>
                    <h6 style={{textAlign:'left',paddingLeft:'.1rem',fontSize:'.14rem'}}>热门搜索</h6>
                    <div style={{textAlign:'left',marginTop:'.1rem',display:'flex',flexWrap:'wrap'}}>{
                        this.props.hotSearch.map((v,index)=>(
                            <span style={{margin:'.1rem .1rem 0',border:'.01rem solid #000',borderRadius:'.16rem',
                            padding:'.03rem',fontSize:'.14rem'}} key={index}>{v.first}</span>
                        ))
                    } 
                    </div>
                </div>
            </div>
        )
    }
    onChange= (value) => {
        this.setState({ value },()=>{
            this.props.changeKeyWords.call(this,this.state.value)
        });
    }
    componentDidMount(){
        this.props.getHotSearch.call(this)
    }
}
function mapStateToProps({ searchState }) {
    return {
        keyWords:searchState.keyWords,
        hotSearch:searchState.hotSearch
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)