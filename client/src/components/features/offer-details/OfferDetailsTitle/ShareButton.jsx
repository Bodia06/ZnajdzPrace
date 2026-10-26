'use client'

import { useEffect, useState } from 'react'
import { SHARE_FEEDBACK_MS } from '@/constants'
import ShareIcon from '@/components/ui/icons/ShareIcon'
import TickIcon from '@/components/ui/icons/TickIcon'

async function copy(text) {
	try {
		await navigator.clipboard.writeText(text)
	} catch {
		const field = document.createElement('textarea')
		field.value = text
		field.style.position = 'fixed'
		field.style.opacity = '0'
		document.body.append(field)
		field.select()
		const done = document.execCommand('copy')
		field.remove()
		if (!done) throw new Error('copy failed')
	}
}

export default function ShareButton({ label, copiedLabel }) {
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		if (!copied) return
		const timer = setTimeout(() => setCopied(false), SHARE_FEEDBACK_MS)
		return () => clearTimeout(timer)
	}, [copied])

	const share = async () => {
		const url = window.location.href
		try {
			if (navigator.share) {
				await navigator.share({ url, title: document.title })
				return
			}
		} catch (error) {
			if (error?.name === 'AbortError') return
		}
		try {
			await copy(url)
			setCopied(true)
		} catch {}
	}

	return (
		<span className='relative flex'>
			<button
				type='button'
				onClick={share}
				aria-label={label}
				className='flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:bg-primary-soft hover:text-primary active:scale-90 sm:size-12'
			>
				{copied ? <TickIcon className='size-4' /> : <ShareIcon />}
			</button>
			<span
				role='status'
				className={`pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-lg bg-ink px-3 py-1.5 text-xs font-bold whitespace-nowrap text-white transition ${
					copied ? 'opacity-100' : 'opacity-0'
				}`}
			>
				{copied ? copiedLabel : ''}
			</span>
		</span>
	)
}
