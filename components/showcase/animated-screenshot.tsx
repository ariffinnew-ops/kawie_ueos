import Image from 'next/image'
import { screenshotPath } from '@/lib/showcase-data'

export type ScreenshotVariant = 'hero' | 'primary' | 'secondary' | 'card'

const sizeMap: Record<ScreenshotVariant, { w: number; h: number; sizes: string }> = {
  hero: { w: 1400, h: 800, sizes: '(max-width: 1160px) 100vw, 1160px' },
  primary: { w: 1200, h: 800, sizes: '(max-width: 1024px) 100vw, 50vw' },
  secondary: { w: 900, h: 500, sizes: '(max-width: 768px) 100vw, 40vw' },
  card: { w: 600, h: 360, sizes: '(max-width: 768px) 100vw, 50vw' },
}

type AnimatedScreenshotProps = {
  filename: string
  alt: string
  variant?: ScreenshotVariant
  priority?: boolean
  className?: string
  delay?: boolean
  float?: boolean
}

export default function AnimatedScreenshot({
  filename,
  alt,
  variant = 'primary',
  priority = false,
  className = '',
  delay = false,
  float = true,
}: AnimatedScreenshotProps) {
  const { w, h, sizes } = sizeMap[variant]

  return (
    <div
      className={[
        'screenshot-shot',
        `screenshot-shot--${variant}`,
        delay ? 'screenshot-shot--delay' : '',
        float ? 'screenshot-shot--float' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="screenshot-shot__inner">
        <Image
          src={screenshotPath(filename)}
          alt={alt}
          width={w}
          height={h}
          className="w-full h-auto block object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
      <div className="screenshot-shot__glow" aria-hidden="true" />
    </div>
  )
}
