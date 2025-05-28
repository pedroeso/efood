import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import sushi from '../../assets/images/sushi.png'
import macarao from '../../assets/images/macarao.png'
import {
  HeaderBar,
  Link,
  LinkDois,
  LinkItem,
  Links
} from '../../components/Header/styles'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <nav>
          <Link>
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

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: sushi,
    titulodois: ['4.9']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: ['Italiana'],
    image: macarao,
    titulodois: ['4.6']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: ['Italiana'],
    image: macarao,
    titulodois: ['4.6']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: ['Italiana'],
    image: macarao,
    titulodois: ['4.6']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: ['Italiana'],
    image: macarao,
    titulodois: ['4.6']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: ['Italiana'],
    image: macarao,
    titulodois: ['4.6']
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList games={emBreve} title="" background="vanilla" />
  </>
)

export default Home
