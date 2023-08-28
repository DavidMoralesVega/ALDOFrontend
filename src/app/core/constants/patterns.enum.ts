export enum ZE_Patterns {
	alphanumericPattern = '[a-zA-ZáéíóúÁÉÍÓÚÑñ0-9 .()]',
	letterSpacePattern = '[a-zA-ZáéíóúÁÉÍÓÚÑñ .()]',
	letterSpacePattern1 = '[a-zA-ZáéíóúÁÉÍÓÚÑñ .]',

	letter_space = '[a-zA-ZáéíóúÁÉÍÓÚÑñ ]',
	letter_not_space = '[a-zA-ZáéíóúÁÉÍÓÚÑñ]',
	year = '^([0-9]{4}|[0-9]{3}[0-9]|[0-9]{2}[0-9]{2}|[0-9][0-9]{3})$',
	year2 = '^(20[1-2][0-9]|2023)$',
	beetween1_10 = '^([1-9]|10)$',
	beetween1_3 = '^([1-3])$',
	beetween1_40 = '^([1-9]|[1-3][0-9]|40)$',
	beetween1_90 = '^([1-9]|[1-8][0-9]|90)$',
	// only_numbers = '^[0-9]+$',
	only_numbers = '^[0-9]*$',
	only_numbersDecimales = '^[0-9]*$',
	decimalPattern = '^d+(.d+)?$',

	// email = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
	email = '^[a-z]+@[a-z]+.[a-z]{2,3}$',
	url = '(?:(?:https?|ftp)://)?[w/-?=%.]+.[w/-?=%.]+',
	number_guion = '^[0-9-]*$'
}
