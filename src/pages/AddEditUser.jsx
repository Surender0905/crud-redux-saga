import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { createUserStart } from '../redux/action';

const initialValue = {
  name: '',
  phone: '',
  email: '',
  address: '',
};

const AddEditUser = (props) => {
  const [inputs, setInputs] = useState(initialValue);
  const history = useNavigate();

  const { name, phone, email, address } = inputs;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('input');
    if (name && phone && email && address) {
      console.log('input', inputs);
      props.createUser(inputs);

      setTimeout(() => history('/'), 500);
      console.log('output');
    }

    setInputs(initialValue);
  };

  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-center text-3xl text-blue-400">Edit and Update</h1>
      </div>

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                required
                value={name}
                type="text"
                name="name"
                onChange={handleChange}
                className="form-control
          block
          w-full
          px-3
          py-1.5
          
         
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
         
        
           focus:border-blue-600 focus:outline-none"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                required
                type="text"
                value={phone}
                name="phone"
                onChange={handleChange}
                className="form-control
          block
          w-full
          px-3
          py-1.5
         
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
         
         
        focus:border-blue-600 focus:outline-none"
                id="phone"
                placeholder="Phone"
              />
            </div>
          </div>

          <div className="form-group mb-6">
            <input
              required
              value={email}
              type="email"
              onChange={handleChange}
              name="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
       
         focus:border-blue-600 focus:outline-none"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <input
              required
              type="text"
              value={address}
              onChange={handleChange}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
      
        focus:border-blue-600 focus:outline-none"
              id="address"
              name="address"
              placeholder="Address"
            />
          </div>

          <div className="flex gap-6">
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
     
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
    
      "
            >
              Add
            </button>

            <button
              type="button"
              onClick={() => history('/')}
              className="
      w-full
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
     
      hover:bg-red-400 hover:shadow-lg
      focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-400 active:shadow-lg
    
      "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  createUser: createUserStart,
};

const AddEditUserBox = connect(mapStateToProps, mapDispatchToProps);

export default AddEditUserBox(AddEditUser);
