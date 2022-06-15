import logoImg from '../../assets/logo.svg'
import plusImg from '../../assets/plus.svg'

import { Container, Content } from './styles'

interface headerProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: headerProps) {
  const deviceWidth = window.innerWidth
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          { deviceWidth > 460 ? 'Nova transação' : (
            <img src={plusImg} alt="Nova transação" />
          ) }
        </button>
      </Content>
    </Container>
  )
}