import Card from '../style/Card';
import styles from './ContentCard.module.css';
import starLogo from '../assets/star.png';
import emptyStar from '../assets/empty_star.png';
import apple from '../assets/green_apple.jpeg';
import { useState } from 'react';

export const ContentCard = () => {
	const userName = 'kyukim';
	const nowDate = '2023-06-25 Sun';
	const textContent = 'asdfasdfasdf';
	const tags = ['a', 'b', 'c'];
	let starImg = new Image();
	starImg.src = emptyStar;

	const [clicked, setClicked] = useState(false);
	
	const onClickHandler = () => {
		console.log('Clicked!');
		setClicked((prevState => !prevState));
	};

	return <Card>
		<div className={styles.content_head}>
			<button className={styles.profile_button}>
				<img className={styles.profile_image} src={apple} ></img>
				<p className={styles.user_name}>
					{userName}
				</p>
			</button>
			<button className={styles.fav_star}>
				<img className={styles.fav_star_img} src={clicked? starLogo : emptyStar} alt='my img' onClick={onClickHandler} /> 
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