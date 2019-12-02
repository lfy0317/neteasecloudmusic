import React,{Fragment} from 'react';
import '../../assets/css/mine/songsheet.scss';

class Songsheet extends React.Component{
    
    constructor(){
        super();
        this.state ={
          sheetName:"",
          uid:null,
          playlist:[],
          isShow:false,
          isAdd:false,
          isManage:false,
          isSingle:false
          
        }
      }
    render(){
        return(
            <div className="Songsheet">
                <div className="addModal" style={{display:this.state.isAdd?"block":"none"}}></div>
                {/* 添加歌单 */}
                <div className="addModal_con" style={{display:this.state.isAdd?"block":"none"}}>
                    <h3>新建歌单</h3>
                    <input type="text" defaultValue="请输入歌单标题" className="sheetName"/>
                    <div className="hidesheet">
                        <input type="checkbox"/>
                        <span>设为隐私歌单</span>
                    </div>
                    <div className="choosesubmit">
                        <input type="button" defaultValue="取消" onClick={this.isAdd.bind(this)}/>
                        <input type="button" defaultValue="提交"onClick={this.handdleSheet.bind(this)}/>
                    </div>
                </div>
                {/* 歌单管理 */}
                <div className="sheetmanage" style={{display:this.state.isManage?"block":"none"}}>
                    <div className="closemanage" onClick={this.isManage.bind(this)}></div>
                </div>
                <div className="sheetmanage_con" style={{bottom:this.state.isManage?"-0.7rem":"-3rem"}}>
                    <h3>我创建的歌单(2)</h3>
                    <dl className="manage_dl" onClick={this.isAddTwo.bind(this)}>
                        <dt><i className="iconfont icon-jia-copy"></i></dt>
                        <dd>创建新歌单</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-mulu"></i></dt>
                        <dd>歌单管理</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-jietu"></i></dt>
                        <dd>截图导入歌单</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-shuaxin1"></i></dt>
                        <dd>恢复歌单</dd>
                    </dl>
                </div>
                {/* 创建歌单 */}
                <div className="creatSheet">
                    <div className="cereat_left" onClick = {this.isShow.bind(this)}>
                        <i className="iconfont icon-zuoyou1 openchange"></i>
                        <p>创建的歌单</p>
                        <span>({this.state.playlist.length})</span>
                    </div>
                    <div className="ereat_right">
                        <i className="iconfont icon-jian addSheet" onClick={this.isAdd.bind(this)}></i>
                        <i className="iconfont icon-dian handdleSheet" onClick={this.isManage.bind(this)}></i>
                    </div>
                </div>
                <div className="sheetList"style={{display:this.state.isShow?"block":"none"}}>
                    {this.state.playlist.map((v,index)=>(
                        <Fragment key={index}> 
                            <dl className="sheetList_dl">
                                <dt>
                                    <img src={v.coverImgUrl} />
                                </dt>
                                <dd>
                                    <div className="sheetSingle_left">
                                        <p>{v.name}</p>
                                        <span>{v.playCount}首</span>
                                    </div>
                                    <div className="sheetSingle_right">
                                        <i className="iconfont icon-dian" onClick={this.isSingle.bind(this,v.name)}></i>
                                    </div>
                                </dd>
                            </dl>
                        </Fragment>
                    ))} 
                </div> 
                {/* 单个歌单管理 */}
                <div className="singlemanage" style={{display:this.state.isSingle?"block":"none"}}>
                    <div className="closesingle" onClick={this.isSingle.bind(this,"")}></div>
                </div>
                <div className="singlemanage_con" style={{bottom:this.state.isSingle?"-0.7rem":"-3rem"}}>
                    <h3>歌单:<span>{this.state.sheetName}</span></h3>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-jia-copy"></i></dt>
                        <dd>下载</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-mulu"></i></dt>
                        <dd>分享</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-jietu"></i></dt>
                        <dd>编辑歌单信息</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-shuaxin1"></i></dt>
                        <dd>删除</dd>
                    </dl>
                </div>
            </div>
        )
    }
    getStatus(){//获取用户信息
        this.$axios.get("/login/status").then(({profile})=>{
            const uid = profile.userId;
            this.setState({
                uid 
            })
            this.sheetDisjunctor();
        }).catch(()=>{
            this.setState({
                uid:null
            })
        })
    }
    sheetDisjunctor(){//歌单渲染
        this.$axios.get("/user/playlist?uid="+this.state.uid).then(({playlist})=>{
            this.setState({
                playlist
            })

        })
    }
    isShow(){//歌单显示隐藏
        setTimeout(() => {
            const openchange = document.querySelector(".openchange");
            openchange.style.transition="0.2s";
            if(this.state.isShow === true){
                openchange.style.transform = "rotate(0deg)";
            }else{
                openchange.style.transform = "rotate(90deg)"
            }
            this.setState({
                isShow:!this.state.isShow
            })
        },200);
    }
    isAdd(){//添加歌单开关
        setTimeout(() => {
            this.setState({
                isAdd:!this.state.isAdd
            })
        },200);
    }
    isAddTwo(){//添加歌单开关
        setTimeout(() => {
            this.setState({
                isAdd:!this.state.isAdd,
                isManage:false
            })
        },200);
    }
    isManage(){ //歌单管理开关 
        setTimeout(() => {
            this.setState({
                isManage:!this.state.isManage,
            })
        },200);
    }
    isSingle(sheetName){  //single歌单管理开关
        setTimeout(() => {
            this.setState({
                isSingle:!this.state.isSingle,
                sheetName
            })
        },200);
    }
    handdleSheet(){//歌单添加请求
        const name = document.querySelector(".sheetName").value;
        const marks = document.querySelector("input[type='checkBox']").checked;
        var privacy='';
        if(marks == true){
            privacy = "10";
        }
        this.$axios.get("/playlist/create?name="+name+"&privacy="+privacy).then(({playlist})=>{
            this.setState({
                isAdd:false
            })
            this.sheetDisjunctor();
        })
    }
    componentDidMount() {
        this.getStatus();  
    }
        
}
export default Songsheet;

