import { useState } from 'react'
import { jsPDF } from 'jspdf';
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

    const doc = new jsPDF('landscape');

    const [day, month, year] = date.split('/');
    const html = generateTemplateReceipt(day, month, year, description, false, data);

    doc.html(html, {
      callback: function (doc) {
        doc.save('conteudo.pdf');
      },
      margin: [10, 10, 10, 10],
      x: 10,
      y: 10,
    });
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
          onChange={(e) => setDate(e.target.value)}
        />
        <Button 
          description='Gerar Recibo'
        />
      </form>
      <ToastContainer />
    </StyledDiv>
  )
}
