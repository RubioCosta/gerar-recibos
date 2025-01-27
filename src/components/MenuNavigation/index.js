import { Outlet, NavLink } from "react-router"

// Styles
import { StyledDiv } from './styles'

export function MenuNavigation() {
  return (
    <StyledDiv>
      <header>
        <nav>
          <NavLink 
            to='/home/generate-receipt'
            className={({ isActive }) => isActive ? 'active' : ''} 
          >
            <i className="bi bi-file-earmark-arrow-down-fill"></i>
            Recibo
          </NavLink>

          <NavLink 
            to='/home/check-payment'
            className={({ isActive }) => isActive ? 'active' : ''}  
          >
            <i className="bi bi-patch-check-fill"></i>
            Pagamento
          </NavLink>

          <NavLink 
            to='/home/user-configuration'
            className={({ isActive }) => isActive ? 'active' : ''} 
          >
            <i className="bi bi-people-fill"></i>
            Cadastro
          </NavLink>

          <NavLink 
            to='/home/dashboard'
            className={({ isActive }) => isActive ? 'active' : ''} 
          >
            <i className="bi bi-bar-chart-fill"></i>
            Grafico
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </StyledDiv>
  )
}
