const MDG = ({ ...props }) => (
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
      <path fill="#eee" d="M0 0h167l45.6 257.6L167.1 512H0z" />
      <path fill="#d80027" d="M167 0h345v256l-176.7 53.5L166.9 256z" />
      <path fill="#6da544" d="M167 256h345v256H167z" />
    </g>
  </svg>
);
export default MDG;
