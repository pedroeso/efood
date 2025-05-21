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
          {location.pathname === '/categories' ? (
            <Link to="/categories">
              <LinkItem>
                <PequenoTexto>123123</PequenoTexto>
              </LinkItem>
              <img src={logo} alt="EPLAY" />
              <LinkItem>
                <PequenoTexto>123123</PequenoTexto>
              </LinkItem>
            </Link>
          ) : (
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
          )}
          {location.pathname === '/categories' ? (
            <Links></Links>
          ) : (
            <Links>
              <LinkItem>
                <LinkDois>
                  Viva experiências gastronômicas no conforto da sua casa
                </LinkDois>
              </LinkItem>
            </Links>
          )}
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
