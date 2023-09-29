export default function RotatingText() {
  return (
    <div id="circle-container" className="flex w-full h-full overflow-hidden items-end">
      <div id="circle" className="flex w-full max-lg:justify-center lg:justify-end">
        <svg
          viewBox="0 0 300 300"
          enable-background="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          {/* <circle cx="150" cy="100" r="75" fill="none" /> */}
          <g>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath">codable · codable · </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
