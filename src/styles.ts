import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  preta: '#111111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  laranja: '#E66767',
  pastel: '#FFEBD9',
  vanilla: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

    body {
      background-color: ${cores.pastel};
      color: ${cores.branca};
      overflow-x: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
