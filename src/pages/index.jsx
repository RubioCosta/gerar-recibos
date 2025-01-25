import { useState } from 'react'
import { ToastContainer } from 'react-toastify';

// Context
import { useAuthContext } from 'context/AuthContext'

// Utils
import showToast from 'utils/toastConfig'

// Styles
import { StyledDiv } from 'styles/index'

// Components
import { Input } from 'components/Input'
import { Button, LoginGoogle } from 'components/Button';

export default function Login() {
  const { test } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handlerLogin(e){
    e.preventDefault();
  }

  async function handlerLoginGoogle(){
    try {
      test()
    } catch(error) {
      console.log(error)
      showToast("warning", "Não foi possível fazer o login, tente mais tarde!")
    }
  }

  return (
    <StyledDiv>
      <video className='background' autoPlay loop muted>
        <source src='assets/video/background-login.mp4' type='video/mp4'/>
      </video>
      <div className='area-login'>
        <div className='text-login'>
          <p>Faça o seu login</p>
        </div>
        <form onSubmit={handlerLogin}>
          <Input
            id='email'
            type='email'
            name='email'
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            />
          <Input
            id='password'
            type='password'
            name='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            description='Entrar'
          />
        </form>
        <hr />
        <LoginGoogle 
          description='Entrar com o Google'
          action={handlerLoginGoogle}
        />
        <p className='footer-login' target='_blank'>Create By: <a href='https://www.linkedin.com/in/rubiocosta/'>Rubio Costa</a></p>
      </div>
      <ToastContainer />
    </StyledDiv>
  )
}
