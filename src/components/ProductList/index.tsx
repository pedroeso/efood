import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string

  background: 'vanilla'
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            promo={game.promo || []}
            system={game.system}
            title={game.title}
            titulodois={game.titulodois}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
