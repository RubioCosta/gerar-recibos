import { useState } from 'react'

// Components
import { LoginSearch } from 'components/Button'
import { Input } from 'components/Input'

// Styles
import { StyledDiv } from './styles'

const data = [
  {
    id: '1',
    active: true,
    name: 'Rubio Costa',
    phone: '47 99185 1186',
    school: 'Albano Kanzler',
    value: '4.564,00'
  },
  {
    id: '2',
    active: false,
    name: 'Rubio Costa',
    phone: '47 99185 1186',
    school: 'Albano Kanzler',
    value: '4.564,00'
  }
]

export function ListEditUsers() {
  const [search, setSearch] = useState('')

  return (
    <StyledDiv>
      <form className='form-search'>
        <Input 
          id='search'
          name='search'
          value={search}
          placeholder='Digite aqui para buscar...'
          onChange={(e) => setSearch(e.target.value)}
          className='input'
        />
        <LoginSearch />
      </form>
      <div>
        <ul>
          {data.map(user => (
            <li className='item'>
              <div className='item-data'>
                <span>{user.name}</span>
                <span>{user.school}</span>
                <span>{user.value}</span>
              </div>
              <div className='item-whats'>
                A<i class="bi bi-whatsapp"></i>
                <span>{user.phone}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledDiv>
  )
}