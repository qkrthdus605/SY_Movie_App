import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import "./Login.css";
 
class Login extends React.Component{
    constructor(){
        super();

        this.state = {
            userName: "",
            userPW: "",
            idChecked: false,
            pwChecked: false,
            btnColor: "#b2dffc",
        };
    }

    //메인화면 이동
    goToHome = () => {
        console.log(this.props);
        this.props.history.push("/");
    };

    //id값 체크
    idInputCheck = (event) => {
        this.setState({ userName: event.target.value });
        if(event.target.value.includes("@")){
            this.setState({ idChecked: true });
        }else{
            this.setState({ idChecked: false });
        }
    };

    //pw값 체크
    pwInputChecked = (event) => {
        this.setState({ userPW: event.target.value });
        if(event.target.value.length >= 5){
            this.setState({ userName: event.target.value, pwChecked: true },
                () => this.btnColorChange()
            );
        }else{
            this.setState({ pwChecked: false }, () => this.btnColorChange());
        }
    };

    //버튼 변환
    btnColorChange = () => {
        if(this.state.idChecked && this.state.pwChecked){
            this.setState({ btnColor: "#83ccfb" });
        }else{
            this.setState({ btnColor: "#b2dffc" });
        }
    };

    //버튼 클릭
    btnClick = () => {
        console.log("사용자ID: ", this.state.userName);
        console.log("사용자PW: ", this.state.userPW);
        this.goToHome();
    }
    render(){
        return(
            <div className="login">
                <div className="login-form">
                    <input
                        className="user-ID"
                        type="text"
                        placeholder="아이디를 입력하세요"
                        onChange={this.idInputCheck} 
                    />
                    <input
                        className="user-PW"
                        type="text"
                        placeholder="password를 입력하세요"
                        onChange={this.pwInputChecked}
                    />
                    <button
                        className="login-btn"
                        type="button"
                        style={{ backgroundColor : this.state.btnColor }}
                        onClick={this.btnClick}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);