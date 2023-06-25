import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SharedContext from '../SharedContext';
import Dashboard from './Dashboard';
import styles from './Home.module.css';
import Card from '../style/Card';
import { ContentCard } from '../component/ContentCard';
  
  function Home() {
	  const { sharedProp, setSharedProp } = useContext(SharedContext);

  return (
    <div className={styles.app}>
		<pre>
      		{'What is next?\n'}
		</pre>
		<nav className={styles.navigator}>
          {sharedProp.map((item, index) => {
            const itemPath = '/' + item;
            return <Link key={index} to={itemPath}>{item}</Link>;
          })}
        </nav>
		<pre>
			{'Hello, I am KyungYoel\n이번엔 뭘 만들까?\n'}
		</pre>
    <ContentCard />
    </div>
  )
}

export default Home
