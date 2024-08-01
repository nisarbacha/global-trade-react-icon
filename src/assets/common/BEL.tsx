const BEL = ({ ...props }) => (
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
      <path fill="#333" d="M0 0h167l38.2 252.6L167 512H0z" />
      <path fill="#d80027" d="M345 0h167v512H345l-36.7-256z" />
      <path fill="#ffda44" d="M167 0h178v512H167z" />
    </g>
  </svg>
);
export default BEL;
