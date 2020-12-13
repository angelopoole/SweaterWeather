import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

//To sit on top of the main app component to display a layout that will be the same throughout the whole app. will contain sidebar, toolbar, and navigation items.

const Layout = props => {
	return (
		<>
			<Toolbar />
			<main className={classes.Content}>{props.children}</main>
		</>
	);
};

export default Layout;
