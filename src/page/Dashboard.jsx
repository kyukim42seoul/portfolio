import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SharedContext from '../SharedContext';
import styles from './Dashboard.module.css';

const Dashboard = () => {
	const { sharedProp, setSharedProp } = useContext(SharedContext);
	
	const addLavList = (event) => {
		event.preventDefault();
		const newNavItem = event.target[0].value;
		setSharedProp((prev) => [...prev, newNavItem]);
	}

	return <div className={styles.container}>
		Here is Dashboard
		{/* 전역 상태관리 사용해서 App 쪽으로 입력값 넘길 것 */}
		<form className={styles.form} onSubmit={addLavList}>
			<pre>
				{'Add Navigator List\n'}
			</pre>
			<input placeholder="What would you add?"></input>
		</form>
		<Link to='/home'>Go Home</Link>
	</div>
}

export default Dashboard