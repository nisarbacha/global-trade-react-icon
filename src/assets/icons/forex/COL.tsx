const COL = ({ ...props }) => (
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
      <path fill="#d80027" d="m0 384 255.8-29.7L512 384v128H0z" />
      <path fill="#0052b4" d="m0 256 259.5-31L512 256v128H0z" />
      <path fill="#ffda44" d="M0 0h512v256H0z" />
    </g>
  </svg>
);
export default COL;
