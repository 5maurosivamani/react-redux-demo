import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ usersData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <h1 style={{ color: "rgb(221, 76, 117)" }}>Users List</h1>
      {usersData.loading ? (
        <h1>Loading...</h1>
      ) : usersData.error ? (
        <h1>{usersData.error}</h1>
      ) : (
        usersData &&
        usersData.users &&
        usersData.users.map((user, id) => <p key={id}>{user.name}</p>)
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    usersData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
