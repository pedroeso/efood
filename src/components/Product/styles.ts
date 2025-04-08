import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
`
export const Dois = styled.div`
  background-color: ${cores.branca};
  border-right: 1px solid ${cores.laranja};
  border-bottom: 1px solid ${cores.laranja};
  border-left: 1px solid ${cores.laranja};
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
  padding-top: 8px;
  margin-bottom: 8px;
  margin-left: 7px;
  color: ${cores.laranja};
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
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

export const Botao = styled.button`
  background-color: ${cores.laranja};
  color: ${cores.pastel};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
`

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const RightTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.laranja};
  position: absolute;
  top: 223px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Icone = styled.img``
