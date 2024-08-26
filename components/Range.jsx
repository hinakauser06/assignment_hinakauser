import React, { useEffect, useRef } from 'react';

export const Range = ({ min, max, unit, minValue, maxValue, setMinValue, setMaxValue }) => {
    const minGap = 1;

    // Refs for track and thumbs
    const trackRef = useRef(null);

    useEffect(() => {
        updateTrackStyles();
    }, [minValue, maxValue]);

    const handleMinChange = (event) => {
        const value = Math.min(event.target.value, maxValue - minGap);
        setMinValue(value);
    };

    const handleMaxChange = (event) => {
        const value = Math.max(event.target.value, minValue + minGap);
        setMaxValue(value);
    };

    const updateTrackStyles = () => {
        if (trackRef.current) {
            const minPercent = ((minValue - min) / (max - min)) * 100;
            const maxPercent = ((maxValue - min) / (max - min)) * 100;
            trackRef.current.style.background = `linear-gradient(to right, #e2e8f0 ${minPercent}%, #4a5568 ${minPercent}%, #4a5568 ${maxPercent}%, #e2e8f0 ${maxPercent}%)`;
        }
    };

    return (
        <>
            {/* Range Slider */}
            <div className="relative w-full max-w-xl mx-auto mb-8">
                {/* Track */}
                <div
                    ref={trackRef}
                    className="absolute inset-0 h-2 bg-gray-200 rounded-full"
                ></div>
                {/* Min Range Thumb */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto range-slider range-slider-1"
                    style={{ zIndex: minValue > maxValue - minGap ? 1 : 0 }}
                />
                {/* Max Range Thumb */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto range-slider range-slider-2"
                    style={{ zIndex: maxValue < minValue + minGap ? 1 : 0 }}
                />
            </div>

            {/* Display Range Values */}
            <div className='flex flex-row justify-between  mb-4'>
                <div className='bg-[#edf6f5] pe-14 ps-2 text-left rounded-xl'>
                    {unit} {minValue}
                </div>
                <div className='text-xl font-bold text-center'>
                    -
                </div>
                <div className='bg-[#edf6f5] pe-14 ps-2 text-left rounded-xl'>
                    {unit} {maxValue}
                </div>
            </div>
        </>
    );
};
