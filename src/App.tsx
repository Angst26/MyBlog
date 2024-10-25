import styles from './App.module.css'
import {Header} from "./components/header/Header.tsx";
import {Content} from "./components/content/content.tsx";

function App() {
  return(
      <div className={styles.app}>
          <Header/>
          <Content/>
      </div>
  );
}

export default App
