import { useId } from 'react'
import IconWrapper, { IconProps } from '../IconWrapper'

const ClearSkyNight = ({ title, size, ...rest }: IconProps) => {
  const moon = useId()
  const moonGrad = useId()
  const s01n = useId()

  return (
    <IconWrapper title={title} size={size} {...rest}>
      <symbol id={moon}>
        <path
          d="M28.43,0A28.44,28.44,0,0,1,32.3,14.32,28.61,28.61,0,0,1,3.69,42.93,28.71,28.71,0,0,1,0,42.66,28.59,28.59,0,1,0,28.43,0Z"
          fill={`url(#${moonGrad})`}
        ></path>
      </symbol>
      <defs>
        <linearGradient id={moonGrad} x1="0%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#686e73" />
          <stop offset="100%" stopColor="#6a7075" />
        </linearGradient>
      </defs>
      <symbol id={s01n}>
        <use
          xlinkHref={`#${moon}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(20,20) scale(1,1)"
        ></use>
      </symbol>
      <use xlinkHref={`#${s01n}`} x="0" y="0" width="100" height="100"></use>
    </IconWrapper>
  )
}

export default ClearSkyNight
