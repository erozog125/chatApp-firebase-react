import './RegisterPage.css';

export const RegisterPage = () => {
  return (
    <div className="container-register">
      <hr />
      <form action="" className="frm-register">
        <h2>Register User</h2>      
        <input type="text" placeholder='name' />
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <input type="text" placeholder='confirm password' />
        <button type='submit'>Register</button>
        <a href="#">I have an account</a>
      </form>
    </div>
  )
}
