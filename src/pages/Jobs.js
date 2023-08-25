import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../redux/features/job/jobApi";

const Jobs = () => {
  const { data, isLoading, isError, error } = useGetJobsQuery();

  const jobs = data?.data;

  console.log(jobs);

  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {jobs.map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
