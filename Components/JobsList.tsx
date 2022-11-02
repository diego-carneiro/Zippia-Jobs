import React from "react";

import styled from "styled-components";
import { Props } from "../Interfaces";

export default function JobsList(props: Props) {
  return (
    <Container>
      <JobsGrid>
        {props.data!.map((info, index) => (
          <JobBox key={index}>
            <CompanyLogoBox>
              <CompanyLogo src={info.companyLogo} />
            </CompanyLogoBox>
            <InfoContainer>
              <InfoBox>
                <h1>{info.jobTitle}</h1>
                <h2>{info.companyName}</h2>
              </InfoBox>
              <DescriptionBox>
                <p>{info.jobDescription}</p>
              </DescriptionBox>
              <h3>{info.postedDate}</h3>
            </InfoContainer>
          </JobBox>
        ))}
      </JobsGrid>
    </Container>
  );
}

//Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  display: flex;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100vw;
    display: flex;
  }
`;
const JobsGrid = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #fff;
    border-radius: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 9px;
    height: "2px";
  }

  @media (max-width: 900px) {
    width: 100vw;
  }
`;
const JobBox = styled.div`
  width: 448px;
  height: 300px;
  border: 1px solid #d8dee2;
  border-radius: 4px;
  margin: 14px;

  display: flex;

  @media (max-width: 900px) {
    width: 90%;
    margin: 20px;

    display: flex;
  }
`;
const CompanyLogoBox = styled.div`
  width: 100px;

  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 60px;
  }
`;
const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 30px;

  @media (max-width: 900px) {
    width: 40px;
    height: 40px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: #333333;
    font-size: 13px;
    text-align: end;
  }

  @media (max-width: 900px) {
    width: 240px;
  }
`;
const InfoBox = styled.div`
  width: 300px;
  margin-top: 30px;

  h1 {
    font-size: 18px;
  }
  h2 {
    color: #333333;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    width: 220px;
  }
`;
const DescriptionBox = styled.div`
  width: 300px;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #fff;
    border-radius: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 9px;
    height: "2px";
  }

  @media (max-width: 900px) {
    width: 220px;
  }
`;
