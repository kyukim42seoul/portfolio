import { useState } from 'react';
import styles from './App.module.css'

let testStringArray = ['Clock', 'Planner'];

function App() {
  const [navItems, setNavItems] = useState(testStringArray);
  return (
    <div className={styles.app}>
      What is next?
      <nav className={styles.navigator}>
        {navItems.map((item, index) => {
          return <a key={index} href=''>{item}</a>
        })}
      </nav>
      Hello, I am KyungYoel
      <br />
      이번엔 뭘 만들까?
      <br />
      <a href='http://localhost:5174/dashboard'>Go Dashboard</a>
    </div>
  )
}

export default App
