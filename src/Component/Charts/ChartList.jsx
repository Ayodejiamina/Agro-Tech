

// eslint-disable-next-line react/prop-types
export default function ChartList({ title, rate, time, chart, color }) {
    return (
        <div className='col-span-1 eachColumn rounded-md flex items-center'>
            <div className='text-white px-2 w-[60%] h-full'>
                <p className='title'>{title}</p>
                <div className='mt-3'>
                    <h2 className='text-2xl' style={{ color }}>{rate}</h2>
                    {time && <small>at {time}</small>}
                </div>
            </div>
            <div style={{ width: "40%", height: "100px" }} className="flex justify-center items-center">{chart}</div>
        </div>
    )
}
