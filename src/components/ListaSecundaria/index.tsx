import { useState } from 'react'
import Game from '../../models/Game'
import ProdutoSecundario from '../ProdutoSecundario'

import {
  Container,
  Info,
  List,
  Modal,
  ModalContent,
  PizzaImg,
  Texto
} from './styles'

import fundo from '../../assets/images/fundo.png'
import fechar from '../../assets/images/fechar.png'
import pizza from '../../assets/images/pizzadois.png'
import { Descricao } from '../ProdutoSecundario/styles'

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
                <PizzaImg src={pizza} alt="Pizza" />
                <Info>
                  <Texto>
                    <h4>Pizza Marguerita</h4>
                    <img src={fechar} alt="Ícone de fechar" />
                  </Texto>

                  <Descricao>
                    A pizza Margherita é uma pizza clássica da culinária
                    italiana, reconhecida por sua simplicidade e sabor
                    inigualável. Ela é feita com uma base de massa fina e
                    crocante, coberta com molho de tomate fresco, queijo
                    mussarela de alta qualidade, manjericão fresco e azeite de
                    oliva extra-virgem. A combinação de sabores é perfeita, com
                    o molho de tomate suculento e ligeiramente ácido, o queijo
                    derretido e cremoso e as folhas de manjericão frescas, que
                    adicionam um toque de sabor herbáceo. É uma pizza simples,
                    mas deliciosa, que agrada a todos os paladares e é uma ótima
                    opção para qualquer ocasião
                    <br />
                    <br />
                    Serve: de 2 a 3 pessoas
                  </Descricao>
                </Info>
              </header>
            </ModalContent>
            <div className="overlay" />
          </Modal>
        </div>
      </Container>
    </>
  )
}

export default ListaSecundaria
