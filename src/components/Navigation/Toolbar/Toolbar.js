import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
// import classes from './Toolbar.module.css';

const HeaderWrapper = styled.header`
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: grey;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;

	nav {
		height: center;
	}

	@media (max-width: 499px) {
		display: ${props => (props.DesktopOnly ? 'none' : 'flex')};
	}
`;

const LogoWrapper = styled.div`
	height: 80%;
`;

// Toolbar NavItems will not be shown if the user is on a mobile device, instead SideDrawer will take them.

const Toolbar = () => {
	return (
		<HeaderWrapper>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			<nav DesktopOnly>item</nav>
			<nav DesktopOnly>item</nav>
			<nav DesktopOnly>item</nav>
		</HeaderWrapper>
	);
};

export default Toolbar;
