export const stepSalary = (value, delta) => String(Math.max(0, (Number(value) || 0) + delta))

export const canDecreaseSalary = (value) => Number(value) > 0
