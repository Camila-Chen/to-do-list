import React, { PureComponent } from "react";
import '../scss/signup.scss';
class SignUp extends PureComponent {
    
    render() {
        return (
            <div className='signup-contain '>
                <div className=' flex-center-horizontally'>
                <img
                    src={require('../images/logo.png')}
                    alt="加载中..."
                    className="signup-logo"
                />
                </div>
                <div className=' flex-center-horizontally big-font'>注册</div>
            </div>
        );
    }
}

export default SignUp;