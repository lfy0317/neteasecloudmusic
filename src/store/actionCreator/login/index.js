export default {
    changeGoLogin(isAgree=false){
        return (dispatch)=>{
            dispatch({
                type: 'CHANGE_ISAGREE',
                payload: {
                    isAgree
                }
            })
        }
    },
    getCode(Toast){
        let phone = this.refs.phone.state.value;
        phone = phone.replace(/\s*/g,'');
        return (dispatch)=>{
            this.$axios.get('/captcha/sent?phone='+phone)
            .then(data=>{
                if(data.code === 200)
                    Toast.success('发送成功')
            }).catch(()=>Toast.info("请求失败"))
        }
    },
    goLogin(Toast){
        const code = this.refs.code.state.value/1;
        let phone = this.refs.phone.state.value;
        phone = phone.replace(/\s*/g,'')/1;
        if(code.toString().length !== 4) {
            return (dispatch)=>{
                Toast.info('验证码错误');
            }
        }else{
            return (dispatch)=>{
                this.$axios.get("/captcha/verify?phone="+phone+"&captcha="+code)
                .then( async data=>{
                    if(data.code === 200){
                        const data = await this.$axios.get('/cellphone/existence/check?phone='+phone);
                        if(data.code === 200){
                            dispatch({
                                type:'CHANGE_EXIST',
                                payload:{
                                    exist:data.exist,
                                    phone,
                                }
                            })
                        }
                    }else{
                        Toast.info(data.message);
                    }
                })
                .catch(()=>Toast.info("验证码错误"))
            }
        }
    },
    login(Toast){
        const password = this.refs.password.state.value;
        let phone = this.props.phone;
        return(dispatch)=>{
            this.$axios.get('/login/cellphone?phone='+phone+'&password='+password)
            .then(data=>{
                if(data.code === 200){
                    this.props.router.props.history.push('/')
                }else{Toast.info("账号密码错误")}
            })
            .catch(()=>{
                Toast.info("账号密码错误")
            })
        }
    },
    getLoginStatus(){
        return (dispatch)=>{
            this.$axios.get('/login/status')
            .then((data)=>{
                if(data.code === 200){
                    dispatch({
                        type:"CHANGE_LOGIN_STATUS",
                        payload:{
                            userId:data.profile.userId
                        }
                    });
                    this.$axios.get('/user/detail?uid='+data.profile.userId)
                    .then(data=>{
                        dispatch({
                            type:'CHANGE_USERINFO',
                            payload:{
                                userInfo:data
                            }
                        })
                    }).catch(()=>{
                        dispatch({
                            type:"CHANGE_LOGIN_STATUS",
                            payload:{
                                userId:null
                            }
                        })
                    })
                }
            }).catch(()=>{
                dispatch({
                    type:"CHANGE_LOGIN_STATUS",
                    payload:{
                        userId:null
                    }
                })
            })
        }
    },
    outLogin(){
        return (dispatch)=>{
            this.$axios.get('/logout').then(data=>{
                if(data.code === 200){
                    dispatch({
                        type:'OUT_LOGIN',
                        payload:{
                            isAgree:false,
                            phone:null,
                            exist:0,
                            userInfo:{},
                            userId:null
                        }
                    })
                }
            })
        }
    }
}