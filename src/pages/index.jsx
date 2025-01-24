import { StyledDiv } from 'styles/login'

// Components
import { Input } from 'components/Input'

export default function Login() {
  return (
    <StyledDiv>
      <video className='background' autoPlay loop muted>
        <source src='assets/video/background-login.mp4' type='video/mp4'/>
      </video>
      <div className='area-login'>
        <Input
          id='email'
          type='email'
          name='email'
          placeholder='E-mail'
        />
        <Input
          id='password'
          type='password'
          name='password'
          placeholder='Senha'
        />
      </div>
    </StyledDiv>
  )
}
