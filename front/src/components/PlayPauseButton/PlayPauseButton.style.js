import styled from 'styled-components';

const iconUrl = {
  playIcon: 'https://cdn.iconscout.com/public/images/icon/free/png-512/play-button-social-media-logo-38378301177154e7-512x512.png',
  pauseIcon: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/pause-button-3dd51b010ebcd1da-512x512.png',
};

export const StyledPlayPauseButton = styled.button`
  background-color: ${props => (props.exerciseRunning ? '#3A3F51' : 'white')};
  border: 0;
  outline: 0;
  transition: background-color 2s;

  > img {
    width: 40px;
    height: 40px;
  }

  > p {
    color: red;
  }
`;

export default StyledPlayPauseButton;