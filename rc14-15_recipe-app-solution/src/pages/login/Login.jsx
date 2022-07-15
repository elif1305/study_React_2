import {
  FormContainer,
  Header,
  LoginContainer,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledButton,
} from './Login.style';

import mealSvg from '../../assets/meal.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: 'ahmet',
  };

  const handleSubmit = (e) => {  // sayfa submit edildiginde yapilacaklar:
    e.preventDefault();
    sessionStorage.setItem('user', JSON.stringify(userInfo));  // kisi login oldugunda storage a atmak icin. session a atiyoruz. cunku o session boyunca kalmasi yeterli. local ve session storage stringler ile calisir bu nedenle stringfy a cevirip atiyoruz.
    navigate(-1);   // navigate(/) da yazablirdik fakat login olduktan sonra kaldigimiz yere gondermesi icin -1 yaziyoruz. 
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{'<EK/>'}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>  
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
