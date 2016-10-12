import React from 'react';

import {AddNamespace,CreateNamespace,DrawerBox} from '../../components/namespace';

//This is a view layout, hence avoid putting any business logic
export default class Namespace extends React.Component {
	render () {
		return (
			<div>
			<AddNamespace ></AddNamespace>
			<CreateNamespace></CreateNamespace>
			<DrawerBox></DrawerBox>
			</div>);
	}
}