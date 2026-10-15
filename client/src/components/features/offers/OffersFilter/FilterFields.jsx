import FilterCheckbox from './fields/FilterCheckbox'
import FilterChips from './fields/FilterChips'
import FilterGroup from './fields/FilterGroup'
import FilterLocation from './fields/FilterLocation'
import FilterSalary from './fields/FilterSalary'
import FilterSegmented from './fields/FilterSegmented'

export default function FilterFields({ data, filters, setField, toggleField }) {
	const { location, contracts, modes, levels, salary } = data

	return (
		<div className='grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-1'>
			<div className='divide-y divide-ink/5 *:py-5 *:first:pt-0'>
				<FilterLocation item={location} value={filters.location} onChange={setField('location')} />

				<FilterGroup label={contracts.label}>
					{contracts.options.map((option) => (
						<FilterCheckbox
							key={option.value}
							name={contracts.name}
							option={option}
							checked={filters.contracts.includes(option.value)}
							onChange={toggleField('contracts')}
						/>
					))}
				</FilterGroup>
			</div>

			<div className='divide-y divide-ink/5 border-t border-ink/5 *:py-5 md:border-t-0 md:*:first:pt-0 lg:border-t lg:*:first:pt-5'>
				<FilterGroup label={modes.label}>
					<FilterSegmented
						name={modes.name}
						options={modes.options}
						value={filters.mode}
						onChange={setField('mode')}
					/>
				</FilterGroup>

				<FilterGroup label={levels.label}>
					<FilterChips
						name={levels.name}
						options={levels.options}
						selected={filters.levels}
						onToggle={toggleField('levels')}
					/>
				</FilterGroup>

				<FilterSalary item={salary} value={filters.salary} onChange={setField('salary')} />
			</div>
		</div>
	)
}
