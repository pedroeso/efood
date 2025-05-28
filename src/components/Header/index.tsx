import { Link, useLocation } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  LinkItem,
  LinkDois,
  Cabecalho,
  PequenoTexto
} from './styles'

import logo from '../../assets/images/logo.png'
import apresentacao from '../../assets/images/apresentacao.png'

const Header = () => {
  const location = useLocation()

  return (
    <HeaderBar>
      <div>
        <nav>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>

          <Links>
            <LinkItem>
              <LinkDois>
                Viva experiências gastronômicas no conforto da sua casa
              </LinkDois>
            </LinkItem>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
