import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Clickable SVG logo
const LogoLink = React.forwardRef(({ href, customClass, tagState }, ref) => {
  return (
    <a href={href} ref={ref}>
      <svg
        className={customClass}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 172.7 136.56"
      >
        <path
          className="tag"
          display={tagState}
          d="M100.57,121.59a5.07,5.07,0,0,1,1.58,1.61,4.51,4.51,0,0,1,.65,2.46,4.43,4.43,0,0,1-1.77,3.87,7.9,7.9,0,0,1-4.68,1.26H90.22v-18.9h5.42a7,7,0,0,1,4.39,1.18,4,4,0,0,1,1.53,3.33,4.52,4.52,0,0,1-.87,2.71,5.28,5.28,0,0,1-2,1.74A5.4,5.4,0,0,1,100.57,121.59Zm-8.76-1.14h3.51a5.14,5.14,0,0,0,3.37-1,3.35,3.35,0,0,0,1.25-2.74q0-3.41-4.7-3.4H91.81Zm8.13,8a3.2,3.2,0,0,0,1.27-2.67q0-3.84-4.95-3.84H91.81v7.48h4.32A6.22,6.22,0,0,0,99.94,128.41Z"
        />
        <path
          className="tag"
          display={tagState}
          d="M118,124.23H107.15a6.33,6.33,0,0,0,1.51,4.13,4.87,4.87,0,0,0,3.64,1.35A6.89,6.89,0,0,0,117,128l.94,1a8.25,8.25,0,0,1-2.51,1.54,9.19,9.19,0,0,1-3.35.54,6.66,6.66,0,0,1-3.24-.81,5.87,5.87,0,0,1-2.37-2.46,8.31,8.31,0,0,1-.89-4,9.19,9.19,0,0,1,.82-4.06,5.8,5.8,0,0,1,2.31-2.55,6.65,6.65,0,0,1,3.43-.87,5.84,5.84,0,0,1,3.3.9,5.46,5.46,0,0,1,2,2.37,7.81,7.81,0,0,1,.68,3.27A11.67,11.67,0,0,1,118,124.23Zm-9.43-5.15a5.42,5.42,0,0,0-1.48,3.74h9.56a6.13,6.13,0,0,0-1.26-3.71,4,4,0,0,0-3.28-1.39A4.82,4.82,0,0,0,108.6,119.08Z"
        />
        <path
          className="tag"
          display={tagState}
          d="M121.89,116.64h1.19l.29,2.08h.08a3.74,3.74,0,0,1,1.38-1.8,3.8,3.8,0,0,1,2.13-.61,2.48,2.48,0,0,1,1.38.3l-.27,1.43a5.73,5.73,0,0,0-1.43-.19q-2.22,0-3.24,3.05v9.89h-1.51Z"
        />
        <path
          className="tag"
          display={tagState}
          d="M138.72,116.72a5.85,5.85,0,0,1,1.8,1h.08l.57-1.13H142v14a5.81,5.81,0,0,1-1.61,4.48,6.2,6.2,0,0,1-4.38,1.48,9,9,0,0,1-3-.47,7.68,7.68,0,0,1-2.33-1.23l.78-1.21a7,7,0,0,0,4.35,1.43,5.39,5.39,0,0,0,3.33-1,3.43,3.43,0,0,0,1.28-3V128.6a6.35,6.35,0,0,1-4.53,1.81,6.77,6.77,0,0,1-3.26-.78,5.74,5.74,0,0,1-2.29-2.34,7.63,7.63,0,0,1-.85-3.74,7.71,7.71,0,0,1,1-4,6.28,6.28,0,0,1,2.56-2.43,7.23,7.23,0,0,1,3.32-.8A6.52,6.52,0,0,1,138.72,116.72Zm-4.88,1.63a4.64,4.64,0,0,0-1.92,1.93,6.51,6.51,0,0,0-.72,3.19,5.81,5.81,0,0,0,1.34,4.09A4.55,4.55,0,0,0,136,129a5.57,5.57,0,0,0,2.37-.52,6,6,0,0,0,2.05-1.61v-7.42a4.57,4.57,0,0,0-1.59-1.23,5.25,5.25,0,0,0-2.35-.5A5.67,5.67,0,0,0,133.84,118.35Z"
        />
        <path
          className="tag"
          display={tagState}
          d="M157.77,124.23H146.89a6.33,6.33,0,0,0,1.51,4.13,4.88,4.88,0,0,0,3.65,1.35,6.86,6.86,0,0,0,4.64-1.68l.94,1a8.25,8.25,0,0,1-2.51,1.54,9.13,9.13,0,0,1-3.34.54,6.66,6.66,0,0,1-3.24-.81,5.89,5.89,0,0,1-2.38-2.46,8.42,8.42,0,0,1-.89-4,9.19,9.19,0,0,1,.82-4.06,5.8,5.8,0,0,1,2.31-2.55,6.65,6.65,0,0,1,3.43-.87,5.87,5.87,0,0,1,3.31.9,5.46,5.46,0,0,1,2,2.37,7.81,7.81,0,0,1,.67,3.27A11.67,11.67,0,0,1,157.77,124.23Zm-9.42-5.15a5.39,5.39,0,0,0-1.49,3.74h9.56a6.07,6.07,0,0,0-1.26-3.71,4,4,0,0,0-3.28-1.39A4.78,4.78,0,0,0,148.35,119.08Z"
        />
        <path
          className="tag"
          display={tagState}
          d="M161.63,116.64h1.16l.25,2.21h0a8.19,8.19,0,0,1,2.19-1.89,5.74,5.74,0,0,1,2.86-.65,4.66,4.66,0,0,1,3.39,1.18,4.6,4.6,0,0,1,1.2,3.44v9.86h-1.57v-9.45a4,4,0,0,0-.79-2.81,3.09,3.09,0,0,0-2.31-.81,5.24,5.24,0,0,0-2.71.7,6.77,6.77,0,0,0-2.18,2.21v10.16h-1.51Z"
        />
        <path
          className="text"
          d="M7.09,83.17q3.14-6.28,8.06-6.29,4.43,0,6,5.2a16.52,16.52,0,0,1,.53,4.5v5.7q0,6.33.28,9.42a2,2,0,0,1-.61,1.72,2.2,2.2,0,0,1-1.46.6,1.91,1.91,0,0,1-1.34-.53c-.37-.35-.49-1.17-.35-2.46q.28-3,.28-6.54c0-2.36,0-4-.07-5s-.09-2.17-.12-3.6a10.37,10.37,0,0,0-.86-3.94A2.6,2.6,0,0,0,15,80.15a5,5,0,0,0-2.85.84,10.21,10.21,0,0,0-2.27,2.15,13.75,13.75,0,0,0-2.6,6.26q.14,8.4.46,12.3a2.15,2.15,0,0,1-.53,1.72,2.09,2.09,0,0,1-1.55.6c-1.19,0-1.79-.73-1.79-2.18l.49-39q0-7.49-.38-18.71a1.83,1.83,0,0,1,.61-1.67A2.32,2.32,0,0,1,6,41.9a1.8,1.8,0,0,1,1.32.54,2.55,2.55,0,0,1,.49,1.92c0,.91-.08,2.24-.12,4s-.1,3.72-.16,5.92-.11,4.57-.16,7.11-.09,5.12-.14,7.77-.08,5.29-.1,7.94C7.14,79.18,7.12,81.2,7.09,83.17Z"
        />
        <path
          className="text"
          d="M38.28,104.79a7.71,7.71,0,0,1-6.75-3.51q-2.78-3.87-2.78-11,0-6.39,3-10.09a9.07,9.07,0,0,1,7.45-3.51A7.82,7.82,0,0,1,45.66,80q2.64,3.58,2.64,9.85,0,7-3.06,11.11A8.5,8.5,0,0,1,38.28,104.79Zm3.23-24.43a4.51,4.51,0,0,0-2.72-.84,5,5,0,0,0-2.85.86,6.87,6.87,0,0,0-2.16,2.41C32.58,84.85,32,87.68,32,91.28s.57,6.25,1.72,8a5.3,5.3,0,0,0,4.6,2.57q3.16,0,5.07-3.63a17,17,0,0,0,1.68-7.94Q45.06,83,41.51,80.36Z"
        />
        <path
          className="text"
          d="M59.93,58q-.06,4.29-.12,9.28t-.05,15.4q0,10.4.28,19.26a2.37,2.37,0,0,1-.54,1.76,1.87,1.87,0,0,1-1.39.6,2.11,2.11,0,0,1-1.44-.55c-.43-.36-.6-1.19-.53-2.48s.14-3.23.23-5.81.15-5.4.22-8.42q.18-10,.18-16.72t0-10.11q0-3.37,0-6.22c-.05-3.56-.16-6.82-.35-9.78a2.31,2.31,0,0,1,.46-1.74,1.66,1.66,0,0,1,1.33-.61,2.21,2.21,0,0,1,1.5.61A3.14,3.14,0,0,1,60.25,45c0,1.22-.1,3-.16,5.31S60,55.18,59.93,58Z"
        />
        <path
          className="text"
          d="M74.88,66.75a3,3,0,0,1,.19,1.36,3.19,3.19,0,0,1-.37,1.35,3.29,3.29,0,0,1-.74.92,2.67,2.67,0,0,1-1.65.63A4,4,0,0,1,71,70.82a3.1,3.1,0,0,1-.88-.55,2.89,2.89,0,0,1-.91-2.21,2.48,2.48,0,0,1,.7-2,3.55,3.55,0,0,1,2.32-1A2.73,2.73,0,0,1,74.88,66.75ZM73.4,87.18q-.18,3.55-.18,6.4t.18,5.89a16.57,16.57,0,0,1,0,3.48,2,2,0,0,1-.44.72,1.81,1.81,0,0,1-1.3.6,2,2,0,0,1-1.32-.53c-.41-.35-.57-1.07-.48-2.15q.39-4.45.39-9c0-3,0-5.51-.12-7.4S70,81.85,70,80.89A6,6,0,0,1,70.09,79a1.61,1.61,0,0,1,.5-.66,1.88,1.88,0,0,1,1.33-.57,1.83,1.83,0,0,1,1.3.53A2.06,2.06,0,0,1,73.75,80C73.63,82.41,73.52,84.81,73.4,87.18Z"
        />
        <path
          className="text"
          d="M99.43,53.4c0,1.75-.06,3.61-.07,5.57s0,6.15,0,12.58.13,12.67.37,18.71.43,9.32.53,9.86a11.24,11.24,0,0,0,.35,1.37c.13.37.25.68.35.91a2,2,0,0,1,.16.85,1.16,1.16,0,0,1-.44.89,1.39,1.39,0,0,1-1,.41c-1.53,0-2.32-1.51-2.39-4.54v-.17q-2.32,4.95-7,5a7.68,7.68,0,0,1-6.46-3.3q-2.64-3.55-2.64-9.95,0-6.72,3.48-10.93a9.44,9.44,0,0,1,7.49-3.87,9,9,0,0,1,4.15.88c0-1.69,0-3.43,0-5.24,0-2.25,0-4.49-.07-6.73s0-4.41-.09-6.52-.06-4.09-.08-6q-.08-5.79-.18-7.8c-.07-1.34.11-2.19.53-2.55a2.12,2.12,0,0,1,1.42-.54,2.19,2.19,0,0,1,1.44.54,2.22,2.22,0,0,1,.53,2c-.08,1-.16,2.19-.23,3.69S99.47,51.64,99.43,53.4ZM96.57,88.55l0-7.42a7.28,7.28,0,0,0-3.85-1.3,6.64,6.64,0,0,0-3.16.72,7.39,7.39,0,0,0-2.44,2.17,13.45,13.45,0,0,0-2.47,8.47q0,7.41,3.41,9.77a4.41,4.41,0,0,0,2.57.78,4.77,4.77,0,0,0,2.46-.6,6,6,0,0,0,1.72-1.48,9.08,9.08,0,0,0,1.73-3.83C96.54,93.91,96.57,91.48,96.57,88.55Z"
        />
        <path
          className="text"
          d="M124,104.76c-1.41,0-2.11-1.07-2.11-3.2,0-.14,0-.54,0-1.2l-.7.85c-2.11,2.39-4.4,3.58-6.89,3.58a6.89,6.89,0,0,1-5-1.89,6.69,6.69,0,0,1-2-5,8.32,8.32,0,0,1,3.3-6.86,10.68,10.68,0,0,1,3.32-1.76,13.64,13.64,0,0,1,4.13-.59,11.37,11.37,0,0,1,3.73.63V85.56a7.17,7.17,0,0,0-1.28-4.64,3.55,3.55,0,0,0-2.66-1.54,5.86,5.86,0,0,0-2.23.35,4.56,4.56,0,0,0-1.53,1,5.62,5.62,0,0,0-1.69,3.58,1.7,1.7,0,0,1-.45,1.57,2,2,0,0,1-1.23.44c-1.27,0-1.88-.85-1.83-2.53A6.58,6.58,0,0,1,111.51,79a9,9,0,0,1,6-2.28q4.92,0,6.64,4.89a11.88,11.88,0,0,1,.6,3.86V89l0,5.91v3.13a9.5,9.5,0,0,0,.51,3.41,6.06,6.06,0,0,1,.51,1.84,1.25,1.25,0,0,1-.53,1A1.83,1.83,0,0,1,124,104.76Zm-2.25-8q0-1.94,0-4.74a11.86,11.86,0,0,0-3.83-.53,8.3,8.3,0,0,0-5.14,1.51,6.1,6.1,0,0,0-1.58,1.88,6,6,0,0,0-.6,2.85,3.86,3.86,0,0,0,1.2,2.9,4.88,4.88,0,0,0,3.52,1.16c1.54,0,3.27-1,5.16-3.16A7.46,7.46,0,0,0,121.74,96.81Z"
        />
        <path
          className="text"
          d="M147.84,78a1.51,1.51,0,0,1,.58.74,1.38,1.38,0,0,1,0,1,6.87,6.87,0,0,1-.65,1.34l-1.14,2c-.45.79-1,1.71-1.62,2.76s-1.3,2.17-2,3.33-1.45,2.33-2.2,3.53-1.47,2.37-2.18,3.52c-1.31,2.15-2.32,3.82-3,5h2.92a73.57,73.57,0,0,0,7.52-.64,2.36,2.36,0,0,1,1.73.29,1.28,1.28,0,0,1,.7,1,3.33,3.33,0,0,1-.12,1,1.57,1.57,0,0,1-.44.67,2.13,2.13,0,0,1-1.8.65c-.72-.06-1.37-.09-1.93-.09h-1.76c-1.38,0-2.75,0-4.09,0l-3.17.09a5.25,5.25,0,0,1-1.67-.14,2.92,2.92,0,0,1-.88-.46,1.74,1.74,0,0,1-.7-1.44,3.71,3.71,0,0,1,.53-1.86c.35-.61.85-1.42,1.51-2.43s1.37-2.11,2.14-3.32l2.43-3.78q1.26-2,2.5-3.94c1.47-2.43,2.62-4.44,3.44-6h-1.76c-1.85,0-3.42,0-4.71.16l-2.92.23a2.1,2.1,0,0,1-1.61-.49,1.69,1.69,0,0,1-.64-1.29A1.83,1.83,0,0,1,133.5,78a2.47,2.47,0,0,1,1.95-.53c2.3.19,4.06.28,5.27.28a41.24,41.24,0,0,0,4.7-.15,4.14,4.14,0,0,1,1.46-.06A2.43,2.43,0,0,1,147.84,78Z"
        />
        <path
          className="text"
          d="M156.76,91.89c0,3.24.63,5.71,1.75,7.42a5.85,5.85,0,0,0,5.17,2.74,4.68,4.68,0,0,0,4.47-3c.58-1.31,1.31-2,2.18-2a1.4,1.4,0,0,1,1,.39,1.74,1.74,0,0,1,.37,1.35,4.71,4.71,0,0,1-.69,2.09,6.84,6.84,0,0,1-1.81,2,9.61,9.61,0,0,1-6.08,2,8.41,8.41,0,0,1-6.61-3.27,12.22,12.22,0,0,1-2.92-8.19,29.56,29.56,0,0,1,.83-7.71,16.25,16.25,0,0,1,2.19-4.94c1.79-2.65,4-4,6.68-4q5.15,0,7.21,4c1,1.87,1.48,4.63,1.55,8.26a2.9,2.9,0,0,1-.49,2.07,3.16,3.16,0,0,1-2.15.53Zm12.05-3.06c.05-4.08-.8-6.86-2.56-8.36a3.68,3.68,0,0,0-2.57-1,5,5,0,0,0-2.5.56,6.19,6.19,0,0,0-1.74,1.51,9.14,9.14,0,0,0-1.26,2.16,17.19,17.19,0,0,0-.83,2.48,20.82,20.82,0,0,0-.45,2.64l4.81.21Q166.42,89.08,168.81,88.83Z"
        />
        <line className="cls-2" x1="0.71" y1="33.18" x2="32.21" y2="1.68" />
        <rect
          className="line"
          x="-5.82"
          y="16.43"
          width="44.55"
          height="2"
          transform="translate(-7.51 16.74) rotate(-45)"
        />
        <line className="cls-2" x1="63.26" y1="32.21" x2="31.76" y2="0.71" />
        <rect
          className="line"
          x="46.51"
          y="-5.82"
          width="2"
          height="44.55"
          transform="translate(2.28 38.42) rotate(-45)"
        />
        <line className="cls-2" x1="63.26" y1="30.71" x2="79.54" y2="14.43" />
        <rect
          className="line"
          x="59.89"
          y="21.65"
          width="23.02"
          height="2"
          transform="translate(4.9 57.12) rotate(-45)"
        />
        <line className="cls-2" x1="101.84" y1="36.35" x2="79.07" y2="13.57" />
        <rect
          className="line"
          x="89.45"
          y="8.86"
          width="2"
          height="32.21"
          transform="translate(8.84 71.27) rotate(-45)"
        />
      </svg>
    </a>
  );
});
LogoLink.displayName = "LogoLink";

function Logo({ customClass, includeTag }) {
  let tagState = null;
  if (includeTag) {
    tagState = "inline";
  } else {
    tagState = "none";
  }
  return (
    <Link href="/" passHref>
      <LogoLink customClass={customClass} tagState={tagState} />
    </Link>
  );
}

Logo.propTypes = {
  customClass: PropTypes.string,
  includeTag: PropTypes.bool,
};
Logo.defaultProps = {
  includeTag: false,
};

export default Logo;