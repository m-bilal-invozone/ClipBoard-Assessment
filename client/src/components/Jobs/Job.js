import React from 'react';

const Job = ({job, toggleJob}) => {

  const differenceInWeeks = (d1Str) => {
    const date1 = new Date(d1Str);
    const today = new Date();
    const t1 = date1.getTime();
    const t2 = today.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
  };

  return (
      <div className="job-wrap" onClick={() => toggleJob(job.job_id)}>
        <div className="content-wrap">
          <div className="title">{job.job_title}</div>
          <div className="desc-wrap">
            <span>
              {job.job_type}
            </span><span>|</span>
            <span>
              ${job.salary_range[0]} - ${job.salary_range[1]} an hour
            </span><span>|</span>
            <span>
              {job.city}
            </span>
          </div>
        </div>
        <div className="time">
          {differenceInWeeks(job.created)} Weeks ago
        </div>
      </div>
  );
};

export default Job;
