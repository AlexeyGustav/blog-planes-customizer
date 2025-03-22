import { useState, useRef, useEffect } from 'react';
import {
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from '../../constants/articleProps';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

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

	const pressСlickOutside = (e: MouseEvent) => {
		if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
			toggleList();
		}
	};

	const pressEscapeKey = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setActive(false);
		}
	};

	const asideRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!active) return;
		if (active) {
			window.addEventListener('click', pressСlickOutside);
			window.addEventListener('keydown', pressEscapeKey);
		}
		return () => {
			window.removeEventListener('click', pressСlickOutside);
			window.removeEventListener('keydown', pressEscapeKey);
		};
	}, [active]);

	// Состояние списка названий шрифтов
	const [selectFont, setSelectFont] = useState(fontFamilyOptions[0]);
	const handleChangeFont = (selected: OptionType) => {
		setSelectFont(selected); // Обновляем состояние с выбранным шрифтом
	};

	// Состояние списка размера шрифтов
	const [selectSize, setSelectSize] = useState(fontSizeOptions[0]);

	// Состояние цвета шрифта
	const [selectColorFont, setSelectColor] = useState(fontColors[0]);

	// Состояние цвета фона
	const [selectColorBackground, setSelectColorBackground] = useState(
		backgroundColors[0]
	);

	// Состояние ширины контента
	const [selectwidth, setSelectwidth] = useState(contentWidthArr[0]);

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
						title={'Размер шрифта'}
						onChange={(selected) => {
							setSelectSize(selected);
						}}></RadioGroup>

					<Select
						selected={selectColorFont}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={(selected) => {
							setSelectColor(selected);
						}}></Select>

					<Separator />

					<Select
						selected={selectColorBackground}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={(selected) => {
							setSelectColorBackground(selected);
						}}></Select>

					<Select
						selected={selectwidth}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={(selected) => {
							setSelectwidth(selected);
						}}></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
