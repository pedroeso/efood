import { Card, Descricao, Titulo, ProductImage, Botao, Dois } from './styles'
import { useCart } from '../CartContext'

type Props = {
  title: string
  category: string
  system: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => {
  const { addToCart } = useCart()

  return (
    <Card>
      <ProductImage src={image} alt={title} />
      <Dois>
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Botao onClick={addToCart}>Adicionar ao carrinho</Botao>
      </Dois>
    </Card>
  )
}

export default Product
