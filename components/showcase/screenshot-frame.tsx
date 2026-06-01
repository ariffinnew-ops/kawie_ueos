'use client'

import Image from 'next/image'
import { screenshotPath } from '@/lib/showcase-data'

type ScreenshotFrameProps = {
  filename: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export default function ScreenshotFrame({
  filename,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ScreenshotFrameProps) {
  return (
    <div className={`screenshot-frame overflow-hidden rounded-xl ${className}`}>
      <Image
        src={screenshotPath(filename)}
        alt={alt}
        width={1200}
        height={750}
        className="w-full h-auto object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}
