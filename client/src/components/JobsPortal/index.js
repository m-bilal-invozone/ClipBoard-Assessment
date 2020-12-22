import React from 'react';
import './styles.scss';
import Filters from '../Filters';
import Jobs from '../Jobs';

const JobsPortal = ({searchVal}) => {

  return (
      <div className='jobs-container'>
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <Filters/>
          </div>
          <div className="col-md-9">
            <Jobs searchVal={searchVal} />
          </div>
        </div>
      </div>
  );
};

export default JobsPortal;
