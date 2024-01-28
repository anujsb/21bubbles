// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate  } from 'react-router-dom';
// // import { logo } from '../assets/images';

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     const handleScroll = () => {
//       setActive(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//     className={`${
//       active ? 'shadow-lg pt-0 backdrop-blur-md' : 'pt-3'
//     } sm:px-4 lg:px-16 fixed top-0 w-full z-30`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto text-black">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive(false);
//             window.scrollTo({ top: 0, behavior: 'smooth' }); 
//           }}
//         >
//           {/* <img src={logo} alt="logo" className="logo bg-slate-600 bg-opacity-30 rounded-full shadow-lg" /> */}
//           logo
//         </Link>


//         <div className='flex items-center gap-2 bg-slate-600 bg-opacity-30 rounded-full shadow-lg border-b-2 '>
//             <Link 
//                 to="/Services"
//                     >
//                 <button className='border-none'>
//                     Services
//                 </button>
//             </Link>
//             <Link>
//                 <button className='border-none'>
//                     Contact
//                 </button>
//             </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
// import { navLinks } from '../constants/constants';
// import { logo } from '../assets/images';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
    className={`${
      active ? 'shadow-lg pt-0 backdrop-blur-md' : 'pt-0'
    } sm:px-4 lg:px-0 fixed top-0 w-full z-30`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(false);
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
        >
          <img src={'src/assets/21bubbles-removebg-preview.png'} alt="logo" className="logo" />
        </Link>

        
        {/* <ul className="list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer ${
                active ? 'text-white text-lg' : 'text-white text-base'
              } hover:text-lg hover:underline`}
              onClick={() => setActive(true)}
            >
              <Link to={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul> */}


        <div className='flex items-center gap-4 px-14'>
            <Link 
                to="/Services"
                    >
                <button className='text-2xl '>
                    Services
                </button>
            </Link>
            <Link>
                <button className='text-2xl'>
                    Contact
                </button>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
