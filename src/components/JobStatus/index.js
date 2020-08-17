import React from "react"

const JobStatus = ({ company, companyUrl, position }) => (
  <h3 className="job-status">
    For tiden er jeg {position} ved{" "}
    <a href={`https://` + companyUrl} rel="noreferrer" target="_blank">
      {company}
    </a>
  </h3>
)

export default JobStatus
