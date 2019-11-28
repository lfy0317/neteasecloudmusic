import React from 'react';
import { List, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
class Controlphone extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError: false,
            value: '',
        }
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入11位的手机号!');
        }
    }   
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    } 
    render(){
        return(
            <div className='phone'>
                <List>
                    <InputItem type='phone' placeholder='请输入手机号'
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}>手机号码：</InputItem>
                </List>
            </div>
        )
    }
}
export default createForm()(Controlphone)