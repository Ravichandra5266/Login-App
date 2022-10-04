import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const text = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{text}</h1>
}
export default Message
