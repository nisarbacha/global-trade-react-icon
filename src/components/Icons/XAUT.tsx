const XAUT = ({ ...props }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#a)" fill-rule="evenodd" clip-rule="evenodd">
      <path
        d="M3.665 1.089.016 8.75a.143.143 0 0 0 .03.171l9.848 9.442a.154.154 0 0 0 .207 0l9.854-9.442a.144.144 0 0 0 .03-.17l-3.649-7.662a.134.134 0 0 0-.13-.089H3.793a.147.147 0 0 0-.13.089Z"
        fill="url(#b)"
      />
      <path
        d="M11.268 9.534c-.071.006-.437.03-1.25.03-.648 0-1.108-.018-1.273-.03-2.505-.112-4.373-.548-4.373-1.067 0-.518 1.868-.96 4.373-1.072v1.703c.163.012.63.041 1.279.041.778 0 1.167-.035 1.238-.04V7.394c2.498.112 4.367.548 4.367 1.066 0 .519-1.863.961-4.361 1.073Zm0-2.31V5.697h3.489V3.37h-9.5v2.328h3.488v1.527c-2.835.13-4.968.69-4.968 1.367 0 .678 2.133 1.232 4.968 1.367v4.886h2.523V9.959c2.828-.13 4.956-.69 4.956-1.361 0-.672-2.128-1.244-4.957-1.373Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="0"
        y1="16.5"
        x2="20"
        y2="-3.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D8B35D" />
        <stop offset="1" stop-color="#F5E7BF" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default XAUT;
