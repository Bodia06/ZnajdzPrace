const ZOOM = 15

export default function OfferMap({ coordinates, label }) {
	const src = `https://maps.google.com/maps?q=${coordinates.join(',')}&z=${ZOOM}&hl=pl&output=embed`

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
