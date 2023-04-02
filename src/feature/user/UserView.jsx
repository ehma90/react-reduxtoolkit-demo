import React, { useEffect } from "react";
import { fetchUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <h2>List of component : </h2>
      {user.loading && <div>loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default UserView;
