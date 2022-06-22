const Msg = (props) => {
  // console.log(props);

  //! Destructiring
  const { name } = props;

  return (
    <div>
      <h3>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
