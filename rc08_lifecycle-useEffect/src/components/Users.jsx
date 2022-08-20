import { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState("");

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    //?componentDidMount               //bir veriyi bir butona bagli olarak degilde , component mount oldugunda direk cek demek icin getuseri burada cagiriyoruz.
    getUsers();
  }, []);


  //! kod okumaya basladiginda ilk bu kisimdan itibaren render ediliyor.sonra ust kisma yani fetch , useEffect kismina geciyor.
  console.log(users); // bu nedenleconsole a baktigimizda ilk undefined gelir(yukarda users in ilk degerine bos verildigi icin) sonrasinda veriyi ceker.
  return (
    <div>
      <h1>USER LIST</h1>
      {/* <button className="btn btn-success" onClick={getUsers}>
        Get users
      </button> */}
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h6>Name</h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
