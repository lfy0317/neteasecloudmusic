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
                                    nickname:data.nickname,
                                    hasPassword:data.hasPassword,
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
    login(){
        const password = this.refs.password.state.value;
        let phone = this.props.phone;
        console.log(password)
        return(dispatch)=>{
            this.$axios.get('/login/cellphone?phone='+phone+'&password='+password)
            .then(data=>{
                console.log(data)
            })
            .catch(data=>{
                console.log(data)
            })
        }
    }
}