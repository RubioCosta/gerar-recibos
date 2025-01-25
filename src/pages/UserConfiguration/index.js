import { useState } from 'react'

// Styles
import { StyledDiv } from './styles'

// Components
import { Input } from 'components/Input';
import { Button } from 'components/Button';

export default function UserConfiguration() {
  const [name, setName] = useState();
  const [school, setSchool] = useState();
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState('');

  async function handlerCreateUser(e) {
    e.preventDeefault()
  }

  return (
    <StyledDiv>
      <h3>Cadastro</h3>
      <form onSubmit={handlerCreateUser}>
        <Input 
          id='name'
          name='name'
          type='text'
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          id='school'
          name='school'
          type='text'
          placeholder='Escola'
          onChange={(e) => setSchool(e.target.value)}
          />
        <Input 
          id='phone'
          name='phone'
          type='number'
          placeholder='Telefone'
          onChange={(e) => setPhone(e.target.value)}
          />
        <Input 
          id='value'
          name='value'
          type='number'
          placeholder='Valor'
          onChange={(e) => setValue(e.target.value)}
        />
        <Button 
          description='Cadastrar'
        />
      </form>
    </StyledDiv>
  )
}
