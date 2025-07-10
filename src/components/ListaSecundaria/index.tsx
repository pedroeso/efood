import { useEffect, useState } from 'react'
import Game from '../../models/Game'
import ProdutoSecundario from '../ProdutoSecundario'

import {
  BotaoTerciario,
  CloseButton,
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
import { Botao } from '../ProdutoSecundario/styles'

type ModalState = {
  isVisible: boolean
  type: 'image' | string
  url: string
}

type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export type Props = {
  title: string

  background: 'vanilla'
  games: Game[]
}

const ListaSecundaria = ({ title, background, games }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
  }, [])

  return (
    <>
      <Container background={background}>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {restaurantes.map((restaurante) => (
              <ProdutoSecundario
                key={restaurante.id}
                category={restaurante.tipo}
                description={restaurante.descricao}
                image={restaurante.capa}
                system=""
                title={restaurante.titulo}
                onAddToCart={() => setModalAberto(true)}
              />
            ))}
          </List>
          {modalAberto && (
            <Modal>
              <ModalContent className="container">
                <header>
                  <PizzaImg src={pizza} alt="Pizza" />
                  <Info>
                    <Texto>
                      <h4>Pizza Marguerita</h4>
                    </Texto>
                    <CloseButton
                      src={fechar}
                      alt="Ícone de fechar"
                      onClick={() => setModalAberto(false)}
                    />

                    <Descricao>
                      A pizza Margherita é uma pizza clássica da culinária
                      italiana, reconhecida por sua simplicidade e sabor
                      inigualável. Ela é feita com uma base de massa fina e
                      crocante, coberta com molho de tomate fresco, queijo
                      mussarela de alta qualidade, manjericão fresco e azeite de
                      oliva extra-virgem. A combinação de sabores é perfeita,
                      com o molho de tomate suculento e ligeiramente ácido, o
                      queijo derretido e cremoso e as folhas de manjericão
                      frescas, que adicionam um toque de sabor herbáceo. É uma
                      pizza simples, mas deliciosa, que agrada a todos os
                      paladares e é uma ótima opção para qualquer ocasião
                      <br />
                      <br />
                      Serve: de 2 a 3 pessoas
                    </Descricao>
                    <BotaoTerciario>
                      Adicionar ao carrinho - R$ 60,90
                    </BotaoTerciario>
                  </Info>
                </header>
              </ModalContent>
              <div className="overlay" />
            </Modal>
          )}
        </div>
      </Container>
    </>
  )
}

export default ListaSecundaria
