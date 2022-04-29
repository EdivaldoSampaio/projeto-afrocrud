
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'; 


import './styles.scss';



import { Shape } from '../../components/Shape';
import { Input } from '../../components/Form/Input';
import { RadioButton } from '../../components/Form/RadioButton';
import { FormArea } from '../../components/Form/FormArea';
import { Checkbox } from '../../components/Form/Checkbox';
import { Select } from '../../components/Form/Select';
import { Button } from '../../components/Form/Button';

import { phoneNumberMask, cpfMask, currencyMask } from '../../utils/masks';

export function EmployeeCreate() {

  const navigate =useNavigate();
  const location = useLocation();
  const { state: employee } = useLocation();

    const { register, handleSubmit, formState: { errors} } = useForm({defaultValues: employee});

    async function onSubmit(data) {
  // GET  - Listar Dados
  // POST - Criar um novo dado
  // PUT - Alterar um dado
  // DELETE - Deletar um dado
  // PATH - Alterações mais especificas (mudar imagem de usuário por exemplo)

 
      const localEmployees = JSON.parse(localStorage.getItem('@afrocrud:employees')) || [];

      let updatedEmployees = localEmployees;

      if(data.id) {
        updatedEmployees = localEmployees.map(employee => {
          if (data.id === employee.id) {
            return data;
          }

          return employee; 

        });

      } else {

          data.id = uuidV4();
          updatedEmployees = [...localEmployees, data];
        }
        
     
   
      localStorage.setItem('@afrocrud:employees',JSON.stringify(updatedEmployees));

        navigate('/');
    }

    async function handleRemove() {


      const localEmployees = JSON.parse(localStorage.getItem('@afrocrud:employees')) || [];

      const updatedEmployees = localEmployees.filter(localEmployees =>
        localEmployees.id !== employee.id);

        localStorage.setItem('@afrocrud:employees', JSON.stringify(updatedEmployees));

    navigate('/'); 

  }
  
    return (
        
      <Shape className="shape-create">

        <div className="title-area">

      <h2>{!!employee ? 'Atualizar' : 'Criar'} funcionário</h2>
      {!!employee && <Button title="Remover" onClick={handleRemove} />}

        </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-form">
        <Input label="Nome" placeholder="Preencha o nome do funcionário"
        error={errors.name}
        {...register('name', { required: 'O nome é obrigatório'})} />
      
        <div className="form-areas">
          <FormArea label="Sexo">
            <RadioButton
             name="gender" 
             title="Masculino" 
             value="male"
     
             {...register('gender')}
             />

            <RadioButton
             name="gender"
             title="Feminino"
             value="female"
             {...register('gender')}
             />
             
          </FormArea>

          <FormArea label="Status">
            <Checkbox title="Ativo" {...register('status')}/>
          </FormArea>
        </div>

        <Input label="CPF"
         placeholder="Preencha o CPF do funcionário"
         maxLength={14}
         mask={cpfMask}
         error={errors.cpf}
            {...register('cpf', { 
              required: 'O CPF é obrigatório',
              minLength: { value: 14, message: 'Preencha o CPF corretamente'}
            })}
            
          />

        <Input 
          label="Telefone"
          placeholder="Preencha o telefone do funcionário"  
          maxLength={15}
          mask={phoneNumberMask}
          error={errors.phoneNumber}  
           {...register('phoneNumber', {
             required: 'O número de telefone é obrigatório',
             minLength: {
               value: 15,
               message: 'Preencha o número de telefone corretamente'
             }
           })} />

        <Input label="Salário" placeholder="Preencha o salário do funcionário"  error={errors.salary}
        mask={currencyMask} defaultValue="R$ 0,00" 
          {...register('salary', { required: 'O salário é obrigatório'})} />

        <Select {...register('department')}/>
        </div>

          <Button title={!!employee ? 'Atualizar' : 'Adicionar'} icon="arrowRight"/>
        
      </form>

    </Shape>

    )
}
