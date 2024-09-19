
// eslint-disable-next-line react/prop-types
const GaugeChart = ({ value, maxValue, title, unit, color }) => {
    const size = 150;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI; // Half circumference for a semicircle
    const strokeDashoffset = circumference - (value / maxValue) * circumference;

    return (
        <div style={{ width: size, height: size / 2, position: 'relative' }}>
            <svg width={size} height={size / 2}>
                <path
                    d={`M ${strokeWidth / 2} ${size / 2} 
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
                    stroke="#2a2a2a"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                />
                <path
                    d={`M ${strokeWidth / 2} ${size / 2} 
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
                    stroke={color}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            <div
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}
            >
                <div style={{ fontSize: '25px', fontWeight: 'bold', color: '#20b2ab3d ', display: 'inline ' }}>{value}</div>
                <div style={{ fontSize: '25px', color: '#20b2ab3d', display: 'inline ' }}>{unit}</div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '90%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '12px',
                    color: '#fff',
                    textAlign: 'center',

                }}
            >
                {title}
            </div>
        </div>
    );
};
export default GaugeChart
