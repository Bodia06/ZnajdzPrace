import Generator from '@/components/features/generator'
import { GENERATOR_DATA } from '@/constants'

export const metadata = {
	title: GENERATOR_DATA.meta
}

export default function GeneratorPage() {
	return <Generator />
}
