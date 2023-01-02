const Loading = () => (
  <svg x="0px" y="0px" viewBox="0 0 50 40" enableBackground="new 0 0 50 40">
    <g fill="#000000">
      <rect x="10" y="5" width="5" height="30">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.1"
        />
      </rect>
      <rect x="20" y="5" width="5" height="30">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.2"
        />
      </rect>
      <rect x="30" y="5" width="5" height="30">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.3"
        />
      </rect>
      <rect x="40" y="5" width="5" height="30">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.4"
        />
      </rect>
      <rect x="50" y="5" width="5" height="30">
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin="0.5"
        />
      </rect>
    </g>
  </svg>
)

export default Loading
