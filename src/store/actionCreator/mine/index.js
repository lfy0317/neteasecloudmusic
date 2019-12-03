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
            dispatch({
                type: "IS_SHOW",
                payload: {
                    show: !this.props.show
                }
            })
        }
    },
    isAdd() {//添加歌单开关
        return (dispatch) => {
            dispatch({
                type: "IS_ADD",
                payload: {
                    add: !this.props.add,
                    showBack: true,
                    manage:false
                }
            })
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
            dispatch({
                type: "HANDDLE_SHEET",
                payload: {
                    add: false,
                    showBack: false
                }
            })
            this.props.sheetDisjunctor.call(this);
        }
    },
    isManage() {//歌单管理开关
        return (dispatch) => {
            dispatch({
                type: "IS_MANAGE",
                payload: {
                    manage: true,
                    showBack: true
                }
            })
        }
    },
    isSingle(sheetName) {
        return (dispatch) => {
            dispatch({
                type: "IS_SINGLE",
                payload: {
                    single: true,
                    showBack: true
                }
            })
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
                    }
                })
            }, 200);
        }
    }

}