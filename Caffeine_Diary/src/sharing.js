
//Ranking.js에 이용
import React from 'react';
import { Share, View, Button } from 'react-native';
import styled from "styled-components";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;


const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;

const URLShareButton = styled.Share`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;

function App() {
    
      const currentUrl = window.location.href;
      return (
          <FlexContainer>
              <h1>SHARE</h1>
              <GridContainer>
                  <FacebookShareButton url={currentUrl}>
                      <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                  </FacebookShareButton>
                  <TwitterShareButton url={currentUrl}>
                      <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                  </TwitterShareButton>
                  <CopyToClipboard text={currentUrl}>
					<URLShareButton>URL</URLShareButton>
				</CopyToClipboard>
                  
              </GridContainer>
          </FlexContainer>
      );
  }

export default App;
