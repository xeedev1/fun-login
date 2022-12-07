import React,{useState} from 'react';

const Form = ({setLoggedIn, loggedIn}) => {
    const [user, setUser] = useState('User');

    const handleSubmit = e => {
        e.preventDefault();
        setLoggedIn(!loggedIn);
    }
    const handleChange = e =>{
        setUser(e.target.value);
    }
  return (
    <section className='section'>
        <form className='form'>
    <h2 className='greetings'>Hi {user}</h2>
      <label className='label' htmlFor="name">Name</label>
      <input className='input' type="text" id="name" onChange={handleChange} />
      <label className='label' htmlFor="password">Password</label>
      <input className='input' type="password" id="password" />
      <button className='btn' type="submit" onClick={handleSubmit}>Submit</button>
   </form>
    </section>
  )
}

export default Form