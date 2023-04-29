import { useContext } from 'react';
import SharedContext from '../SharedContext';
import styles from './Home.module.css';

let testStringArray = ['Clock', 'Planner'];

function Home() {
	const { sharedProp, setSharedProp } = useContext(SharedContext);

	const onClickHandler = () => {
		console.log(`Home sharedProp : ${sharedProp}, type is ${typeof(sharedProp)}`);
	}
  return (
    <div className={styles.app}>
      What is next?
      {/*<nav className={styles.navigator}>
        {navItems.map((item, index) => {
          return <a key={index} href=''>{item}</a>
        })}
      </nav>*/}
      Hello, I am KyungYoel
      <br />
      이번엔 뭘 만들까?
      <br />
	  <button onClick={onClickHandler}>Check!</button>
    </div>
  )
}

export default Home
