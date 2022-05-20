import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		<div className='container-fluid justify-content-center'>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/about' className='nav-link'>
						About
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/articles-list' className='nav-link'>
						Articles
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default NavBar;
