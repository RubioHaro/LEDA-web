import React from 'react';
import './profile.css';
// import routes from '../routes.js';
// import axios from 'axios';


class Profile extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name : 'Rodrigo R.'
      }
    }
    // axios.get(routes.user, this.state.config)
    //   .then(Response => {
    //     let user = Response.data
    //     this.setState({ user });
    //   });
  }

  render = () => (
    <div>
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="card hovercard">
            <div className="card-background">
              <img className="card-bkimg" alt="" src="http://lorempixel.com/100/100/people/9/" />
            </div>
            <div className="useravatar">
              <img alt="" src="" />
            </div>
            <div className="card-info"> <span className="card-title">{this.state.user.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;