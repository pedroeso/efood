import { Link, useLocation } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkDois, Fundo } from './styles'

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
              <img src={logo} alt="EPLAY" />
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
