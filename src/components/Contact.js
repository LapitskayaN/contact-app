import "./Contact.css";
import React from "react";

class Contact extends React.Component {
  render() {
    return (
    <div className="Contact">
    <img className="avatar" src={this.props.avatar}></img>
    <div>
      <div className="name">{this.props.name}</div>
      <div className="status">
        <span className={this.props.isOnline ? "status-online" : "status-offline"}>
          {" "}
        </span>
        <p className="status-text">{this.props.isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  </div>    
    );
  }
}

export default Contact;
