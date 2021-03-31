import Image from 'next/image'

export function ProfileIcon() {
  return (
    <div>
      <Image
        src="/muchan.png"
        alt="profile(むちゃん)のアイコン画像"
        width={550}
        height={550}
      />
    </div>
  )
}
