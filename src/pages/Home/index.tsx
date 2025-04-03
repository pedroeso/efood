import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import sushi from '../../assets/images/sushi.png'
import macarao from '../../assets/images/macarao.png'

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    system: 'Windows',
    infos: ['Japonesa'],
    image: sushi
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: macarao
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: macarao
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: macarao
  }
]

const Home = () => (
  <>
    <ProductList games={emBreve} title="" background="vanilla" />
  </>
)

export default Home
