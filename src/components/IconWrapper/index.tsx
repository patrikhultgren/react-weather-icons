import { ReactNode } from 'react'

type IProps = React.SVGProps<SVGSVGElement> & {
  title: string
  size?: string | number
  x?: string | number
  y?: string | number
  children: ReactNode
}

const IconWrapper = ({
  className,
  x = 0,
  y = 0,
  size = '2.5rem',
  title,
  children,
  ...rest
}: IProps) => {
  return (
    <svg
      x={x}
      y={y}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}

export default IconWrapper
