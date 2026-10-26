import BriefcaseIcon from '@/components/ui/icons/BriefcaseIcon'
import BuildingIcon from '@/components/ui/icons/BuildingIcon'
import ClockIcon from '@/components/ui/icons/ClockIcon'
import DocumentIcon from '@/components/ui/icons/DocumentIcon'
import HalfClockIcon from '@/components/ui/icons/HalfClockIcon'
import HomeIcon from '@/components/ui/icons/HomeIcon'
import HeartIcon from '@/components/ui/icons/HeartIcon'
import LaptopIcon from '@/components/ui/icons/LaptopIcon'
import LevelIcon from '@/components/ui/icons/LevelIcon'
import SparkIcon from '@/components/ui/icons/SparkIcon'
import FiltersIcon from '@/components/ui/icons/FiltersIcon'
import UserIcon from '@/components/ui/icons/UserIcon'

export const CONTRACT_ICONS = {
	employment: <BriefcaseIcon />,
	b2b: <BuildingIcon />,
	mandate: <DocumentIcon />,
	'specific-task': <SparkIcon />,
	internship: <UserIcon />
}

export const MODE_ICONS = {
	office: <BuildingIcon />,
	hybrid: <LaptopIcon />,
	remote: <HomeIcon />
}

export const LEVEL_ICONS = {
	trainee: <LevelIcon level={1} />,
	junior: <LevelIcon level={2} />,
	mid: <LevelIcon level={3} />,
	senior: <LevelIcon level={4} />
}

export const WORKLOAD_ICONS = {
	full: <ClockIcon />,
	part: <HalfClockIcon />
}

export const LIST_ICONS = {
	description: <DocumentIcon className='size-4' />,
	requirements: <SparkIcon className='size-4' />,
	skills: <SparkIcon />,
	duties: <BriefcaseIcon />,
	benefits: <HeartIcon />,
	recruitment: <UserIcon />,
	tags: <FiltersIcon />
}
