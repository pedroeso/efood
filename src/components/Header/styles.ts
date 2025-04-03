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
export const BackgroundImage = styled.img`
  width: 100px;
`

export const Link = styled.li`
  aling-items: center;
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
