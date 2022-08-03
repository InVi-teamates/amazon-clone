import React from "react";
import './index.css';
import AboutCol from "./AboutCol";

export default function AboutFooter() {
	return (
		<div className="about-footer">
			<div className="about-f-container">
				<div className="about-table-row">
					<AboutCol heading="Get to Know Us"
						links={[
							{title:"Careers", path:'/'},
							{title:"Blog", path:"/"},
							{title:"About Amazon", path:'/'},
							{title:"Investor Relations", path:'/'},
							{title:"Amazon Devices", path:'/'},
							{title:"Amazon Science", path:'/'}
						]}
					/>

					<div className="about-table-cell about-footer-table-space"></div>

					<AboutCol heading='Make Money with Us'
						links={[
							{title:"Sell products on Amazon", path:'/'},
							{title:"Sell on Amazon Business", path:'/'},
							{title:"Sell apps on Amazon", path:'/'},
							{title:"Become an Affiliate", path:'/'},
							{title:"Advertise Your Products", path:'/'},
							{title:"Self-Publish with Us", path:'/'},
							{title:"Host an Amazon Hub", path:'/'},
							{title:"See More Make Money with us", path:'/'}
						]}
					/>

					<div className="about-table-cell about-footer-table-space"></div>

					<AboutCol heading='Amazon Payment Products'
						links={[
							{title:"Amazon Business Card", path:'/'},
							{title:"Shop with Points", path:'/'},
							{title:"Reload Your Balance", path:'/'},
							{title:"Amazon Currency Converter", path:'/'}
						]}
					/>

					<div className="about-table-cell about-footer-table-space"></div>

					<AboutCol heading='Let Us Help You'
						links={[
							{title:"Amazon and COVID-19", path:'/'},
							{title:"Your Account", path:'/'},
							{title:"Your Orders", path:'/'},
							{title:"Shipping Rates & Policies", path:'/'},
							{title:"Return & Replacements", path:'/'},
							{title:"Manage Your Content and Devices", path:'/'},
							{title:"Amazon Assistant", path:'/'},
							{title:"Help", path:'/'}
						]}
					/>
				</div>
			</div>
		</div>
	)
}
