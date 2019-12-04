import React from 'react';
import { SearchBar, WhiteSpace, Toast} from 'antd-mobile';
import '../assets/css/search/search.scss';
import { bindActionCreators } from 'redux';
import actionCreator from '../store/actionCreator/search';
import { connect } from 'react-redux'
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div className="search">
                <SearchBar placeholder="搜索歌曲、歌手、专辑" ref='search' value={this.state.value}
                    onChange={this.onChange} />
                <WhiteSpace />
                <div style={{ display: this.state.value.length > 0 ? 'none' : 'block', marginBottom: '.2rem' }}>
                    <h6 style={{ textAlign: 'left', paddingLeft: '.1rem', fontSize: '.14rem' }}>热门搜索</h6>
                    <div style={{ textAlign: 'left', marginTop: '.1rem', display: 'flex', flexWrap: 'wrap' }}>{
                        this.props.hotSearch.map((v, index) => (
                            <span style={{
                                margin: '.1rem .1rem 0', border: '.01rem solid #000', borderRadius: '.16rem',
                                padding: '.03rem', fontSize: '.14rem'
                            }} key={index} onClick={this.props.getKeyword.bind(this, v.first)}>{v.first}</span>
                        ))
                    }
                    </div>
                </div>
                <div style={{
                    borderTop: '.01rem solid #ccc', borderBottom: '.01rem solid #ccc',
                    display: this.props.suggestList.length > 0 ? 'block' : 'none'
                }}>
                    {
                        this.props.suggestList.map((v, index) => (
                            <div key={index} style={{ background: '#fff', display: 'flex', height: '.4rem', alignItems: 'center' }}>
                                <i className='iconfont icon-fangdajing' style={{ width: '.45rem' }}></i>
                                <p style={{
                                    borderBottom: '.01rem solid #ccc', height: '100%', lineHeight: '.4rem',
                                    width: '100%', textAlign: 'left'
                                }} onClick={this.props.goMusic.bind(this,v.keyword,Toast)}>{v.keyword}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{ display: this.props.suggestList.length > 0 ? 'none' : 'block' }}>搜索无结果</div>
            </div>
        )
    }
    onChange = (value) => {
        this.setState({ value }, () => {
            this.props.changeKeyWords.call(this, this.state.value)
        });
    }
    componentDidMount() {
        this.props.getHotSearch.call(this)
    }
}
function mapStateToProps({ searchState }) {
    return {
        keyWords: searchState.keyWords,
        hotSearch: searchState.hotSearch,
        suggestList: searchState.suggestList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)