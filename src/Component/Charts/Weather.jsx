
function Weather() {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>SEP</small>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1395535498/vector/cloudy-sun-behind-cloud-cute-weather-realistic-icon-3d-cartoon.jpg?s=2048x2048&w=is&k=20&c=KJMFTOSuHO17aIimUV2tK5pdceFS_5IHlGKAhDKVdMc=" alt="" />
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>40%</h3>
                    <small>Pressure</small>
                </div>

            </div>

            <div className='flex justify-between mt-2  items-center'>
                <div className="text-center">
                    <h3 className='text-2xl'>26</h3>
                    <small>SEP</small>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>30%</h3>
                    <small>Pressure</small>
                </div>

            </div>
            <div className='flex justify-between mt-2  items-center'>
                <div className="text-center">
                    <h3 className='text-2xl'>27</h3>
                    <small>SEP</small>
                </div>
                <div>
                    <img src="https://cdn-icons-png.freepik.com/256/17640/17640164.png?semt=ais_hybrid" alt="" />
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>20%</h3>
                    <small>Pressure</small>
                </div>

            </div>
            <div className='flex justify-between mt-2  items-center'>
                <div className="text-center">
                    <h3 className='text-2xl'>28</h3>
                    <small>SEP</small>
                </div>
                <div>
                    <img src="https://cdn-icons-png.freepik.com/256/17475/17475919.png?semt=ais_hybrid" alt="" />
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>90%</h3>
                    <small>Pressure</small>
                </div>

            </div>
            <div className='flex justify-between mt-2  items-center'>
                <div className="text-center">
                    <h3 className='text-2xl'>29</h3>
                    <small>SEP</small>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1163624389/vector/sun-and-cloud-weather-colorful-icon.jpg?s=2048x2048&w=is&k=20&c=A3YcKbRRt7dczRa6jVA0lAsej9Kh7j25x_5gUU225mo=" alt="" />
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>25</h3>
                    <small>Max Temp.(°C)</small>
                </div>
                <div className="text-center">
                    <h3 className='text-2xl'>50%</h3>
                    <small>Pressure</small>
                </div>
            </div>
        </>
    )
}

export default Weather