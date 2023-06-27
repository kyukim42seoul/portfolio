import styles from './Modal.module.css';

const Modal = ({isOpen, closeModal}) => {
	return <>
		{isOpen && (<div className={styles.modal_overlay}>
			<div className={styles.modal_content}>
				<h2>This is Modal</h2>
				<p>Modal Contents</p>
				<button onClick={closeModal}>Close</button>
			</div>
		</div>)}
	</>
};

export default Modal;