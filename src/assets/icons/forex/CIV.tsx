const CIV = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="a">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#a)">
      <path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z" />
      <path fill="#ff9811" d="M0 0h167v512H0z" />
      <path fill="#6da544" d="M345 0h167v512H345z" />
    </g>
  </svg>
);
export default CIV;
