import Image from 'next/image'

export function JSIcon() {
  return (
    <div>
      <Image
        src="/js.svg"
        alt="JavaScriptのアイコン画像"
        width={70}
        height={70}
      />
    </div>
  )
}
