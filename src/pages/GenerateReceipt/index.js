import { useState } from 'react'

// Styles
import { StyledDiv } from './styles'

// Components
import { Input } from 'components/Input';

export default function GenerateReceipt() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  return (
    <StyledDiv>
      <form>
        
      </form>
    </StyledDiv>
  )
}
