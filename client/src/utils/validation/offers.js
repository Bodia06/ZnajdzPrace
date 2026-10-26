import { z } from 'zod'
import { OFFERS_FILTER_DATA } from '@/constants'

const { contracts, modes, levels } = OFFERS_FILTER_DATA

const oneOf = ({ options }) => z.enum(options.map((option) => option.value))

const contract = oneOf(contracts)
const mode = oneOf(modes)
const level = oneOf(levels)
const workload = z.enum(['full', 'part'])

const text = z.string().trim().min(1)
const textList = z.array(text)
const amount = z.number().int().nonnegative()
const latitude = z.number().min(-90).max(90)
const longitude = z.number().min(-180).max(180)

const skill = z.object({
	name: text,
	required: z.boolean(),
	years: z.number().int().positive().nullish()
})

export const offerListItemSchema = z.object({
	id: z.uuid(),
	title: text,
	company: text,
	location: text,
	contracts: z.array(contract),
	mode: mode.nullable(),
	levels: z.array(level),
	salaryFrom: amount.nullable(),
	salaryTo: amount.nullable(),
	salaryContract: contract.nullable(),
	tags: textList,
	createdAt: z.iso.datetime({ offset: true })
})

export const offerSchema = offerListItemSchema.extend({
	description: text,
	requirements: text,
	address: z.string().nullable(),
	latitude: latitude.nullable(),
	longitude: longitude.nullable(),
	workload: workload.nullable(),
	validUntil: z.iso.date().nullable(),
	duties: textList,
	benefits: textList,
	recruitment: textList,
	skills: z.array(skill)
})

export const createOfferSchema = z
	.strictObject({
		title: text,
		company: text,
		description: text,
		requirements: text,
		location: text,
		address: text.optional(),
		latitude: latitude.optional(),
		longitude: longitude.optional(),
		contracts: z.array(contract).min(1),
		mode,
		levels: z.array(level).min(1),
		workload,
		salaryFrom: amount.optional(),
		salaryTo: amount.optional(),
		salaryContract: contract.optional(),
		validUntil: z.iso.date().optional(),
		tags: textList.default([]),
		duties: textList.default([]),
		benefits: textList.default([]),
		recruitment: textList.default([]),
		skills: z.array(skill.extend({ required: z.boolean().default(true) })).default([])
	})
	.refine((offer) => (offer.latitude === undefined) === (offer.longitude === undefined), {
		message: 'latitude and longitude must be provided together',
		path: ['latitude']
	})
	.refine((offer) => offer.salaryFrom !== undefined || offer.salaryTo === undefined, {
		message: 'salaryFrom is required when salaryTo is set',
		path: ['salaryFrom']
	})
	.refine((offer) => offer.salaryTo === undefined || offer.salaryTo >= (offer.salaryFrom ?? 0), {
		message: 'salaryTo must not be lower than salaryFrom',
		path: ['salaryTo']
	})
	.refine((offer) => !offer.salaryContract || offer.contracts.includes(offer.salaryContract), {
		message: 'salaryContract must be one of contracts',
		path: ['salaryContract']
	})
