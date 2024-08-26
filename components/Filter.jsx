import React, { useState } from 'react';
import { Range } from './Range';
import Checklist from './Checklist';
import SelectableButtons from './SelectableButtons';
import ResetButton from './ResetButton';

export const Filter = () => {
    // State for ranges
    const [priceRange, setPriceRange] = useState({ min: 1, max: 25 });
    const [thcRange, setThcRange] = useState({ min: 1, max: 30 });
    const [cbdRange, setCbdRange] = useState({ min: 0, max: 15 });

    // State for selected items
    const [selectedGenetik, setSelectedGenetik] = useState(0);
    const [selectedBestrahltungs, setSelectedBestrahltungs] = useState(0);
    const [selectedHerstellers, setSelectedHerstellers] = useState([]);
    const [selectedTerpenes, setSelectedTerpenes] = useState([]);

    // Default items
    const herstellers = ['ADREXpharma', 'Aurora', 'Avaay', 'Bedrocan', 'Cannamedical', 'Bayer', 'Biogen'];
    const genetiks = ['Indica', 'Sativa', 'Hybrid'];
    const bestrahltungs = ['bestrahlt', 'nicht bestrahlt'];
    const terpenes = ['Pinene', 'Myrcene', 'Limonene', 'Carvone', 'Linalool', 'Terpinene', 'Borneol'];

    // Reset function
    const resetFilters = () => {
        setPriceRange({ min: 1, max: 25 });
        setThcRange({ min: 1, max: 30 });
        setCbdRange({ min: 0, max: 15 });
        setSelectedGenetik(0);
        setSelectedBestrahltungs(0);
        setSelectedHerstellers([]);
        setSelectedTerpenes([]);
    };

    return (
        <div className='w-full '>
            <div className='bg-[#edf6f5] text-center font-bold text-lg rounded-sm text-[#116a6c]'>Filter</div>

            <div className='py-6 text-center font-semibold text-[#116a6c]'>Preis</div>
            <Range
                min={1}
                max={25}
                unit="€"
                minValue={priceRange.min}
                maxValue={priceRange.max}
                setMinValue={(value) => setPriceRange({ ...priceRange, min: value })}
                setMaxValue={(value) => setPriceRange({ ...priceRange, max: value })}
            />

            <div className='border-t-2 '>
                <Checklist
                    title="Hersteller"
                    items={herstellers}
                    selectedItems={selectedHerstellers}
                    setSelectedItems={setSelectedHerstellers}
                />
            </div>

            <div className=' py-6 text-center font-semibold text-[#116a6c]'>THC Gehalt</div>
            <Range
                min={1}
                max={30}
                unit="%"
                minValue={thcRange.min}
                maxValue={thcRange.max}
                setMinValue={(value) => setThcRange({ ...thcRange, min: value })}
                setMaxValue={(value) => setThcRange({ ...thcRange, max: value })}
            />

            <div className='border-t-2 border-b-2'>
                <div className='py-6 text-center font-semibold text-[#116a6c]'>CBD Gehalt</div>
                <Range
                    min={0}
                    max={15}
                    unit="%"
                    minValue={cbdRange.min}
                    maxValue={cbdRange.max}
                    setMinValue={(value) => setCbdRange({ ...cbdRange, min: value })}
                    setMaxValue={(value) => setCbdRange({ ...cbdRange, max: value })}
                />
            </div>

            <div className='border-b-2 pb-3'>
                <div className='py-4 text-center font-semibold text-[#116a6c]'>Genetik</div>
                <SelectableButtons items={genetiks} selectedButton={selectedGenetik} setSelectedButton={setSelectedGenetik} />
            </div>

            <div className='border-b-2 pb-3'>
                <div className='py-4 text-center font-semibold text-[#116a6c]'>Bestrahltungs</div>
                <SelectableButtons items={bestrahltungs} selectedButton={selectedBestrahltungs} setSelectedButton={setSelectedBestrahltungs} />
            </div>

            <div className='pb-6 pt-3 text-center font-semibold text-[#116a6c]'>
                <Checklist
                    title="Terpene"
                    items={terpenes}
                    selectedItems={selectedTerpenes}
                    setSelectedItems={setSelectedTerpenes}
                />
            </div>
            <ResetButton onClick={resetFilters} />
        </div>
    );
};

