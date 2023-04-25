import { useId } from 'react'
import IconWrapper, { IconProps } from '../IconWrapper'

const FairNight = ({ title, size, ...rest }: IconProps) => {
  const cloud = useId()
  const moon = useId()
  const moonGrad = useId()
  const s02n = useId()

  return (
    <IconWrapper title={title} width={size} height={size} {...rest}>
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
      <symbol id={moon}>
        <path
          d="M28.43,0A28.44,28.44,0,0,1,32.3,14.32,28.61,28.61,0,0,1,3.69,42.93,28.71,28.71,0,0,1,0,42.66,28.59,28.59,0,1,0,28.43,0Z"
          fill={`url(#${moonGrad})`}
        ></path>
      </symbol>
      <defs>
        <mask id="cloud_43_37_063_063_5">
          <rect x="0" y="0" width="100" height="100" fill="white"></rect>
          <use
            xlinkHref={`#${cloud}`}
            fill="black"
            stroke="black"
            strokeLinejoin="round"
            strokeWidth="10"
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(43,37) scale(0.63,0.63)"
          ></use>
        </mask>
        <linearGradient id={moonGrad} x1="0%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#686e73" />
          <stop offset="100%" stopColor="#6a7075" />
        </linearGradient>
      </defs>
      <symbol id={s02n}>
        <g mask="url(#cloud_43_37_063_063_5)">
          <use
            xlinkHref={`#${moon}`}
            x="0"
            y="0"
            width="100"
            height="100"
            transform="translate(15,20) scale(1,1)"
          ></use>
        </g>
        <use
          xlinkHref={`#${cloud}`}
          fill="#dddddd"
          x="0"
          y="0"
          width="100"
          height="100"
          transform="translate(43,37) scale(0.63,0.63)"
        ></use>
      </symbol>
      <use xlinkHref={`#${s02n}`} x="0" y="0" width="100" height="100"></use>
    </IconWrapper>
  )
}

export default FairNight
