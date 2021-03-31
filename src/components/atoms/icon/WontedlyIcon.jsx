import Image from 'next/image'

export function WontedlyIcon() {
  return (
    <div>
      <Image
        src="/wontedly.png"
        alt="wontedlyのアイコン画像"
        width={55}
        height={40}
      />
    </div>
  )
}
