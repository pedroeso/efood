import {
  FundoWrapper,
  FundoTexto,
  BackgroundImageWrapper,
  TituloCardapio
} from '../../components/Header/styles'
import apresentacao from '../../assets/images/apresentacao.png'

const Categories = () => (
  <FundoWrapper>
    <BackgroundImageWrapper>
      <img src={apresentacao} alt="Apresentação" />
    </BackgroundImageWrapper>
    <TituloCardapio>Italiana</TituloCardapio>
    <FundoTexto>La Dolce Vita Trattoria</FundoTexto>
  </FundoWrapper>
)

export default Categories
