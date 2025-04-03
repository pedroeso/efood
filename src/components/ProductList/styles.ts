import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${cores.vanilla};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 40px;
  row-gap: 48px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
