import styled from 'styled-components'
import { cores } from '../../styles'
import vectorImage from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`
  background-color: transparent;
  background-image: url(${vectorImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 36px;
    margin-right: 280px;
    margin-left: 280px;
    align-items: center;
    text-align: center;
    display: block;
    margin-top: 40px;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Barra = styled.header`
  background-color: transparent;
  background-image: url(${vectorImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 171px;
  padding-right: 171px;
  padding-bottom: 65px;
  padding-top: 40px;
`

export const FundoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`
export const TituloCardapio = styled.h2`
  position: absolute;
  color: #ffffff; // ou outra cor que contraste com a imagem
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
  padding-bottom: 32px;
  padding-left: 170px;
`

export const FundoTexto = styled.h3`
  position: absolute;
  color: #ffffff; // ou outra cor que contraste com a imagem
  font-size: 32px;
  font-weight: 900;
  top: 210px;
  padding-bottom: 32px;
  padding-left: 170px;
`

export const PequenoTexto = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
`

export const BackgroundImage = styled.img`
  width: 100px;
`

export const Cabecalho = styled.li`
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const BackgroundImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000;
    opacity: 0.5;
    pointer-events: none;
  }
`

export const Link = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Tipo = styled.li`
  display: flex;
  align-items: center;
  width: 125px;
  padding-left: 40px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
`

export const LinkItem = styled.li``

export const LinkDois = styled.li`
  color: ${cores.laranja};
  text-decoration: none;
  font-weight: bold;
  font-size: 36px;
  margin-right: 414px;
  margin-left: 414px;
  align-items: center;
  text-align: center;
  display: block;
  margin-top: 138px;
  margin-bottom: 40px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
