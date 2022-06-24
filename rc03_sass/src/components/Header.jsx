import headerStyle from '../scss/header.module.scss';

const Header = () => {
  return (
    <header>
      <h1 className={headerStyle['title']}>COMMENTS</h1>
    </header>
  );
};

export default Header;
