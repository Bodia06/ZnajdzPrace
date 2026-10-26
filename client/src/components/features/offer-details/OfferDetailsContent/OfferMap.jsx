import { MAPS_EMBED_URL } from '@/config'
import { OFFER_MAP_ZOOM } from '@/constants'

export default function OfferMap({ coordinates, label }) {
	const src = `${MAPS_EMBED_URL}?q=${coordinates.join(',')}&z=${OFFER_MAP_ZOOM}&hl=pl&output=embed`

	return (
		<iframe
			src={src}
			title={label}
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
			allowFullScreen
			className='size-full border-0'
		/>
	)
}
