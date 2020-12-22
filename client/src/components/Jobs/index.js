import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FilterResults from 'react-filter-search';
import sorter from 'sort-nested-json';
import {API_URL} from '../../config/constants';
import JobDetails from './JobDetails';
import Job from './Job';


const Jobs = ({searchVal}) => {
  const [jobs, setJobs] = useState(null);
  const [activeBatch, setActiveBatch] = useState(null);
  const [activeJob, setActiveJob] = useState(null);
  const [sort, setSort] = useState('ascend');
  const [activeFilter, setActiveFilter] = useState('');


  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    try {
      const res = await axios.get(`${API_URL}/get-jobs`);
      setJobs(res.data.jobs);
    } catch (e) {
      console.log(e);
    }
  };
  let totalJobs = 0;
  if (jobs) {
    jobs.forEach(batch => {
      totalJobs += batch.items.length;
    });
  }

  const toggleBatch = (name) => {
    if (activeBatch === name) {
      setActiveBatch(null);
    } else {
      setActiveBatch(name);
    }
  };
  const toggleJob = (job_id) => {
    if (activeJob === job_id) {
      setActiveJob(null);
    } else {
      setActiveJob(job_id);
    }
  };


  return (
      <>
        <div className="jobs-wrap">
          <div className="head-wrap">
            <div className="title"><span>{totalJobs}</span> job postings</div>
            <div className="sort-by d-md-block d-none">
              <span className="dropdown">
                <span className="dropdown-toggle title" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort by
                </span>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <span className="dropdown-item" onClick={() => setSort('ascend')}>Ascending</span>
                  <span className="dropdown-item" onClick={() => setSort('descend')}>Descending</span>
                </div>
              </span>
              {filters.map(filter =>
                  <span className='filter' onClick={() => setActiveFilter(filter.value)}
                        style={{background: activeFilter === filter.value ? '#2296F3' : ''}}>{filter.title}</span>
              )}
            </div>
          </div>
          <div className="jobs-list-wrap">
            {jobs &&
            <FilterResults
                value={searchVal}
                data={jobs}
                renderResults={filtered => {
                  let sorted = filtered;

                  if (sort === 'ascend') {
                    sorted = sorter.sort(filtered).asc('name');
                  } else if (sort === 'descend') {
                    sorted = sorter.sort(filtered).desc('name');
                  }
                  return (
                      sorted.map(jobBatch => {
                            let sortedItems = jobBatch.items;
                            if (sort === 'ascend') {
                              sortedItems = sorter.sort(jobBatch.items).asc('job_title');
                              sortedItems = sorter.sort(sortedItems).asc(activeFilter);
                            } else if (sort === 'descend') {
                              sortedItems = sorter.sort(jobBatch.items).desc('job_title');
                              sortedItems = sorter.sort(sortedItems).desc(activeFilter);
                            }
                            return (
                                <div>
                                  <div className="job-outer-wrap" onClick={() => toggleBatch(jobBatch.name)}>
                                    <div className="icon-wrap">
                                      LO
                                    </div>
                                    <div className='job-title'>
                                      {jobBatch.total_jobs_in_hospital} jobs for {jobBatch.name}
                                    </div>
                                  </div>
                                  {sortedItems && (jobBatch.name === activeBatch) && sortedItems.map(job =>
                                      <div>
                                        <Job job={job} toggleJob={toggleJob}/>
                                        {job.job_id === activeJob &&
                                        <JobDetails job={job}/>
                                        }
                                      </div>
                                  )}
                                </div>
                            );
                          }
                      ));
                }
                }
            />
            }
          </div>
        </div>
      </>
  );
};

export default Jobs;
const filters = [
  {title: 'Location', value: 'city'},
  {title: 'Role', value: 'job_type'},
  {title: 'Department', value: 'department'},
  {title: 'Education', value: 'education'},
  {title: 'Experience', value: 'experience'}
];
