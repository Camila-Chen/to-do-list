import React, { PureComponent } from "react";
import '../scss/form.scss';
class SignUp extends PureComponent {

    render() {
        return (
            <div className='signup-contain '>
                <div className=' center-horizontally img-contain'>
                    <img
                        src={require('../images/logo.png')}
                        alt="加载中..."
                        className="signup-logo"
                    />
                </div>
                <div className=' center-horizontally title-font-size register-title brown-text-color'>注册</div>
                <div className='input-contain'>
                    <form className='vertical-arrangement'>
                    <input 
                    placeholder="昵称"
                    className='input-box'
                    />
                    <input 
                    placeholder="注册邮箱"
                    className='input-box'
                    
                    />
                    <input 
                    placeholder="注册密码"
                    className='input-box'
                    
                    />

                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;