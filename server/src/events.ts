import { EventEmitter } from 'node:events'

export const OFFERS_CHANGED = 'offers-changed'

export const events = new EventEmitter()

events.setMaxListeners(0)
