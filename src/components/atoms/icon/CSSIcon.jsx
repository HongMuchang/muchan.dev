import Image from 'next/image'

export function CSSIcon() {
  return (
    <div>
      <Image src="/css.svg" alt="cssのアイコン画像" width={70} height={70} />
    </div>
  )
}
