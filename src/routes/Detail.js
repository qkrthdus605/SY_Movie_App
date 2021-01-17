import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const{ location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return(
                <div className="detail">
                    <img src={location.state.poster} className="de_image" />
                    <span className="de_title">{location.state.title}</span>
                    <span className="de_year">{location.state.year}</span>
                    <span className="de_genres">{location.state.genres}</span>
                    <span className="de_summary">{location.state.summary}</span>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default Detail;