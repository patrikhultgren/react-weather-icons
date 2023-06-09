import { useId } from 'react'
import IconWrapper, { IconProps } from '../IconWrapper'

const ClearSkyPolarTwilight = ({ title, size, ...rest }: IconProps) => {
  const sun = useId()
  const sunGlowGrad = useId()
  const sunInnerGrad = useId()
  const sunWinter = useId()
  const sunWinterMask = useId()
  const s01m = useId()

  return (
    <IconWrapper title={title} size={size} {...rest}>
      <symbol id={sun}>
        <path
          className="sun-glow"
          fill={`url(#${sunGlowGrad})`}
          d="M66.64,47.86,82,41,66.64,34.12l9.84-13.66L59.76,22.22,61.46,5.47l-13.6,9.89L41,0,34.12,15.36,20.46,5.52l1.76,16.72L5.47,20.54l9.89,13.6L0,41l15.36,6.83L5.52,61.54l16.72-1.76L20.54,76.53l13.6-9.89L41,82l6.83-15.36,13.66,9.84L59.78,59.76l16.75,1.69Z"
        ></path>
        <path
          className="sun-outer"
          fill="#ffd348"
          d="M19.28,53.5a25,25,0,1,0,9.15-34.16A25,25,0,0,0,19.28,53.5Z"
        ></path>
        <path
          className="sun-inner"
          fill={`url(#${sunInnerGrad})`}
          d="M22.74,51.5a21,21,0,1,0,7.69-28.69A21,21,0,0,0,22.74,51.5Z"
        ></path>
      </symbol>
      <symbol id={sunWinter}>
        <g mask={`url(#${sunWinterMask})`}>
          <use
            className="sun-primitive"
            xlinkHref={`#${sun}`}
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(4,-40) scale(1,1)"
          ></use>
        </g>
        <path
          fill="#333333"
          d="M88.29,2.7H1.71A1.56,1.56,0,0,1,0,1.35,1.56,1.56,0,0,1,1.71,0H88.29A1.56,1.56,0,0,1,90,1.35,1.56,1.56,0,0,1,88.29,2.7Z"
        ></path>
      </symbol>
      <defs>
        <mask id={sunWinterMask}>
          <rect x="0" y="0" width="100" height="100" fill="white"></rect>
        </mask>
        <radialGradient
          id={sunGlowGrad}
          cx="41"
          cy="41"
          r="41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="54%" stopColor="#d6b849" />
          <stop offset="67%" stopColor="#ffce47" />
          <stop offset="100%" stopColor="#ffdb73" />
        </radialGradient>
        <linearGradient id={sunInnerGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffaf22" />
          <stop offset="100%" stopColor="#f09900" />
        </linearGradient>
      </defs>
      <symbol id={s01m}>
        <use
          xlinkHref={`#${sunWinter}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(5,37) scale(1,1)"
        ></use>
      </symbol>
      <use xlinkHref={`#${s01m}`} x="0" y="0" width="100" height="100"></use>
    </IconWrapper>
  )
}

export default ClearSkyPolarTwilight
