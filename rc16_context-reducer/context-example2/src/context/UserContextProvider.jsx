import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';


// contex uygulamalari cogunlukla bu sekilde kullanili. yani bir dosya icerisinde defining ve provider yazilir.



//? 1- Defining
export const UserContext = createContext();

//? 3-Consume function (Custom Hook)  ( zorunlu degildir ama yazilirsa iyi olur.)
export const useUserContext = () => {
  return useContext(UserContext);
};

//? 2- Provider Component
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, width) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: width } : user))
    );
  };
  const values = { users, changeWidth };

  return <UserContext.Provider value={values}>
    {children}
    </UserContext.Provider>;
};

export default UserContextProvider;
