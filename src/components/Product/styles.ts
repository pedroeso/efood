import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${cores.laranja};
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${cores.laranja};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
`

export const Promo = styled.div`
  position: absolute;
  top: 16px;
  right: 80px;
  padding-right: 12px;
`

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`
