export default{
    changeKeyWords(keyWords=''){
        return (dispatch)=>{
            dispatch({
                type:'CHANGE_KEY_WORDS',
                payload:{
                    keyWords
                }
            })
            this.$axios.get('/search/suggest?keywords='+keyWords+'&type=mobile').then(data=>{
                console.log(data)
            }).catch(()=>{})
        }
    },
    getHotSearch(){
        return (dispatch)=>{
            this.$axios.get('/search/hot').then(data=>{
                if(data.code === 200){
                    console.log(data)
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
    changeKeyWord(keyWords=''){
        return (dispatch)=>{
            this.$axios.get('/search/multimatch?keywords='+keyWords).then(data=>{
                console.log(data)
            }).catch(()=>{})
        }
    }
}