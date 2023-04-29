import { useContext } from 'react';
import SharedContext from '../SharedContext';
import styles from './Dashboard.module.css';

const Dashboard = () => {
	const { sharedProp, setSharedProp } = useContext(SharedContext);

	const onClickHandler = () => {
		console.log(`Dashboard sharedProp : ${sharedProp}, type is ${typeof(sharedProp)}`);
		setSharedProp((prev) => [...prev, 'added']);
	}
	return <div className={styles.container}>
		Here is Dashboard
		{/* 전역 상태관리 사용해서 App 쪽으로 입력값 넘길 것 */}
		<form className={styles.form}>
			Add Navigator List
			<br />
			<input placeholder="What would you add?"></input>
		</form>
		<button onClick={onClickHandler}>ADD</button>
		<a href="http://localhost:5174/">Go Home</a>
	</div>
}

export default Dashboard