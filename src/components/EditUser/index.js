import { useState, useEffect, act } from 'react'

// Styles
import { StyledDiv } from './styles'

// Components
import { Input, InputValue, InputSwitch } from 'components/Input';
import { Button } from 'components/Button';

export function EditUser({ user, handlerHiddenModalEditUser, handlerUpdateUser }) {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [phone, setPhone] = useState('')
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false)

  useEffect(() => {
    setName(user.name)
    setSchool(user.school)
    setPhone(user.phone)
    setValue(user.value)
    setActive(user.active)
  }, [user])

  return (
    <StyledDiv>
      <h3>Atualizar Dados</h3>
      <form onSubmit={(e) => handlerUpdateUser(e, { ...user, name, school, phone, value, active })}>
        <Input 
          id='name'
          value={name}
          name='name'
          type='text'
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          id='school'
          value={school}
          name='school'
          type='text'
          placeholder='Escola'
          onChange={(e) => setSchool(e.target.value)}
          />
        <Input 
          id='phone'
          name='phone'
          value={phone}
          type='text'
          placeholder='Telefone'
          onChange={(e) => setPhone(e.target.value)}
          mask='99 99999 9999'
        />
        <InputValue 
          id='value'
          name='value'
          value={value}
          type='text'
          placeholder='Valor'
          onChange={(e) => setValue(e.formattedValue)}
        />
        <InputSwitch 
          placeholder={`Usuário ${active ? 'Ativo' : 'Inativo'}`}
          onChange={(e) => setActive(e)}
          value={active}
        />
        <Button 
          description='Salvar'
        />
      </form>
      <Button
        action={handlerHiddenModalEditUser}
        description='Cancelar'
      />
    </StyledDiv>
  )
}
