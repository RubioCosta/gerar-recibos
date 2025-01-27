import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

// Styles
import { StyledDiv } from './styles'

// Components
import { Input, InputValue } from 'components/Input';
import { Button } from 'components/Button';

// Utils
import showToast from 'utils/toastConfig'
import { create } from 'services/firebase.rules'

export default function UserConfiguration({ emailUser }) {
  const [name, setName] = useState();
  const [school, setSchool] = useState();
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState('');

  async function handlerCreateUser(e) {
    e.preventDefault()
    if (!name) return showToast('warning', 'Campo nome é obrigatório!')
    if (!school) return showToast('warning', 'Campo escola é obrigatório!')
    if (!phone) return showToast('warning', 'Campo telefone é obrigatório!')
    if (!value) return showToast('warning', 'Campo valor é obrigatório!')
      
    try {
      if (!emailUser) throw new Error('Email não identificado!')
      const uuid = uuidv4(); 

      const dataUser = {
        name,
        school,
        phone,
        value,
        active: true
      }
      
      await create(`${emailUser}/users/${uuid}`, dataUser)

      showToast('success', `${name} cadastrado com sucesso!`)
      setName('')
      setSchool('')
      setPhone('')
      setValue('')
    } catch(error) {
      console.log(error)
      showToast('warning', 'Não foi possível efetuar o cadastro, tente mais tarde!')
    }
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
          type='text'
          placeholder='Telefone'
          onChange={(e) => setPhone(e.target.value)}
          mask='99 99999 9999'
        />
        <InputValue 
          id='value'
          name='value'
          type='text'
          placeholder='Valor'
          onChange={(e) => setValue(e.formattedValue)}
        />
        <Button 
          description='Cadastrar'
        />
      </form>
      <ToastContainer />
    </StyledDiv>
  )
}
