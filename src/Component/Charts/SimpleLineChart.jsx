import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";


// eslint-disable-next-line react/prop-types
const SimpleLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Line type="monotone" dataKey="value" stroke="#20b2ab3d" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};
export default SimpleLineChart