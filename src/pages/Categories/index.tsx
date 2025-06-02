import {
  FundoWrapper,
  FundoTexto,
  BackgroundImageWrapper,
  TituloCardapio,
  PequenoTexto,
  Tipo,
  Barra
} from '../../components/Header/styles'
import apresentacao from '../../assets/images/apresentacao.png'

import logo from '../../assets/images/logo.png'
import pizza from '../../assets/images/pizza.png'
import Game from '../../models/Game'
import ListaSecundaria from '../../components/ListaSecundaria'
import { useCart } from '../../components/CartContext'

const Header = () => {
  const { cartCount } = useCart()

  return (
    <Barra>
      <PequenoTexto>Restaurantes</PequenoTexto>
      <Tipo>
        <img src={logo} alt="EPLAY" />
      </Tipo>
      <PequenoTexto>{cartCount} produto(s) no carrinho</PequenoTexto>
    </Barra>
  )
}

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: pizza,
    titulodois: ['']
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: pizza,
    titulodois: ['']
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: pizza,
    titulodois: ['']
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: pizza,
    titulodois: ['']
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: pizza,
    titulodois: ['']
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: 'Windows',
    infos: ['Japonesa'],
    promo: ['Destaques da semana'],
    image: pizza,
    titulodois: ['']
  }
]

const Categories = () => (
  <>
    <Header />
    <FundoWrapper>
      <BackgroundImageWrapper>
        <img src={apresentacao} alt="Apresentação" />
      </BackgroundImageWrapper>
      <TituloCardapio>Italiana</TituloCardapio>
      <FundoTexto>La Dolce Vita Trattoria</FundoTexto>
    </FundoWrapper>
    <ListaSecundaria games={emBreve} title="" background="vanilla" />
  </>
)

export default Categories
