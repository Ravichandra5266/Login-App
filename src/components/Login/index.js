import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button className="login-btn" type="button" onClick={login}>
      Login
    </button>
  )
}
export default Login
