import React, {useEffect, useState, FunctionComponent} from 'react';

import { Container } from './styles';

const scrollThreshold = 300;

type SubMenuProps = {
  children: React.ReactNode;
}

declare global {
  interface Window{
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC<SubMenuProps> = (props: SubMenuProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];
  const className = classes.join(' ').trim();

  function toggleActiveMenu() {
    setIsActive(prev => !prev);
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{props.children}</Container>;  
};

export default SideMenu;