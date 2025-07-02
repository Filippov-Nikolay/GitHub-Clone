import React, { useState } from 'react';


import BtnPrimary from '../../shared/Components/BtnPrimary/BtnPrimary'
import BtnSelect from '../../shared/Components/BtnSelect/BtnSelect'
import { ArrowDownSvg } from '../assets/svg/SvgComponents';

import './searchBar.css';

const SearchBar = ({ searchTerm, handleSearchChange, onTypeChange, onSortChange }) => {
    const [type, setType] = useState("All");
    const [sort, setSort] = useState("Last updated");

    return (
        <div className="search-bar-content">
            <input
                type="text"
                className="search-bar_input"
                placeholder="Find a repository..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <BtnSelect
                label={"Type"}
                icon={<ArrowDownSvg/>}
                options={["All", "Public", "Private"]}
                onSelect={onTypeChange}
            />
            <BtnSelect
                label={"Sort"}
                icon={<ArrowDownSvg/>}
                options={["Last updated", "Name"]}
                onSelect={onSortChange}
            />
            <BtnPrimary
                btnText={"New"}
            />
        </div>
    );
};

export default SearchBar;
