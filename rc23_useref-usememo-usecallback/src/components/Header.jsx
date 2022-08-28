import React, { memo } from 'react';
import cw from '../assets/cw_logo.png';

//* React.memo componentleri hafızaya almak için kullanılır, render'ı önler

const Header = ({ img }) => {
  console.log('Rendering: Header Comp.');
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: '1rem', maxHeight: '200px' }}
      />
    </div>
  );
};

export default memo(Header);

//* 2.kullanım
// const Header = memo(({ img }) => {

//   console.log('Rendering: Header Comp.');
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: '1rem', maxHeight: '200px' }}
//       />
//     </div>
//   );
// });

// export default Header;

//* 1.kullanım
// const Header = React.memo(({ img }) => {

//   console.log('Rendering: Header Comp.');
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: '1rem', maxHeight: '200px' }}
//       />
//     </div>
//   );
// });

// export default Header;
