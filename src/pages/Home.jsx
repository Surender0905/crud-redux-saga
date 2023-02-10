import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { loadUsersStart } from '../redux/action';

const Home = (props) => {
  useEffect(() => {
    props.userLoadingStart();
  }, []);

  const handleDelete = (id) => {};
  return (
    <>
      <Layout>
        <div>
          {' '}
          {props.users?.loading ? (
            <h1 className="text-center text-3xl text-blue-400">Loading...</h1>
          ) : (
            <h1 className="text-center text-3xl text-blue-400">Home Page</h1>
          )}
        </div>

        <div className="relative overflow-x-auto shadow-md  px-12 py-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {props.users?.users.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b   hover:bg-gray-200 text-left"
                  >
                    <td scope="col" className="px-6 py-3">
                      {item.id}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {item.name}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {item.email}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {item.phone}
                    </td>
                    <td scope="col" className="px-6 py-3">
                      {item.address}
                    </td>
                    <td scope="col" className="px-6 py-3 flex gap-4">
                      <Link
                        className="text-blue-500 font-bold cursor-pointer"
                        to={`/edit/${item.id}`}
                      >
                        Edit
                      </Link>
                      <span
                        className="text-red-700 font-bold cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </span>
                      <Link
                        to={`/userinfo/${item.id}`}
                        className="text-yellow-500 font-bold cursor-pointer"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = {
  userLoadingStart: loadUsersStart,
};
const HomeConnect = connect(mapStateToProps, mapDispatchToProps);
export default HomeConnect(Home);
