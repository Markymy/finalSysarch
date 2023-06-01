import React from 'react';
import { MDBFooter, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit";

function Books() {
  const backgroundStyle = {
    backgroundImage: 'url("https://www.colorhexa.com/f4bb64.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundColor: "yellow",
    fontFamily: "Roboto, sans-serif",
  };

  const footerStyle = {
    backgroundColor: "white",
  };

  return (
    <div style={backgroundStyle}>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            Yezzir Book Store
          </MDBNavbarBrand>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink href="/home">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="">Books</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://imgv2-2-f.scribdassets.com/img/word_document/224266636/original/432x574/151d1d578c/1677507992?v=1" alt="Placeholder Image" />
          </div>
          <div className="col-md-6">
            <h1>About This Book</h1>
            <p style={{ height: 'auto', width: '400px' }}>
              The first book for daughters who have suffered the abuse of narcissistic, self-involved mothers, Will I Ever Be Good Enough? provides the expert assistance you need in order to overcome this debilitating history and reclaim your life. Drawing on more than two decades of experience as a therapist specializing in women’s health and hundreds of interviews with suffering daughters, Dr. Karyl McBride helps you recognize the widespread effects of this emotional abuse and create an individualized program for self-protection, resolution, and complete recovery.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://imgv2-1-f.scribdassets.com/img/word_document/470660518/original/432x574/bdfb32381a/1684158681?v=1" alt="Placeholder Image" />
          </div>
          <div className="col-md-6">
            <h1>About This Book</h1>
            <p style={{ height: 'auto', width: '400px' }}>
              Both successful entrepreneurs and chess grandmasters have the vision to look at the pieces in front of them and anticipate their next five moves. In this book, Patrick Bet-David “helps entrepreneurs understand exactly what they need to do next” (Brian Tracy, author of Eat That Frog!) by translating this skill into a valuable methodology. Whether you feel like you’ve hit a wall, lost your fire, or are looking for innovative strategies to take your business to the next level, Your Next Five Moves has the answers.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://imgv2-1-f.scribdassets.com/img/word_document/644543816/original/432x574/db305518fa/1684505897?v=1" alt="Placeholder Image" />
          </div>
          <div className="col-md-6">
            <h1>About This Book</h1>
            <p style={{ height: 'auto', width: '400px' }}>
              When you hear the term “self-compassion,” you might immediately think of the word “nice,” or think that it’s a feeling reserved for the saintly and tenderhearted… that the rest of us are simply too busy to bother showing others any sort of kindness, let alone showing it to ourselves. But what if you found that was a misconception, and that compassion — especially for oneself — isn’t “nice,” but tough and resilient and even badass? And what if cultivating that “tough” self-compassion isn’t a fruitless endeavor at all, and could actually provide you with proven, long-term emotional benefits?
            </p>
          </div>
        </div>
      </div>
      <MDBFooter className="text-center py-3" style={footerStyle}>
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Yezzir Book Store. All rights reserved.
          </p>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Books;
