import Input from "./Input"
import Button from "./Button"

const Hero = () => {

  const signup = () => {
    alert("signing up...")
  }
  const login = () => {
    alert("loging in...")
  }

  return (
    <div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem ex pariatur, optio tenetur ut doloremque delectus alias? Pariatur recusandae earum fugit distinctio voluptas? Possimus magni consectetur doloremque veritatis modi.
      </h3>
      {/* input component */}
      <Input />
      {/* button component */}
      <Button text="James" onClick={signup} />
      <Button text="ola" onClick={login} />
      <Button />
    </div>
  )
}

export default Hero