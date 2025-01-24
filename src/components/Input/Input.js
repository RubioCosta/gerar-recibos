
// Styles
import { StyledDiv } from './styles' 

export function Input({ id, name, type = 'text', placeholder } = {}) {
  return (
    <StyledDiv>
      <input 
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </StyledDiv>
  )
}
