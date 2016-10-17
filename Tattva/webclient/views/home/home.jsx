import React from 'react';

import {App,HomeAvatar} from '../../components/home';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	render () {
		return (
			<div>
			<App ></App>
			<HomeAvatar></HomeAvatar>
			</div>);
	}
}