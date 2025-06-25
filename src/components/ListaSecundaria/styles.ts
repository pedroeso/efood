import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

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
  z-index: 1;
  display: none;


  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 24px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
