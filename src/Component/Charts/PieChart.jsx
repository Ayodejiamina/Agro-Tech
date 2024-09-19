
const PieChart = () => {
  const size = 100;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;

  // Angle for 35% of the circle (0.6 * 360 = 30 degrees)
  const angle = 35;
  const endAngle = angle * Math.PI / 180;

  // Calculate end point of arc
  const endX = centerX + radius * Math.cos(endAngle);
  const endY = centerY + radius * Math.sin(endAngle);

  // Create arc path
  const largeArcFlag = angle <= 180 ? "0" : "1";
  const path = [
    `M ${centerX},${centerY}`,
    `L ${centerX},${centerY - radius}`,
    `A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`,
    "Z"
  ].join(" ");

  return (
    <svg width="80px" height="80px" viewBox={`0 0 ${size} ${size}`}>
      <circle cx={centerX} cy={centerY} r={radius} fill="#ffffff20" />
      <path d={path} fill="#22c55e" />
    </svg>
  );
};

export default PieChart;