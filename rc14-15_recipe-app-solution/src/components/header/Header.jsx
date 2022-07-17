import {
  HeaderContainer,
  MainHeader,
  FormContainer,
  FoodInput,
  Button,
  Select,
} from './Header.style';

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}  // parenttaki query ye gonderdik
        />
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (                           // suslu varsa return e gerek yok, faka sadece 1 ifade dondureceksekparantez kullanabliriz o zman return e grek kalmaz.
            <option key={index} value={meal.toLowerCase()}>                
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
