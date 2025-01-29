import { withMask } from 'use-mask-input';
import { NumericFormat } from 'react-number-format';

// Styles
import { StyledDiv } from './styles'

export function Input({ 
  id, 
  name,
  value,
  type = 'text', 
  placeholder,
  onChange,
  mask = null,
  className = ''
} = {}) {
  return (
    <StyledDiv className={className}>
      <input 
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={mask ? withMask(mask) : null}
      />
    </StyledDiv>
  )
}

export function InputValue({ 
  id, 
  name,
  type = 'text',
  placeholder,
  onChange,
} = {}) {
  return (
    <StyledDiv>
      <NumericFormat
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale={true}
        allowNegative={false}
        onValueChange={onChange} 
        customInput="input"
      />
    </StyledDiv>

  )
}
