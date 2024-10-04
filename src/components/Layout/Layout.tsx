interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <h1>Нерухомість Житомира</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Нерухомість Житомира</p>
      </footer>
    </div>
  );
};

export default Layout;
