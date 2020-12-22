import React from 'react';

const Filter = ({title, filterList}) => {
  return (
      <div className="sidebar-filter-wrap">
        <div className="title">
          {title}
        </div>
        {filterList && filterList.map(({key, doc_count}) =>
            <div className="sub-item">
              {key} <span>{doc_count}</span>
            </div>
        )}
      </div>
  );
};

export default Filter;
