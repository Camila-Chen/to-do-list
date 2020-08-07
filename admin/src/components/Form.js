import React, { PureComponent } from "react";
import '../scss/form.scss';
class SignUp extends PureComponent {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleClick = async e => {
        // e.preventDefault();
        if (this.state.name == '') {
            alert('请填写昵称')
        }
    }
    handleChange = (e, name) => {
        console.log(e.target.value, name)
        if (name == 'name') {
            this.setState({
                name: e.target.value
            })
        } else if (name = 'email') {
            this.setState({
                email: e.target.value
            })
        } else if (name = 'password') {
            this.setState({
                password: e.target.value
            })
        }

    }
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
                    <form className='vertical-arrangement' onSubmit={this.handleClick} autoComplete="off">
                        <input
                            placeholder="昵称"
                            className='input-box'
                            // required="required"
                            pattern="^\d{11}$"
                            oninvalid="setCustomValidity('不能为空aaa')" 
                            // οninput="setCustomValidity('')"
                            onChange={(e) => this.handleChange(e, 'name')}
                            value={this.state.name}
                        />
                        <input
                            placeholder="注册邮箱"
                            className='input-box'
                            required="required"
                            onChange={(e) => this.handleChange(e, 'email')}
                            value={this.state.email}
                        />
                        <input
                            placeholder="注册密码"
                            className='input-box'
                            required="required"
                            onChange={(e) => this.handleChange(e, 'password')}
                            value={this.state.password}
                        />
                        <button className='form-button text-font-size'>
                            注册
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;