import { useState } from 'react';
import Switch from 'react-switch'
import { useTheme } from 'styled-components';

import logoImg from '../../assets/logo.svg'
import plusImg from '../../assets/plus.svg'

import { Container, Content } from './styles'

interface headerProps {
  onOpenNewTransactionModal: () => void;
  toggleTheme: () => void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme }: headerProps) {
  const { title, colors } = useTheme()
  const [isSwitchChecked, setIsSwitchCheked] = useState(title === 'light' ? false : true)
  
  const deviceWidth = window.innerWidth

  function handleToggleTheme() {
    setIsSwitchCheked(prevState => !prevState)
    toggleTheme()
  }
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <div className="buttons">
          <Switch
            checked={isSwitchChecked}
            onChange={handleToggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={colors.darkGray}
            offColor={'#8797AF'}
            width={48}
            height={16}
            size={16}
          />
          <button type="button" onClick={onOpenNewTransactionModal}>
            { deviceWidth > 460 ? 'Nova transação' : (
              <img src={plusImg} alt="Nova transação" />
            ) }
          </button>
        </div>
      </Content>
    </Container>
  )
}