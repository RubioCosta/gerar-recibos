import { useState } from 'react'
import html2pdf from 'html2pdf.js';
import { ToastContainer } from 'react-toastify';

// Styles
import { StyledDiv } from './styles'

// Components
import { Input } from 'components/Input';
import { Button } from 'components/Button'
import { generateTemplateReceipt } from 'components/TemplateReceipt';

// Utils
import showToast from 'utils/toastConfig'
import { convertDateFromBrazil } from 'utils/date'
import { getAll } from 'services/firebase.rules'

export default function GenerateReceipt({ emailUser }) {
  const [date, setDate] = useState(convertDateFromBrazil(new Date().toISOString().split('T')[0]));
  const [description, setDescription] = useState('');

  async function handlerGeneratePdf(e) {
    e.preventDefault();

    const data = await getAll(`${emailUser}/users/`)

    if (!data.length) return showToast('warning', 'Nenhum cadastro identificado!')

    const [day, month, year] = date.split('/');
    const html = generateTemplateReceipt(day, month, year, description, false, data);

    const options = {
      filename:     'conteudo.pdf',
      image:        { type: 'jpeg', quality: 100 },
      html2canvas:  { dpi: 192, letterRendering: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().from(html).set(options).save();
  }

  return (
    <StyledDiv>
      <form onSubmit={handlerGeneratePdf}>
        <Input 
          id='date'
          name='date'
          value={date}
          placeholder='Data'
          onChange={(e) => setDate(e.target.value)}
          mask='99/99/9999'
        />
        <Input 
          id='description'
          name='description'
          value={description}
          placeholder='Descrição'
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button 
          description='Gerar Recibo'
        />
      </form>
      <ToastContainer />
    </StyledDiv>
  )
}
