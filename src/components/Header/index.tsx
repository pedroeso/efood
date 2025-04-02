import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkDois } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
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

export default Header
