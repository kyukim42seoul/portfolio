import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SharedContext from '../SharedContext';
import styles from './Home.module.css';
import { ContentCard } from '../component/ContentCard';
import Modal from '../component/Modal';
  
  function Home() {
	  const { sharedProp, setSharedProp } = useContext(SharedContext);
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
      console.log('openModal clicked!');
      setOpenModal(true);
    };

    const closeModalHandler = () => {
      setOpenModal(false);
    };

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
    <button onClick={openModalHandler}>Open Modal</button>
    <Modal isOpen={openModal} closeModal={closeModalHandler} />
    <ContentCard />
    </div>
  )
}

export default Home
