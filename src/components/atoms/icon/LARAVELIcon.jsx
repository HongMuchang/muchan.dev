import Image from 'next/image'

export function LARAVELIcon() {
  return (
    <div>
      <Image
        src="/laravel.svg"
        alt="Laravelアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
