import React from 'react';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = ({searchVal, onChange}) => {
  return (
      <div className='search-wrap'>
        <div className="input-wrap">
          <input type="text" className="form-control"
                 placeholder="Search for any job, title, keywords or company"
          value={searchVal}
                 onChange={(e) => onChange(e.target.value)}
          />
          <div className='search-icon-wrap'>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
        </div>
      </div>
  );
};

export default Search;
