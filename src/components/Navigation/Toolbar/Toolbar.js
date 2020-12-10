import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

// Toolbar NavItems will not be shown if the user is on a mobile device, instead SideDrawer will take them.

const Toolbar = () => {
	return (
		<header className={classes.Toolbar}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav>item</nav>
			<nav>item</nav>
			<nav>item</nav>
		</header>
	);
};

export default Toolbar;
