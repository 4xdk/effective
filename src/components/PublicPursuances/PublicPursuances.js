import React, { Component } from 'react';
import PublicPursuanceList from './PublicPursuanceList';
import { getPublicPursuances } from '../../actions';
import { connect } from 'react-redux';
import { PROJECTS_CAPITAL } from '../../constants';


class PublicPursuances extends Component {

  componentWillMount() {
    this.props.getPublicPursuances();
  }

  render () {
    return (
      <div id="dashboard">
        <div id="dashboard-title">
          <h1>Public {PROJECTS_CAPITAL}</h1>
        </div>
        <div id="dash-first-row">
          <div className="dash-ctn">
            <div className="dash-box">
              <PublicPursuanceList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getPublicPursuances })(PublicPursuances);
