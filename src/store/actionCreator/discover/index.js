export default {
    getMusicList(){
        return async(dispatch)=>{
            
              const data= await this.$axios.get("/recommend/resource")
            //   console.log(data.recommend)
              dispatch({
                  type:"GET_MUSIC_LIST",
                  payload:{
                        data:data.recommend
                  }
              })
        }
    },
    getNewSong(){
        return async(dispatch)=>{
            
            const data= await this.$axios.get("/top/song?type=0")
            // console.log(data)
            dispatch({
                type:"GET_NEW_SONG",
                payload:{
                    data:data.data
                }
            })
      }

    },
    getMusic(id){
        return async(dispatch)=>{
            // console.log(id)
            const data=await this.$axios.get("/song/url?id="+id);
            // console.log(data)
            dispatch({
                type:"GET_MUSIC",
                payload:{
                    data:data.data
                }
            })
      }


    }




    
}