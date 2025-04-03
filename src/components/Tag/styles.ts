import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.branca};
  font-weight: 700;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  padding: ${(props) =>
    props.size === 'big' ? '8px 16px' : '6px 4px'}; 4px 6px;
  display: inline-block;
`
