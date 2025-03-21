import { useState, useRef, useEffect } from 'react';
import {
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
} from '../../constants/articleProps';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [active, setActive] = useState(false);

	const toggleList = () => {
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

	// Список шрифтов
	const [selectFont, setSelectFont] = useState(fontFamilyOptions[0]);

	const handleChangeFont = (selected: OptionType) => {
		setSelectFont(selected); // Обновляем состояние с выбранным шрифтом
	};

	// Список размера шрифтов
	const [selectSize, setSelectSize] = useState(fontSizeOptions[0]);
	const handleChangeSize = (selected: OptionType) => {
		setSelectSize(selected); // Обновляем состояние с выбранным шрифтом
	};

	return (
		<div ref={asideRef}>
			<ArrowButton isOpen={active} onClick={toggleList} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: active })}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						selected={selectFont}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={handleChangeFont}></Select>

					<RadioGroup
						name={''}
						options={fontSizeOptions}
						selected={selectSize}
						title={'размер шрифта'}
						onChange={handleChangeSize}></RadioGroup>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
