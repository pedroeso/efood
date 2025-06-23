import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: 8px solid ${cores.laranja};
  height: 342px;
  width: 320px;
`
export const Dois = styled.div`
  background-color: ${cores.laranja};
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  display: block;
  padding-top: 8px;
  margin-bottom: 8px;
  color: ${cores.pastel};
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  color: ${cores.pastel};
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
  background-color: ${cores.pastel};
  color: ${cores.laranja};
  width: 304px;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
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
