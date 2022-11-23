import React from "react";

import { connect } from "react-redux";
  
//Not needed after creating new action creator to call only specific users
// import { fetchUser } from "../actions";

class User extends React.Component {

  //Not needed after creating new action creator to call only specific users
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }
  render() {
    //can take the logic out to mapStateToProps too
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    const { user } = this.props;

    if (!user) return null;

    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(User);
