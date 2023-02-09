import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { loadUsersStart } from '../redux/action';

const Home = (props) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log(users, 'users');

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);
  return (
    <>
      {!users && <h1>loading...</h1>}
      <Layout>Home</Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return;
};
const HomeConnect = connect(mapStateToProps, mapDispatchToProps);
export default HomeConnect(Home);
