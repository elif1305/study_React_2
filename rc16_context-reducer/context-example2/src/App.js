import UserContextProvider from './context/UserContextProvider';
import ShowUsers from './pages/ShowUsers';

function App() {
  return (
    <>
      <UserContextProvider>
        <ShowUsers />
      </UserContextProvider>
    </>
  );
}
export default App;
