export default{
    changeKeyWords(keyWords=''){
        return (dispatch)=>{
            if(keyWords.length>0){
                dispatch({
                    type:'CHANGE_KEY_WORDS',
                    payload:{
                        keyWords
                    }
                })
                this.$axios.get('/search/suggest?keywords='+keyWords+'&type=mobile').then(data=>{
                    dispatch({
                        type:'CHANGE_SUGGESTLIST',
                        payload:{
                            suggestList:data.result.allMatch || []
                        }
                    })
                }).catch(()=>{
                    dispatch({
                        type:'CHANGE_SUGGESTLIST',
                        payload:{
                            suggestList:[]
                        }
                    })
                })
            }else{
                dispatch({
                    type:'CHANGE_SUGGESTLIST',
                    payload:{
                        suggestList:[]
                    }
                })
            }
        }
    },
    getHotSearch(){
        return (dispatch)=>{
            this.$axios.get('/search/hot').then(data=>{
                if(data.code === 200){
                    dispatch({
                        type:"CHANGE_HOT_SEARCH",
                        payload:{
                            hotSearch:data.result.hots
                        }
                    })
                }
            }).catch(()=>{
                dispatch({
                    type:"CHANGE_HOT_SEARCH",
                    payload:{
                        hotSearch:[]
                    }
                })
            })
        }
    },
    getKeyword(keyWords=""){
        return (dispatch)=>{
            this.setState({
                value:keyWords
            })
            this.props.changeKeyWords.call(this,keyWords)
        }
    },
    goMusic(keyWords="",Toast){
        return (dispatch)=>{
            this.$axios.get('/search/multimatch?keywords='+keyWords).then(data=>{
                if(data.result.video){
                    const id = data.result.video[0].vid/1
                    this.props.history.push({pathname:'/music',state:{id}})
                }else{
                    Toast.info('搜索无结果')
                }
            })
        }
    }
}