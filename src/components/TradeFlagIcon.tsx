import React, { Suspense, lazy, ReactNode } from "react";
import { commonCodes, ICON_TYPE, IconsType } from "./util";

// Lazily load the Avatar component
const Avatar = lazy(() => import("../resources/common/Avatar"));

// Create the icons object with dynamic imports
const createIconsObject = (
  type:
    | ICON_TYPE.COMMODITIES
    | ICON_TYPE.CRYPTO
    | ICON_TYPE.FOREX
    | ICON_TYPE.METALS
    | ICON_TYPE.common
): IconsType => {
  const path = type === "forex" ? "forex" : "common";
  return commonCodes.reduce<IconsType>(
    (acc, code) => {
      acc[code] = lazy(() =>
        import(`../resources/${path}/${code}.tsx`).catch(() => Avatar)
      );
      return acc;
    },
    { Avatar }
  );
};

export interface Props {
  icon: string;
  type:
    | ICON_TYPE.COMMODITIES
    | ICON_TYPE.CRYPTO
    | ICON_TYPE.FOREX
    | ICON_TYPE.METALS
    | ICON_TYPE.common;
  className?: string;
  style?: React.CSSProperties;
}

const TradeFlagIcon: React.FC<Props> = ({ icon, type, className, style }) => {
  // Normalize the icon string to uppercase
  const iconString = icon.toUpperCase();

  // Create the icons object based on the type
  const icons = createIconsObject(type);

  // Determine the chunk size based on the type
  let chunks: string[] = [];
  if (type === "forex" || type === "commodities") {
    // Forex logic: Split into chunks of 3 characters
    chunks =
      iconString.length > 3
        ? [iconString.slice(0, 3), iconString.slice(3, 6)]
        : [iconString];
  } else if (type === "crypto") {
    // Crypto logic: Check for valid codes and split accordingly
    let i = 0;
    while (i < iconString.length) {
      let matched = false;
      for (const size of [2, 3, 4, 5, 6]) {
        if (i + size <= iconString.length) {
          const part = iconString.slice(i, i + size);
          if (commonCodes.includes(part)) {
            chunks.push(part);
            i += size;
            matched = true;
            break;
          }
        }
      }
      if (!matched) {
        let unrecognizedPart = iconString[i];
        i += 1;
        while (i < iconString.length) {
          let nextPart = iconString.slice(i, i + 1);
          for (const size of [2, 3, 4, 5, 6]) {
            if (
              i + size <= iconString.length &&
              commonCodes.includes(iconString.slice(i, i + size))
            ) {
              nextPart = "";
              break;
            }
          }
          if (nextPart) {
            unrecognizedPart += nextPart;
            i += 1;
          } else {
            break;
          }
        }
        chunks.push(unrecognizedPart);
      }
    }
  }

  const getIconComponent = (chunk: string): ReactNode => {
    const IconComponent = icons[chunk] || Avatar;
    const fallbackTxt = chunk[0];

    return (
      <Suspense key={chunk} fallback={<span>loading....</span>}>
        <IconComponent
          className={className}
          style={style}
          txt={IconComponent === Avatar ? fallbackTxt : undefined}
        />
      </Suspense>
    );
  };

  // Render the icons
  return (
    <>
      {chunks.map((chunk, index) => (
        <React.Fragment key={index}>{getIconComponent(chunk)}</React.Fragment>
      ))}
    </>
  );
};

export default TradeFlagIcon;
