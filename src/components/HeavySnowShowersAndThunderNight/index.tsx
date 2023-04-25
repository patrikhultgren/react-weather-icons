import { useId } from 'react'
import IconWrapper, { IconProps } from '../IconWrapper'

const HeavySnowShowersAndThunderNight = ({
  title,
  size,
  ...rest
}: IconProps) => {
  const cloud = useId()
  const snowflake = useId()
  const moon = useId()
  const moonGrad = useId()
  const s34 = useId()
  const s29n = useId()
  const lightning = useId()
  const cloudMask2 = useId()
  const lightningMask = useId()

  return (
    <IconWrapper title={title} size={size} {...rest}>
      <symbol id={snowflake}>
        <path
          fill="#47c0e3"
          d="M11.68,4.47H8.85L10.27,2A1.35,1.35,0,1,0,7.93.67L6.51,3.12,5.1.67A1.35,1.35,0,0,0,3.26.18,1.35,1.35,0,0,0,2.76,2L4.18,4.47H1.35a1.35,1.35,0,1,0,0,2.7H4.18L2.76,9.62a1.35,1.35,0,0,0,.49,1.84A1.39,1.39,0,0,0,5.1,11L6.51,8.52,7.93,11a1.35,1.35,0,1,0,2.34-1.35L8.85,7.17h2.83a1.35,1.35,0,1,0,0-2.7Z"
        ></path>
      </symbol>
      <symbol id={lightning}>
        <polygon
          fill="#ffdd15"
          points="19.6 23.42 12.74 20.39 15.55 5 5 24.49 12.08 27.51 7.49 45 19.6 23.42"
        ></polygon>
      </symbol>
      <symbol id={cloud}>
        <path d="M55.7,5A23.94,23.94,0,0,0,34.37,18.05a9.9,9.9,0,0,0-12.78,5.56,15,15,0,0,0-1.71-.1A14.81,14.81,0,0,0,9.2,28,14.63,14.63,0,0,0,5,38.17v.21A14.83,14.83,0,0,0,19.88,53.06H75.59a14.3,14.3,0,0,0,3.67-28.14A23.93,23.93,0,0,0,55.7,5Z"></path>
        <image
          x="5"
          y="14"
          width="85"
          height="43"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAkCAMAAAAkYj0PAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURSgoKExpcaCgoFBQUG5ublBQUISEhI1fsT0AAAAHdFJOUxsACBsPFRpGXuFgAAABWElEQVRIx7XV25bDIAgF0BMu/v8nF/E+iWlqHNKVN3cpIMXxL4GFM3SQfTazkUyxk63oLYwlVSy2silXkS/wUrZS2a3ZCn1zsdSw7UUYijuHsTa1IvfwWrbSXLkc4N9r27JViwmM1UtWXA3hohQ41m6vl8FQZi7wu2z7KXPW4uRiZS+2AmdXN7DdQEQWQHYHlt6z0dXBBa2xeeVktiZc1jDoF5eGkI4d4MjKc7cNbZ3bqjocLLx5oPDYTaIftcfvAvcs2GFxVsJTOP1wO1jGdUSLaz/DWA1Tl45+Tkqul2ArcPzayGq8JafOUffP3TUp6JQs+Rptc6vtmtBkUw+dv0NzWG0PYf8O7Ym09+ITXyXOPZqEX95aFe3PKxRsL2XV3HR+ZALirPSF0ceHp6F51WBv1A22VaW2GHWzWvat8LOAPf4CrjrA+neNK7+PQBf/DmmLrId09/QDWyESBsibwBUAAAAASUVORK5CYII="
        ></image>
      </symbol>
      <symbol id={s34}>
        <g mask={`url(#${lightningMask})`}>
          <use
            xlinkHref={`#${cloud}`}
            fill="#999999"
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(3,18) scale(1,1)"
          ></use>
        </g>
        <use
          xlinkHref={`#${lightning}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(37,51) scale(1,1)"
        ></use>
        <use
          xlinkHref={`#${snowflake}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(13,79) scale(1,1)"
        ></use>
        <use
          xlinkHref={`#${snowflake}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(27,88) scale(1,1)"
        ></use>
        <use
          xlinkHref={`#${snowflake}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(55,79) scale(1,1)"
        ></use>
        <use
          xlinkHref={`#${snowflake}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(69,88) scale(1,1)"
        ></use>
        <use
          xlinkHref={`#${snowflake}`}
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(83,79) scale(1,1)"
        ></use>
      </symbol>
      <symbol id={moon}>
        <path
          d="M28.43,0A28.44,28.44,0,0,1,32.3,14.32,28.61,28.61,0,0,1,3.69,42.93,28.71,28.71,0,0,1,0,42.66,28.59,28.59,0,1,0,28.43,0Z"
          fill={`url(#${moonGrad})`}
        ></path>
      </symbol>
      <defs>
        <mask id={cloudMask2}>
          <rect x="0" y="0" width="100" height="100" fill="white"></rect>
          <use
            xlinkHref={`#${cloud}`}
            fill="black"
            stroke="black"
            stroke-linejoin="round"
            stroke-width="10"
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(3,18) scale(1,1)"
          ></use>
        </mask>
        <linearGradient id={moonGrad} x1="0%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#686e73" />
          <stop offset="100%" stop-color="#6a7075" />
        </linearGradient>
        <mask id={lightningMask}>
          <rect x="0" y="0" width="100" height="100" fill="white"></rect>
          <use
            xlinkHref={`#${lightning}`}
            fill="black"
            stroke="black"
            stroke-linejoin="round"
            stroke-width="8"
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(37,51) scale(1,1)"
          ></use>
        </mask>
      </defs>
      <symbol id={s29n}>
        <g mask={`url(#${cloudMask2})`}>
          <use
            xlinkHref={`#${moon}`}
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(2,5) scale(0.714285714,0.714285714)"
          ></use>
        </g>
        <use xlinkHref={`#${s34}`} x="0" y="0" width="100" height="100"></use>
      </symbol>
      <use xlinkHref={`#${s29n}`} x="0" y="0" width="100" height="100"></use>
    </IconWrapper>
  )
}

export default HeavySnowShowersAndThunderNight
