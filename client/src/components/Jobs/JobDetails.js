import React from 'react';

const JobDetails = ({job}) => {
  return (
      <div className="details-wrap">
        <div className="row">
          <div className="col-md-8">
            <div className="department-wrap">
              <div className="title">
                Department:
              </div>
              <div className="value">
                {job.department && job.department.map((dep, index) =>
                    <span>{dep}{index !== job.department.length - 1 && ', '}</span>
                )}
              </div>
            </div>
            <div className="department-wrap">
              <div className="title">
                Hours / shifts:
              </div>
              <div className="value">
                {job.work_schedule && job.hours &&
                <span>{job.hours} hours/ {job.work_schedule}</span>
                }
              </div>
            </div>
            <div className="department-wrap">
              <div className="title">
                Summary:
              </div>
              <div className="value">
                {job.description &&
                <span>{job.description}</span>
                }
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="actions-wrap">
              <button className="btn btn-primary">Job details
              </button>
              <button className="btn btn-outline-primary">Save job</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default JobDetails;
