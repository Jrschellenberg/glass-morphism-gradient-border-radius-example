import App from "../App";

function LineRight({width, height = 484}){
  if(!height){
    return null;
  }
  return (
      <svg width="46" height="484" viewBox="0 0 46 484" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_423_624)">
          <path d="M0 2H26C35.9411 2 44 10.0589 44 20V464C44 473.941 35.9411 482 26 482H0" stroke="url(#paint0_linear_423_624)" stroke-width="4"/>
        </g>
        <defs>
          <filter id="filter0_b_423_624" x="-40" y="-40" width="126" height="564" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="20"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_423_624"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_423_624" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_423_624" x1="60.683" y1="-13.109" x2="-680.812" y2="2.66845" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9AEEEB" stop-opacity="0.72"/>
            <stop offset="1" stop-color="#669CF8" stop-opacity="0.16"/>
          </linearGradient>
        </defs>
      </svg>


  )
}

export default LineRight;