import React from 'react';
import cssModule from 'react-css-modules';
import styles from './chatbot.css';

class chatbot extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      <div id="webchat"></div>
      <script src="https://cdn.botframework.com/botframework-webchat/latest/webchat.js"></script>
      {
        window.WebChat.renderWebChat({
          directLine: window.WebChat.createDirectLine({ secret: 'YOUR_BOT_SECRET_FROM_AZURE_PORTAL' })
        }, document.getElementById('webchat'))
      }
    </div>
  )
}

export default cssModule(chatbot, styles);
