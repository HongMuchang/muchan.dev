import Image from 'next/image'

export function HTMLIcon() {
  return (
    <div>
      <Image src="/html.svg" alt="htmlのアイコン画像" width={70} height={70} />
    </div>
  )
}
