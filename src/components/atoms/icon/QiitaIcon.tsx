import { FC } from 'react'
import Image from 'next/image'

export const QiitaIcon:FC = () => {
  return (
    <div>
      <Image src="/qiita.png" alt="Qiita icon" width={35} height={35} />
    </div>
  )
}
