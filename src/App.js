import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./Redux/Action/users";
import { getUser } from "./Redux/Action/user";
import * as ReactBootstrap from 'react-bootstrap'
import CreateButton from './component/createButtons'
import ShowUserInfo from './component/showUserInfo'

import './asset/styles.css'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  const { data } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.user);
  const {data:userData} = user;
  const { isLoading } = useSelector((state) => state.user);
  
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    dispatch(getUser(evt.nativeEvent.submitter.value))
  }
  let count = 0;
  return (
    <div>
      <div className="card-container">
        <div className="card">
          {isLoading ? (
            <div className="spinner">
              <ReactBootstrap.Spinner animation="border" />
            </div>
          ) : userData ? (
            <ShowUserInfo userData={userData} />
          ) : null}
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        {data ? (
          <div className="buttons">
            {data.map((user) => {
              count++;
              return <CreateButton key={user.id} id={user.id} count={count} />;
            })}
          </div>
        ) : (
          <div className="spinner">
            <ReactBootstrap.Spinner animation="border" />
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
