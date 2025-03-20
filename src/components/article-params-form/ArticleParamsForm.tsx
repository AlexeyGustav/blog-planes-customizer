import { useState, useRef, useEffect } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [active, setActive] = useState(false);

	const toggle = () => {
		if (active) {
			setActive(false);
		} else {
			setActive(true);
		}
	};

	const asideRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (asideRef.current == null) return;

		const { left, top } = asideRef.current.getBoundingClientRect();
		asideRef.current.style.left = `${left + 120}px`;
		asideRef.current.style.top = `${top - 20}px`;
	}, [active]);

	return (
		<div ref={asideRef}>
			<ArrowButton isOpen={active} onClick={toggle} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: active })}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
