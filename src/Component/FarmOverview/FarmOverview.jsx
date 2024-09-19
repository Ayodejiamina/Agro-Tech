import SimpleLineChart from '../Charts/SimpleLineChart';
import PieChart from '../Charts/PieChart';
import GaugeChart from '../Charts/GaugeChart ';
import Weather from '../Charts/Weather';
import './FarmOverview.css'
import ChartList from '../ChartList';
function FarmOverview() {
    const lineChartData = [
        { name: "Page A", value: 1000 },
        { name: "Page B", value: 4000 },
        { name: "Page C", value: 2000 },
        { name: "Page D", value: 2780 },
        { name: "Page E", value: 1890 },
        { name: "Page F", value: 2390 },
        { name: "Page G", value: 1490 },
    ];
    const lineChartData2 = [
        { name: "Page A", value: 2000 },
        { name: "Page B", value: 3000 },
        { name: "Page C", value: 2000 },
        { name: "Page D", value: 4780 },
        { name: "Page E", value: 2890 },
        { name: "Page F", value: 2390 },
        { name: "Page G", value: 1490 },
    ];
    const lineChartData3 = [
        { name: "Page A", value: 2000 },
        { name: "Page B", value: 2000 },
        { name: "Page C", value: 3000 },
        { name: "Page D", value: 4780 },
        { name: "Page E", value: 2890 },
        { name: "Page F", value: 5390 },
        { name: "Page G", value: 6490 },
    ];

    return (
        <>
            <div className='general p-5'>
                <section >
                    <header >
                        <h2 className="text-[#20b2ab91] text-2xl">Farming Overview .</h2>
                    </header>
                    <div className="subheader flex text-white my-4">
                        <div className="flex items-center ">
                            <p >Field1</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
                        </div>
                        <div className="flex items-center ml-6">
                            <p>Today </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z" /></svg>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>

                        <ChartList title="Total Water Consumption" rate="400.5l" time="10:15am" chart={<SimpleLineChart data={lineChartData} />} color="white" />

                        <ChartList title="Current Water Requirement" rate="200 l/m2" time="10:15am" chart={<SimpleLineChart data={lineChartData2} />} color="#f97316" />

                        <ChartList title="Total Rainfall" rate="1.2m" time="11:15am" chart={<SimpleLineChart data={lineChartData3} />} color="#f97316" />

                        <ChartList title="Tank Level" rate="35%" chart={<PieChart />} color=" #22c55e" />

                    </div>
                </section>
                <section className='my-5'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2   gap-7'>
                        <div className='col-span-2 sensor rounded-md px-5'>
                            <h3 className='text-white my-4 text-1xl'>Sensors Overview</h3>
                            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-7'>
                                <div className='col-span-1'>
                                    <GaugeChart value={78} maxValue={100} title="Temperature" unit="°C" color="#4CAF50" />
                                </div>
                                <div className='col-span-1'>
                                    <GaugeChart value={78} maxValue={100} title="Humidity" unit="%" color="#FFA000" />
                                </div>
                                <div className='col-span-1'>
                                    <GaugeChart value={90} maxValue={100} title="Wind speed (m/s)" unit="" color="#FFA000" />
                                </div>
                                <div className='col-span-1 mt-6'>
                                    <GaugeChart value={0} maxValue={100} title="Soil moisture" unit="" color="#FFA000" />
                                </div>
                                <div className='col-span-1 mt-6'>
                                    <GaugeChart value={0} maxValue={100} title="Data Profit" unit="" color="#FFA000" />
                                </div>

                                <div className='col-span-1 mt-6'>
                                    <GaugeChart value={90} maxValue={100} title="Solar Radiation" unit="" color="#ff4500" />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-1 sensor  rounded-md px-5 text-white'>
                            <h3 className='text-white my-4 text-1xl'>Weather Forecast</h3>
                            <Weather />

                        </div>
                        <div className='col-span-2 md:col-span-1'>

                            <div className='sprinkler rounded-md text-white px-5'>
                                <h2>Sprinklers Overview</h2>
                                <div className='my-3'>
                                    <div className='flex justify-between'>
                                        <h3>Active</h3>
                                        <h2 className='text-3xl'>45/50</h2>
                                    </div>

                                    <div className='progressBar'>
                                        <div className='progressRange'></div>
                                    </div>
                                </div>
                                <div className='mt-7'>
                                    <div className='flex justify-between'>
                                        <h3 >irrigating Currently</h3>
                                        <h2 className='lg:text-3xl md:text-2xl text-green-500'>45%</h2>
                                    </div>

                                    <div className='progressBar'>
                                        <div className='progressRange'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='energy rounded-md flex items-center'>
                                <div className='text-white px-2'>
                                    <p className='lg:text-1xl'>Total Energy Consumption</p>
                                    <div className='mt-3'>
                                        <h2 className='lg:text-4xl md:text-2xl text-2xl text-orange-500'>10 KWH</h2>
                                        <small>at 20:25 AM</small>
                                    </div>
                                </div>
                                <div style={{ width: "120px", height: "100px" }}>
                                    <SimpleLineChart data={lineChartData3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-5'>
                    <div className='grid col-span-1 md:grid-cols-2 gap-7'>
                        <div className='col-span-2 md:col-span-1 rounded-md smart1 flex items-center justify-center'>
                            <div>
                                <h1 className='text-white text-6xl'>AGRO <span className='text-green-500'> TECH</span></h1>
                                <h6 className='text-center text-white text-2xl mt-3'>Smart <span className='text-green-500'>Irrigation</span> System</h6>

                            </div>
                        </div>

                        <div className='col-span-2 md:col-span-1 rounded-md smart2'>
                            <img src="https://cdn.pixabay.com/photo/2016/07/27/08/14/water-1544808_640.jpg" alt="" className='rounded-md' />
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default FarmOverview