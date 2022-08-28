import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  console.log('text', text, 'search', search);
  //   const inputRef = useRef();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);

  const handleSearch = () => {
    setSearch(text);
    // setSearch(inputRef.current.value);
  };

  //* useMemo Memoize edilmiş bir değer döndürür.
  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );

  //* useCallBack Memoize edilmiş bir callback fonksiyonu döndürür.
  const addUser = useCallback(() => {
    setUsers([
      ...users,
      { id: users.length + 1, name: `Clarusway-${users.length - 9}` },
    ]);
  }, [users]);

  console.log(filteredUsers);
  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser} />
      {/* <Users users={users} /> */}
    </div>
  );
};

export default UseMemoCallBack;
