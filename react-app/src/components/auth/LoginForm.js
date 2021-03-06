import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (e) => {
    e.preventDefault();

    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-area'>
      <div className='login-form'>
        <h4>Login</h4>
        <form onSubmit={onLogin}>
          <div className='errors'>
            {errors.map((error, ind) => (
              <div key={ind}>
                {error.includes(': ') ?
                error.split(": ")[1]
                : error
                }
              </div>
            ))}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div>
            <button className='login-btn' type='submit'>Login</button>
            <button className='demo-btn' onClick={demoLogin}>Login As Demo User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
