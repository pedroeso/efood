import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${cores.vanilla};
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 40px;
  row-gap: 32px;
  margin: 40px auto;
  max-width: 1200px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
