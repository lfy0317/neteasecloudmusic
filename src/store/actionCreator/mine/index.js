export default {
    sheetDisjunctor() {//渲染歌单
        return (dispatch) => {
            this.$axios.get("/user/playlist?uid=" + this.props.userId)
                .then(({ playlist }) => {
                    dispatch({
                        type: 'SET_PLAYLIST',
                        payload: {
                            playlist
                        }
                    })
                }).catch(() => {
                    console.log(222)
                })
        }
    },
    isShow() {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: "IS_SHOW",
                    payload: {
                        show: !this.props.show
                    }
                })
            }, 200);           
        }
    },
    isAdd() {//添加歌单开关
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: "IS_ADD",
                    payload: {
                        add: !this.props.add,
                        showBack: true,
                        manage:false
                    }
                })
            }, 200);  
        }
        
    },
    handdleSheet(statusType) {//提交歌单信息
        return async (dispatch) => {
            if (statusType) {
                let name = this.refs.sheetName.value;
                let marks = this.refs.checkpersonal.checked;
                var privacy = '';
                if (marks === true) {
                    privacy = "10";
                }
                await this.$axios.get("/playlist/create?name=" + name + "&privacy=" + privacy)
            }
            setTimeout(() => {
                dispatch({
                    type: "HANDDLE_SHEET",
                    payload: {
                        add: false,
                        showBack: false
                    }
                })
            }, 200);
            this.props.sheetDisjunctor.call(this);
        }
    },
    isManage() {//歌单管理开关
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: "IS_MANAGE",
                    payload: {
                        manage: true,
                        showBack: true
                    }
                })
            }, 200);   
        }
    },
    isSingle(sheetName,sheetId,e) {//点击管理单个列表
        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
        
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: "IS_SINGLE",
                    payload: {
                        sheetName,
                        sheetId,
                        single: true,
                        showBack: true
                    }
                })
            }, 200);
        }
    },
    closeAll() {//关闭出去展开列表的所有点击事件开关
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: 'CLOSE_ALL',
                    payload: {
                        showBack: false,//背景开关
                        add: false,//添加弹出框开关
                        manage: false,//歌单管理开关
                        single: false,//单个歌单管理开关
                        deleteEject:false
                    }
                })
            }, 200);
        }
    },
    deleteSheeteject(){//点击删除，弹出删除确认
        return(dispatch)=>{
            setTimeout(()=>{
                dispatch({
                    type:'DELETE_SHEETEJECT',
                    payload:{
                        deleteEject:true,
                        single:false
                    }
                })
            },200)
        }
    },
    deleteSheet(deleteType){//删除歌单确认
        return async (dispatch)=>{
            if(deleteType){
                await this.$axios.get("/playlist/delete?id="+this.props.sheetId,)
            }
            setTimeout(()=>{
                dispatch({
                    type:'DELETE_SHEET',
                    payload:{
                        deleteEject:false,
                        showBack:false
                    }
                })
            },200)
            this.props.sheetDisjunctor.call(this);
        }
    },
    openSheetlist(sheetId){
        return (dispatch) =>{
            dispatch({
                type:'OPEN_SHEETLIST',
                payload:{
                    toSinglelist:true,
                    sheetId:sheetId 
                }
            })
        }
    }
}