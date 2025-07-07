import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

import fundo from '../../assets/images/fundo.png'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${cores.vanilla};
  display: flex;

  > .container {
    /* ajuste conforme seu layout */
    margin-left: 9.3vw;
    margin-right: 9.3vw;

    @media (min-width: 1025px) and (max-width: 1280px) {
      margin-left: 9.3vw;
      margin-right: 9.3vw;
    }

    @media (min-width: 1281px) {
      margin-left: 16.1vw;
      margin-right: 16.1vw;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 40px;
  row-gap: 32px;
  margin: 40px 0;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
`

export const ModalContent = styled.div`
  max-width: 1024px;
  min-height: 344px;
  position: relative;
  z-index: 1;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;

  img:first-child {
    width: 100%;
    display: block;
  }

  header {
    display: flex;
    position: static;
    gap: 24px;
    padding: 40px;
    align-items: flex-start;
    gap: 16px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin: 0;
    align-self: flex-start;
  }
`

export const PizzaImg = styled.img`
  max-width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Texto = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 16px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
