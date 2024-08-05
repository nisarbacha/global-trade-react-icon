import React from "react";

interface AvatarProps extends React.SVGProps<SVGSVGElement> {
  txt?: string;
}

const generateColor = (): { bgColor: string; textColor: string } => {
  const randomColor = () =>
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  const bgColor = `#${randomColor()}`;
  const textColor =
    parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2 ? "#000000" : "#fff";
  return { bgColor, textColor };
};

const Avatar: React.FC<AvatarProps> = ({
  txt = "",
  className,
  style,
  ...props
}) => {
  const { bgColor, textColor } = React.useMemo(generateColor, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      className={className}
      style={style}
      {...props}
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill={bgColor} d="M0 0h512v512H0z" />
      </g>
      {txt && (
        <text
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Gill Sans, sans-serif"
          fill={textColor}
          fontSize="200"
          fontWeight="bold"
          dy=".3em" // Adjust vertical alignment
        >
          {txt}
        </text>
      )}
    </svg>
  );
};

export default Avatar;
