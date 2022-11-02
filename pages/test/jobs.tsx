import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Job } from "../../Interfaces";

import JobsList from "../../Components/JobsList";

export default function MainScreen({}) {
  const [data, setData] = useState<Job[]>([]); //Receive request data
  const [filtered, setFiltered] = useState<Job[]>([]); //Receive filtered information

  const body = { //Request Payload
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 10,
    previousListingHashes: [],
  };

  useEffect(() => {  //React hook that handles the request
    const promise = axios.post("https://www.zippia.com/api/jobs/", body);
    promise.then((response) => {
      setFiltered(response.data.jobs);
      setData(response.data.jobs);
    });
  }, []);

  function alphabeticalOrder() { //Filters the array of jobs in an alphabetical order of company names
    let shallowCopy = [ ...data ];
    setFiltered(
      shallowCopy.sort((a, b) => a.companyName.localeCompare(b.companyName))
    );
  }

  function atLast7Days() { //Filters the array of jobs removing the jobs with more than 7d
    const filter = [
      "1d ago",
      "2d ago",
      "3d ago",
      "4d ago",
      "5d ago",
      "6d ago",
      "7d ago",
    ];

    setFiltered(data.filter((val) => filter.includes(val.postedDate)));
  }

  return (
    <Container>
      <ButtonBar>
        <Button onClick={alphabeticalOrder}>Company Name</Button>
        <Button onClick={atLast7Days}>At last 7 days</Button>
      </ButtonBar>
      <JobsList data={filtered}></JobsList>
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 900px) {
    width: 100vw;
    display: flex;
  }
`;
const ButtonBar = styled.div`
  width: 100vw;
  border: 1px solid #d8dee2;
  box-shadow: 0 2px 4px rgb(0 0 0 / 4%);

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    width: 100vw;
  }
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #bac4da !important;
  color: #3174ee;

  @media (max-width: 900px) {
    margin: 10px;
  }
`;
