import Game from '../../models/Game'
import ProdutoSecundario from '../ProdutoSecundario'

import { Container, List } from './styles'

export type Props = {
  title: string

  background: 'vanilla'
  games: Game[]
}

const ListaSecundaria = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <ProdutoSecundario
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaSecundaria
