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
import { Conteudo, Descricao } from '../ProdutoSecundario/styles'
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
  const [produtoSelecionado, setProdutoSelecionado] = useState<any | null>(null)

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
            {restaurantes.flatMap((restaurante) =>
              ((restaurante as any).cardapio ?? []).map((produto: any) => (
                <ProdutoSecundario
                  key={produto.id}
                  category={restaurante.tipo}
                  description={produto.descricao}
                  image={produto.imagem || restaurante.capa}
                  system=""
                  title={produto.nome}
                  onAddToCart={() => {
                    setProdutoSelecionado({ ...produto, restaurante })
                    setModalAberto(true)
                  }}
                />
              ))
            )}
          </List>
          {modalAberto && produtoSelecionado && (
            <Modal>
              <ModalContent className="container">
                <header>
                  <PizzaImg
                    src={
                      produtoSelecionado.imagem ||
                      produtoSelecionado.restaurante.capa
                    }
                    alt={produtoSelecionado.nome}
                  />
                  <Info>
                    <Texto>
                      <h4>{produtoSelecionado.nome}</h4>
                    </Texto>
                    <CloseButton
                      src={fechar}
                      alt="Ícone de fechar"
                      onClick={() => setModalAberto(false)}
                    />

                    <Conteudo>
                      {produtoSelecionado.descricao}
                      <br />
                      <br />
                      Serve: {produtoSelecionado.porcao}
                    </Conteudo>
                    <BotaoTerciario>
                      Adicionar ao carrinho - {produtoSelecionado.preco}
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
