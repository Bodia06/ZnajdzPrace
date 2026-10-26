import { AUTH_MODES } from './modes'
import { HTTP_STATUS } from '../common/api'
import { LINKS } from '../layout/links'

export const AUTH_PATHS = {
	[AUTH_MODES.login]: LINKS.LOGIN,
	[AUTH_MODES.register]: LINKS.REGISTRATION
}

export const AUTH_INVALID_STATUSES = [
	HTTP_STATUS.badRequest,
	HTTP_STATUS.unauthorized,
	HTTP_STATUS.forbidden
]

export const AUTH_LOGIN_INITIAL_VALUES = { email: '', password: '', remember: true }

export const AUTH_REGISTER_INITIAL_VALUES = {
	firstName: '',
	lastName: '',
	companyName: '',
	nip: '',
	email: '',
	password: '',
	confirm: '',
	terms: false
}
