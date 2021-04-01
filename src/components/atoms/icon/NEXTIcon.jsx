import Image from 'next/image'

export function NEXTIcon() {
  return (
    <div>
      <Image
        src="/nextjs.svg"
        alt="Nextjsアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
