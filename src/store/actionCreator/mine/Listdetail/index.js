export default {
    getSonglist() {//添加歌曲
        return (dispatch) => {
            this.$axios.get("/playlist/detail?id=" + this.props.sheetId)
                .then(({ playlist }) => {
                    dispatch({
                        type: 'GET_SONGLIST',
                        payload: {
                            playlist,
                            tracks:playlist.tracks,
                            
                            
                        }
                    })
                }).catch(() => {
                    console.log(222)
            })
        }
    },
}