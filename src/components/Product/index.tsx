import { Key } from 'react'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, ProductImage, Promo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  promo: string[]
}

const Product = ({ title, description, infos, image, promo }: Props) => (
  <Card>
    <ProductImage src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Promo>
      {promo.map((promo) => (
        <Tag key={promo}>{promo}</Tag>
      ))}
    </Promo>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
