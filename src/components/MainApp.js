import React, { Component } from "react";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import Addoption from "./Addoption";
import Counter from "./statedemo/Counter";
class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: props.newuserdata
    };
  }

  deleteAll = () => {
    this.setState(() => {
      return {
        userdata: []
      };
    });
  };

  addData = (data) => {
    if (!data) {
      alert("Enter Valid Value");
      return "Enter Valid Value";
    } else if (this.state.userdata.indexOf(data) > -1) {
      alert("User already exists");
    } else {
      this.setState((prevState) => {
        return {
          userdata: prevState.userdata.concat(data)
        };
      });
    }
  };

  deleteOne = (data) => {
    this.setState((prevState) => ({
      userdata: prevState.userdata.filter((option) => data != option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("data");
      const userdata = JSON.parse(json);
      if (userdata) {
        this.setState(() => ({ userdata }));
      }
    } catch (e) {}
  }
  componentDidUpdate() {
    const json = JSON.stringify(this.state.userdata);
    localStorage.setItem("data", json);
  }
  render() {
    const userdata = ["admin", "manager", "QA"];
    return (
      <div>
        <h3>welcome to mainapp</h3>
        {<Header mytitle="This is the header component" />}
        {/*} <Options data={this.state.userdata} deleteRecords={this.deleteAll} />*/}
        <Action hasData={this.state.userdata.length > 0} />
        <Addoption addusertomain={this.addData} />
        <Options
          data={this.state.userdata}
          deleteRecords={this.deleteAll}
          deleteOne={this.deleteOne}
        />
      </div>
    );
  }
}

export default MainApp;
MainApp.defaultProps = {
  newuserdata: []
};
