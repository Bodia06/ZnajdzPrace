import { z } from 'zod'

export const CONTRACTS = [
  'employment',
  'b2b',
  'mandate',
  'specific-task',
  'internship'
] as const
export const MODES = ['office', 'hybrid', 'remote'] as const
export const LEVELS = ['trainee', 'junior', 'mid', 'senior'] as const
export const WORKLOADS = ['full', 'part'] as const

const requiredText = z.string().trim().min(1, 'This field is required')
const textList = z.array(requiredText).default([])
const salary = z.number().int().nonnegative()

export const offerParamsSchema = z.object({ id: z.uuid() })

export const createOfferSchema = z
  .strictObject({
    title: requiredText,
    company: requiredText,
    description: requiredText,
    requirements: requiredText,
    location: requiredText,
    address: requiredText.optional(),
    latitude: z.number().min(-90).max(90).optional(),
    longitude: z.number().min(-180).max(180).optional(),
    contracts: z.array(z.enum(CONTRACTS)).min(1),
    mode: z.enum(MODES),
    levels: z.array(z.enum(LEVELS)).min(1),
    workload: z.enum(WORKLOADS),
    salaryFrom: salary.optional(),
    salaryTo: salary.optional(),
    // Which of `contracts` the salary refers to, shown as a note under the amount.
    salaryContract: z.enum(CONTRACTS).optional(),
    validUntil: z.iso.date().optional(),
    tags: textList,
    duties: textList,
    benefits: textList,
    recruitment: textList,
    skills: z
      .array(
        z.strictObject({
          name: requiredText,
          required: z.boolean().default(true),
          years: z.number().int().positive().optional()
        })
      )
      .default([])
  })
  .refine(
    offer => (offer.latitude === undefined) === (offer.longitude === undefined),
    {
      message: 'latitude and longitude must be provided together',
      path: ['latitude']
    }
  )
  .refine(
    offer => offer.salaryFrom !== undefined || offer.salaryTo === undefined,
    {
      message: 'salaryFrom is required when salaryTo is set',
      path: ['salaryFrom']
    }
  )
  .refine(
    offer =>
      offer.salaryTo === undefined || offer.salaryTo >= (offer.salaryFrom ?? 0),
    {
      message: 'salaryTo must not be lower than salaryFrom',
      path: ['salaryTo']
    }
  )
  .refine(
    offer => offer.salaryContract === undefined || offer.contracts.includes(offer.salaryContract),
    {
      message: 'salaryContract must be one of contracts',
      path: ['salaryContract']
    }
  )
