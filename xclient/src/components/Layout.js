import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <main className="content">
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
