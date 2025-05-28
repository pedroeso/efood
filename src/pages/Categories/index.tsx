import {
  FundoWrapper,
  FundoTexto,
  BackgroundImageWrapper,
  TituloCardapio,
  HeaderBar,
  Link,
  Links,
  LinkItem,
  LinkDois,
  PequenoTexto,
  Tipo,
  Nav,
  Barra
} from '../../components/Header/styles'
import apresentacao from '../../assets/images/apresentacao.png'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Barra>
      <PequenoTexto>Restaurantes</PequenoTexto>
      <Tipo>
        <img src={logo} alt="EPLAY" />
      </Tipo>
      <PequenoTexto>0 produto(s) no carrinho</PequenoTexto>
    </Barra>
  )
}

const Categories = () => (
  <>
    <Header />
    <FundoWrapper>
      <BackgroundImageWrapper>
        <img src={apresentacao} alt="Apresentação" />
      </BackgroundImageWrapper>
      <TituloCardapio>Italiana</TituloCardapio>
      <FundoTexto>La Dolce Vita Trattoria</FundoTexto>
    </FundoWrapper>
  </>
)

export default Categories
