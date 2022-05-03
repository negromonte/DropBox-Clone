import React, {useEffect, useState} from 'react';

import { Container } from './styles';

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <Container>{children}</Container>;  
};

export default SideMenu;