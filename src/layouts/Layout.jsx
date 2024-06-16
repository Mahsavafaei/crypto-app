import styles from "./Layoutl.module.css";

function Layout({children}) {
  return (
    <>
      <header>
        <h1>
            Crypto App

        </h1>
        <p><a href="#">Botostart</a> React.js | Full Course </p>
      </header>
      {children}
      <footer>
        <p>Developed by Mahsa with : ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
