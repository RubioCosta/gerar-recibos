
// Styles
import { StyledDiv } from './styles' 

export function Input({ 
  id, 
  name, 
  type = 'text', 
  placeholder,
  onChange
} = {}) {
  return (
    <StyledDiv>
      <input 
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </StyledDiv>
  )
}
