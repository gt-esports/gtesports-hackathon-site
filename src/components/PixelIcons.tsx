
type IconProps = {
  className?: string;
  size?: number;
};

export const PixelHome = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    {/* Roof */}
    <path d="M7 0h2v1H7V0zM6 1h1v1H6V1zM9 1h1v1H9V1zM5 2h1v1H5V2zM10 2h1v1h-1V2zM4 3h1v1H4V3zM11 3h1v1h-1V3zM3 4h1v1H3V4zM12 4h1v1h-1V4zM2 5h1v1H2V5zM13 5h1v1h-1V5zM1 6h1v1H1V6zM14 6h1v1h-1V6z" />
    {/* Body */}
    <path d="M2 7h12v9H2V7zm5 4h2v5H7v-5z" />
  </svg>
);

export const PixelCalendar = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    {/* Border */}
    <path d="M2 2h12v12H2V2zm2-2h2v3H4V0zm6 0h2v3h-2V0z" />
    {/* Inner detail (header line) */}
    <rect x="4" y="5" width="8" height="1" />
    {/* Dots for days */}
    <rect x="4" y="8" width="2" height="2" />
    <rect x="7" y="8" width="2" height="2" />
    <rect x="10" y="8" width="2" height="2" />
    <rect x="4" y="11" width="2" height="2" />
    <rect x="7" y="11" width="2" height="2" />
  </svg>
);

export const PixelMoneyBag = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    {/* Bag Shape */}
    <path d="M5 4h6v1H5V4zm-1 1h8v1H4V5zm-1 1h10v6H3V6zm1 6h8v1H4v-1zm1 1h6v1H5v-1z" />
    {/* Tie String */}
    <path d="M6 2h4v1H6V2zM7 3h2v1H7V3z" />
    {/* Dollar Sign / Symbol */}
    <rect x="7" y="7" width="2" height="4" fill="var(--bg-color)" style={{ fill: 'rgba(255,255,255,0.9)' }} />
  </svg>
);

export const PixelHeart = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <path d="M3 3h3v1H3zM10 3h3v1H10zM2 4h5v1H2zM9 4h5v1H9zM1 5h14v2H1zM2 7h12v1H2zM3 8h10v1H3zM4 9h8v1H4zM5 10h6v1H5zM6 11h4v1H6zM7 12h2v1H7z" />
  </svg>
);

export const PixelUsers = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    {/* Person 1 (Left, slightly back) */}
    <path d="M3 5h4v4H3V5zm1 4h2v1H4V9zm-2 2h6v5H2v-5z" />
    {/* Person 2 (Right, front) */}
    <path d="M9 3h4v4H9V3zm1 4h2v1h-2V7zm-2 2h6v7H8V9z" />
  </svg>
);

export const PixelMenu = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <rect x="2" y="3" width="12" height="2" />
    <rect x="2" y="7" width="12" height="2" />
    <rect x="2" y="11" width="12" height="2" />
  </svg>
);

export const PixelSignIn = ({ className, size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    {/* Door Frame - Using correct winding or evenodd rule to ensure hole isn't filled */}
    <path fillRule="evenodd" clipRule="evenodd" d="M3 1h8v14H3V1zm2 2h4v10H5V3z" />
    {/* Arrow */}
    <path d="M10 7h3v2h-3v2l-3-3 3-3v2z" />
  </svg>
);
