import { useState } from 'react'
import Game from '../../models/Game'
import ProdutoSecundario from '../ProdutoSecundario'

import { Container, List, Modal, ModalContent } from './styles'

import fundo from '../../assets/images/fundo.png'
import fechar from '../../assets/images/fechar.png'

type ModalState = {
  isVisible: boolean
  type: 'image' | string
  url: string
}

export type Props = {
  title: string

  background: 'vanilla'
  games: Game[]
}

const ListaSecundaria = ({ title, background, games }: Props) => {
  // const [modal, setModal] = useState<ModalState>({
  //   isVisible: false,
  //   type: 'image',
  //   url: ''
  // })
  return (
    <>
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
          <Modal>
            <ModalContent className="container">
              <header>
                <h4>Pizza Marguerita</h4>
                <img src={fechar} alt="Ícone de fechar" />
              </header>
              <img src={fundo} alt="Fundo" />
            </ModalContent>
            <div className="overlay" />
          </Modal>
        </div>
      </Container>
    </>
  )
}

export default ListaSecundaria
