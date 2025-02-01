import { useState, useEffect } from 'react'
import { Link } from "react-router"
import { ToastContainer } from 'react-toastify';

// Components
import { LoginSearch } from 'components/Button'
import { Input } from 'components/Input'
import { EditUser } from 'components/EditUser'

// Styles
import { StyledDiv } from './styles'

// Utils
import showToast from 'utils/toastConfig'
import { getAll, edit } from 'services/firebase.rules'

export function ListEditUsers({emailUser}) {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [dataUserEdit, setDataUserEdit] = useState({})
  const [showModalEditUser, setShowModalEditUser] = useState(false)

  const filteredUsers = data.filter(user =>
    user.name
    && (
      user.name.toLowerCase().includes(search ? search.toLowerCase() : '') ||
      user.school.toLowerCase().includes(search ? search.toLowerCase() : '') ||
      user.value.includes(search ? search.toLowerCase() : '')
    )
  ).sort((a, b) => b.active - a.active);

  useEffect(() => {
    handlerListUsers();
  }, [])

  function handlerShowModalEditUser(user) {
    setDataUserEdit(user);
    setShowModalEditUser(true)
  }

  function handlerHiddenModalEditUser() {
    setDataUserEdit({});
    setShowModalEditUser(false)
  }

  async function handlerListUsers() {
    try {
      const response = await getAll(`${emailUser}/users/`)
      setData(response)
    } catch(error) {
      showToast('warning','Não foi possível listar os usuários cadastrados!')
    }
  }

  async function handlerUpdateUser(e, user) {
    e.preventDefault()

    const { name, school, phone, value, id, active } = user;

    if (!id) return showToast('warning', 'Todos os campos são obrigatótios!')
    if (!name) return showToast('warning', 'Campo nome é obrigatório!')
    if (!school) return showToast('warning', 'Campo escola é obrigatório!')
    if (!phone) return showToast('warning', 'Campo telefone é obrigatório!')
    if (!value) return showToast('warning', 'Campo valor é obrigatório!')
      
    try {
      if (!emailUser) throw new Error('Email não identificado!')

      const dataUser = {
        name,
        school,
        phone,
        value,
        active
      }
      
      await edit(`${emailUser}/users/${id}`, dataUser)

      setData((prevUsers) => 
        prevUsers.map((u) => 
          u.id === user.id ? { ...u, ...user } : u
        )
      );

      setDataUserEdit({});
      setShowModalEditUser(false)

    } catch(error) {
      console.log(error)
      showToast('warning', 'Não foi possível atualizar o cadastro, tente mais tarde!')
    }
  }

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
      <div className='list'>
        <ul>
          {filteredUsers.map(user => (
            <li className={`item ${user.active ? 'active' : 'inactive'}`}>
              <div className='item-data' onClick={() => handlerShowModalEditUser(user)}>
                <span className='name'>{user.name}</span>
                <span className='school'>{user.school}</span>
                <hr />
                <span className='value'>R$ {user.value}</span>
              </div>
              <div className='item-whats'>
                <Link to={`https://wa.me/${user.phone.replace(/ /g, '')}`}>
                  <i class="bi bi-whatsapp"></i>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showModalEditUser && <EditUser handlerUpdateUser={handlerUpdateUser} user={dataUserEdit} handlerHiddenModalEditUser={handlerHiddenModalEditUser} />}
      <ToastContainer />
    </StyledDiv>
  )
}