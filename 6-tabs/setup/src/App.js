import React, { useState, useEffect } from "react";
import Title from "./Title";
import JobTab from "./JobTab";
import JobInfo from "./JobInfo";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  //destructure array data after loading
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <Title text="Experience"></Title>
      <div className="jobs-center">
        <JobTab jobs={jobs} value={value} setValue={setValue}></JobTab>
        <JobInfo {...jobs[value]}></JobInfo>
      </div>
    </section>
  );
}

export default App;
