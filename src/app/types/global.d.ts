declare module '*.scss' {
  type IClassName = Record<string, string>

  const classNames: IClassName
  export = classNames
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS__DEV__: boolean
