import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [active, setActive] = useState(false);

	const toggle = () => {
		if (active) {
			setActive(false); // Закрываем меню, если оно открыто
		} else {
			setActive(true); // Открываем меню, если оно закрыто
		}
	};

	return (
		<>
			<ArrowButton isOpen={active} onClick={toggle} />
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
