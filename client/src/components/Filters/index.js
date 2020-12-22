import React, {useEffect, useState} from 'react';
import Filter from '../Filter';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-awesome-modal';
import {API_URL} from '../../config/constants';

const Filters = () => {
  const [filters, setFilters] = useState(null);
  const [departmentModal, setDepartmentModal] = React.useState(true);

  useEffect(() => {
    getFilters();
  }, []);
  const getFilters = async () => {
    try {
      const res = await axios.get(`${API_URL}/get-filters`);
      setFilters(res.data.filters);
    } catch (e) {
      console.log(e);
    }
  };
  const toggleModal = () => setDepartmentModal(!departmentModal);

  return (
      <div>
        {filters &&
        <div>
          <Filter title='Job Types' filterList={filters.job_type}/>
          <Filter title='Department' filterList={filters.department}/>
          <Filter title='Work Schedule' filterList={filters.work_schedule}/>
          <Filter title='Experience' filterList={filters.experience}/>
          <Modal visible={departmentModal} width="80%" height="400" effect="fadeInUp" onClickAway={toggleModal}>
            <div>
              <div className='modal-header'>
                <h4>Departments</h4>
                <FontAwesomeIcon icon={faWindowClose} onClick={toggleModal}/>
              </div>
              <div className="departments-wrap">
                {filters.department && filters.department.map(item =>
                    <div className='item'>
                      <span className='key'>{item.key}</span>
                      <span className='count'>{item.doc_count}</span>
                    </div>
                )}
              </div>
            </div>
          </Modal>
        </div>
        }
      </div>
  );
};

export default Filters;
