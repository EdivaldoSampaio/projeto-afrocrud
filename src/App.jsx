import './styles/global.scss';
import './styles/app.scss';

import { Shape } from './components/Shape';
import { Input } from './components/Form/Input';
import { RadioButton } from './components/Form/RadioButton';
import { FormArea } from './components/Form/FormArea';
import { Checkbox } from './components/Form/Checkbox';

export function App() {
  return (
    <>
      <header>
        <h1>afro<span>crud</span></h1>
      </header>

      <Shape>
        <h2>Criar funcionário</h2>

        <form>
          <Input label="Nome" placeholder="Preencha o nome do funcionário" />
        
          <div className="form-areas">
            <FormArea label="Sexo">
              <RadioButton name="gender" title="Masculino"/>
              <RadioButton name="gender" title="Feminino"/>  
            </FormArea>

            <FormArea label="Status">
              <Checkbox title="Ativo"/>
            </FormArea>
          </div>

          <Input label="CPF" placeholder="Preencha o CPF do funcionário" />
          <Input label="Telefone" placeholder="Preencha o telefone do funcionário" />
          <Input label="Salário" placeholder="Preencha o salário do funcionário"/>
        </form>
      </Shape>
    </>
  );
}
