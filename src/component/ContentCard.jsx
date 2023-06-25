import Card from '../style/Card';
import styles from './ContentCard.module.css';
import starLogo from '../../public/star.png';

export const ContentCard = () => {
	const userName = 'kyukim';
	const nowDate = '2023-06-25 Sun';
	const textContent = 'asdfasdfasdf';
	const tags = ['a', 'b', 'c'];
	const star = new Image(32, 32);

	return <Card>
		<div className={styles.content_head}>
			<div className={styles.profile_image}></div>
			<p className={styles.user_name}>
				{userName}
			</p>
			<button className={styles.fav_star}>
				<image src={star} alt='star image is loading'/>
			</button>
		</div>
		<p className={styles.now_date}>
			{nowDate.toString()}
		</p>
		<div className={styles.text_content}>
			{textContent}
		</div>
		<div className={styles.tag_container}>
			{tags.map((tag) => `#${tag} `)}
		</div>
	</Card>
};