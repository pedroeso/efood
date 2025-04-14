import { Container, Figura, Icones, Redes, Paragrafo } from './styles'

import logo from '../../assets/images/logo.png'

import insta from '../../assets/images/instagram.svg'

import face from '../../assets/images/face.svg'

import twitter from '../../assets/images/x.png'

const Footer = () => (
  <Container>
    <Figura>
      <img src={logo} alt="EPLAY" />
    </Figura>
    <Redes>
      <Icones>
        <img src={insta} alt="instagram" />
      </Icones>
      <Icones>
        <img src={face} alt="facebook" />
      </Icones>
      <li>
        <img src={twitter} alt="twitter" />
      </li>
    </Redes>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Paragrafo>
  </Container>
)

export default Footer
