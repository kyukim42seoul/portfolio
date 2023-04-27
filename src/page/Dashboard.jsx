import styles from './Dashboard.module.css';

const Dashboard = () => {
	return <div className={styles.container}>
		Here is Dashboard
		{/* 전역 상태관리 사용해서 App 쪽으로 입력값 넘길 것 */}
		<form className={styles.form}>
			Add Navigator List
			<br />
			<input placeholder="What would you add?"></input>
		</form>
		<a href="http://localhost:5174/">Go Home</a>
	</div>
}

export default Dashboard