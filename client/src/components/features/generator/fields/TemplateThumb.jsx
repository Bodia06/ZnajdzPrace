import TemplateLine from './TemplateLine'
import { GENERATOR_TEMPLATE_IDS } from '@/constants'

export default function TemplateThumb({ id }) {
	if (id === GENERATOR_TEMPLATE_IDS.sidebar) {
		return (
			<span className='flex w-full'>
				<span className='w-1/3 bg-ink' />
				<span className='flex flex-1 flex-col gap-1.5 p-2.5'>
					<TemplateLine className='h-1.5 w-2/3 bg-ink/60' />
					<TemplateLine className='w-full' />
					<TemplateLine className='w-5/6' />
					<TemplateLine className='mt-1 w-full' />
					<TemplateLine className='w-3/4' />
				</span>
			</span>
		)
	}

	if (id === GENERATOR_TEMPLATE_IDS.banner) {
		return (
			<span className='flex w-full flex-col'>
				<span className='h-1/4 bg-ink' />
				<span className='flex flex-1 gap-2 p-2.5'>
					<span className='flex flex-1 flex-col gap-1.5'>
						<TemplateLine className='w-full' />
						<TemplateLine className='w-5/6' />
						<TemplateLine className='mt-1 w-full' />
						<TemplateLine className='w-2/3' />
					</span>
					<span className='flex w-1/3 flex-col gap-1.5'>
						<TemplateLine className='bg-primary/40' />
						<TemplateLine className='bg-primary/40' />
					</span>
				</span>
			</span>
		)
	}

	return (
		<span className='flex w-full flex-col gap-1.5 p-3'>
			<TemplateLine className='h-1.5 w-1/2 bg-ink/60' />
			<span className='block h-px bg-ink/40' />
			<TemplateLine className='mt-1 w-full' />
			<TemplateLine className='w-5/6' />
			<TemplateLine className='mt-1 w-full' />
			<TemplateLine className='w-2/3' />
			<TemplateLine className='mt-1 w-3/4' />
		</span>
	)
}
