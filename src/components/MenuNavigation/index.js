import { Outlet, Link } from "react-router"

// Styles
import { StyledDiv } from './styles'

export function MenuNavigation() {
  return (
    <StyledDiv>
      <header>
        <nav>
          <Link to='/home'>
            <i className="bi bi-file-earmark-arrow-down-fill"></i>
            Recibo
          </Link>
          <Link to='/home/check-payment'>
          <i className="bi bi-patch-check-fill"></i>
            Pagamento
          </Link>
          <Link to='/home/user-configuration'>
          <i class="bi bi-people-fill"></i>
            Cadastro
          </Link>
          <Link to='/home/dashboard'>
          <i className="bi bi-bar-chart-fill"></i>
            Grafico
          </Link>
        </nav>
      </header>
      <Outlet />
    </StyledDiv>
  )
}