import { Key } from 'react'
import Tag from '../Tag'
import icon from '../../assets/images/Page-1.svg'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  ProductImage,
  Promo,
  RightTitle,
  Icone,
  Botao,
  Dois
} from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  promo: string[]
  titulodois: string[]
}

const Product = ({
  title,
  description,
  infos,
  image,
  promo,
  titulodois
}: Props) => (
  <Card>
    <ProductImage src={image} alt={title} />
    <Dois>
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
      <RightTitle>
        {titulodois}
        <Icone src={icon} alt="Ícone" width="100%" className="icone" />
      </RightTitle>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Saiba mais</Botao>
    </Dois>
  </Card>
)

export default Product
