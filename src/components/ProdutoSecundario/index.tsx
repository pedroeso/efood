import { Card, Descricao, Titulo, ProductImage, Botao, Dois } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <ProductImage src={image} alt={title} />
    <Dois>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Dois>
  </Card>
)

export default Product
