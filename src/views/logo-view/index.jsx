/* This is just a static page to display when no conversation is selected. */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Tinode from 'tinode-sdk';

import { APP_NAME } from '../../config.js';

export default class LogoView extends React.PureComponent {
  render() {
    const version = APP_NAME + ' (' + Tinode.getLibrary() + ')';
    return (
      <div id="dummy-view">
        <div>
          <img id="logo" alt="logo" src="img/fulldive_logo.svg" />
          <p><FormattedMessage id="label_client" defaultMessage="Client:" /> {version}</p>
          <p><FormattedMessage id="label_server" defaultMessage="Server:" /> {this.props.serverVersion} ({this.props.serverAddress})</p>
        </div>
      </div>
    );
  }
};