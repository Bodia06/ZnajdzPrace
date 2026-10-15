import { LINKS } from '../links'

export const AUTH_DATA = {
	meta: {
		login: 'Logowanie',
		register: 'Rejestracja'
	},
	close: { label: 'Zamknij', link: LINKS.HOME },
	tabs: {
		label: 'Tryb',
		login: 'Logowanie',
		register: 'Rejestracja'
	},
	side: {
		login: {
			title: 'Witaj z powrotem!',
			text: 'Sprawdź status aplikacji, odpowiedz pracodawcy i wróć do zapisanych ofert.'
		},
		register: {
			before: 'Dołącz do',
			highlight: 'ZnajdzPrace',
			text: 'Jedno konto – aplikuj na oferty albo rekrutuj do swojego zespołu.'
		},
		score: { value: 84, title: 'Ocena CV', meta: 'AI · 3 wskazówki' },
		sent: 'Aplikacja wysłana'
	},
	login: {
		title: 'Zaloguj się',
		text: 'Kandydaci i pracodawcy logują się tym samym formularzem.',
		email: {
			name: 'email',
			label: 'Adres e-mail',
			placeholder: 'anna.kowalska@poczta.pl',
			autoComplete: 'email'
		},
		password: {
			name: 'password',
			label: 'Hasło',
			placeholder: 'Twoje hasło',
			autoComplete: 'current-password',
			forgot: { label: 'Nie pamiętasz?', link: LINKS.LOGIN },
			show: 'Pokaż hasło',
			hide: 'Ukryj hasło'
		},
		remember: { name: 'remember', label: 'Zapamiętaj mnie' },
		submit: 'Zaloguj się',
		submitting: 'Logowanie',
		switch: { text: 'Nie masz konta?', action: 'Zarejestruj się' },
		errors: {
			invalid: 'Nieprawidłowy e-mail lub hasło. Spróbuj ponownie.',
			server: 'Nie udało się zalogować. Spróbuj ponownie za chwilę.'
		}
	},
	register: {
		title: 'Załóż konto',
		text: 'Wybierz, kim jesteś – formularz się dopasuje.',
		rolesLabel: 'Typ konta',
		roles: [
			{ value: 'candidate', title: 'Kandydat', text: 'Szukam pracy', suffix: 'kandydata' },
			{ value: 'employer', title: 'Pracodawca', text: 'Rekrutuję', suffix: 'pracodawcy' }
		],
		fields: {
			firstName: {
				name: 'firstName',
				label: 'Imię',
				placeholder: 'Anna',
				autoComplete: 'given-name'
			},
			lastName: {
				name: 'lastName',
				label: 'Nazwisko',
				placeholder: 'Kowalska',
				autoComplete: 'family-name'
			},
			companyName: {
				name: 'companyName',
				label: 'Nazwa firmy',
				placeholder: 'Acme Sp. z o.o.',
				autoComplete: 'organization'
			},
			nip: { name: 'nip', label: 'NIP', placeholder: '1234567890', inputMode: 'numeric' },
			email: {
				name: 'email',
				label: 'Adres e-mail',
				placeholder: 'anna.kowalska@poczta.pl',
				autoComplete: 'email'
			},
			password: {
				name: 'password',
				label: 'Hasło',
				placeholder: 'Min. 8 znaków',
				autoComplete: 'new-password'
			},
			confirm: {
				name: 'confirm',
				label: 'Powtórz hasło',
				placeholder: 'Powtórz hasło',
				autoComplete: 'new-password'
			}
		},
		strength: ['Zbyt słabe hasło', 'Słabe hasło', 'Średnie hasło', 'Dobre hasło', 'Silne hasło'],
		terms: {
			name: 'terms',
			before: 'Akceptuję',
			terms: { label: 'regulamin', link: LINKS.TERMS },
			and: 'i',
			privacy: { label: 'politykę prywatności', link: LINKS.PRIVACY }
		},
		submit: 'Utwórz konto',
		submitting: 'Tworzenie konta',
		switch: { text: 'Masz już konto?', action: 'Zaloguj się' },
		errors: {
			required: 'To pole jest wymagane',
			email: 'Podaj poprawny adres e-mail',
			passwordShort: 'Hasło musi mieć co najmniej 8 znaków',
			mismatch: 'Hasła nie są identyczne',
			nip: 'Podaj poprawny numer NIP',
			terms: 'Zaakceptuj regulamin i politykę prywatności',
			server: 'Nie udało się utworzyć konta. Spróbuj ponownie za chwilę.'
		},
		success: {
			title: 'Konto utworzone!',
			before: 'Wysłaliśmy link aktywacyjny na',
			after: 'Kliknij go, aby zacząć.',
			action: 'Przejdź do logowania'
		}
	}
}
