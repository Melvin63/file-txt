import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Melvin",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Melvin-Jones10");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location } = this.setState.userInfo;

    return (
      <div className="about">
        {" "}
        <img
          src={this.state.userInfo.avatar_url}
          alt="github profile"
          width={100}
          height={50}
        />
        <h1>name :{" " + this.state.userInfo.name}</h1>
      </div>
    );
  }
}

export default UserClass;
