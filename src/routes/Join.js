//회원가입
import React from 'react';
import "./Join.css";

class Join extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            //회원가입에 필요한 정보
            email: "",
            nickname: "",
            password: "",
            re_pw: "",
            email_check: "",
            nickname_check: "",
            pw_check: ""
        };
    }
    //이메일 입력창 핸들링
    handleEmail = e => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        });
    };
    //이메일 중복검사
    check_Email = e => {
        e.preventDefault();

        //중복인지 아닌지를 검사하는 함수

    };

    //닉네임 입력창 핸들링
    handleNickname = e => {
        e.preventDefault();
        this.setState({
            nickname: e.target.value
        });
    };
    //닉네임 중복검사
    check_Nickname = e => {
        e.preventDefault();

        //중복인지 아닌지 검사하는 함수
    };

    //비밀번호 입력창 핸들링
    handlePW = e => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    };
    //비밀번호 확인 입력창 핸들링
    handleRe_PW = e => {
        e.preventDefault();
        this.setState({
            re_pw: e.target.value
        });
    };
    //두 개의 비밀번호가 일치하는지 확인
    check_PW = e => {
        e.preventDefault();

        //검사에 사용되는 함수
    };

    render(){
        return(
            <div>
                <h1>SignUp</h1>
                <br />
                <div>
                    <input 
                        className="input_email"
                        type="text"
                        placeholder="이메일을 입력하세요"
                    />
                    <input 
                        className="input_ninkname"
                        type="text"
                        placeholder="닉네임을 입력하세요"
                    />
                    <input 
                        className="input_pw"
                        type="text"
                        placeholder="비밀번호를 입력하세요"
                    />
                    <input 
                        className="input_Re_pw"
                        type="text"
                        placeholder="비밀번호를 다시 한 번 입력하세요"
                    />
                </div>
            </div>
        );
    }
}

export default Join;