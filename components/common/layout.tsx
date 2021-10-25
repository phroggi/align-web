import React, { FC } from 'react';

import Footer from '@components/common/footer';
import NavBar from '@components/common/NavBar/NavBar';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
