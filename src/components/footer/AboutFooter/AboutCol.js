import React from 'react';

export default function AboutCol({
	heading = 'col heading',
	links = [ {
		title: 'Home', path: '/home'
	}],
}) {
	return (
		<div className='about-table-cell'>
			<h1 className="about-footer-title">{heading}</h1>
			<ul className="about-footer-ul">
				{links.map((item, index) => (
					<li className="about-footer-li" key={index}>
						<a className="about-footer-links" href={item.path} target="_blank" rel="noopener noreferrer">{item.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}