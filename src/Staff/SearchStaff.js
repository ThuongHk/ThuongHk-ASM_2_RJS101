import React from 'react';
import {useState} from 'react';
import {STAFFS} from './staffs';

function SearchStaff() {
    const newStaff = [];
    const [inputStaff, setInputStaff] = useState('')

    const handleSearch = ()=>{
        for(let i = 0; i < STAFFS.length; i++) {
            if(inputStaff === STAFFS[i].name){
                newStaff.push(STAFFS[i])
            }
        }

        const searchStaff = STAFFS.filter(staff => staff.name.toString() === inputStaff);
        return searchStaff
    }
console.log(newStaff);
    return (
        <div>
            <input value={inputStaff} onChange={(e) => {setInputStaff(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
            <div>{newStaff}</div>
            {handleSearch}
           
        </div>
    );
}

export default SearchStaff;