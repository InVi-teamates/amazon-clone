import React from 'react';
import styled from 'styled-components';

export default function FooterPadItem() {
	const PaditemStyles = styled.div `
	  .paditem-container {
		margin: 10px auto;
		max-width: 1000px;
		white-space: nowrap;
		color: #DDD;
		text-align: center;
	  }
	  
	  span {
		display: inline-block;
	  }
	  
	  .footer-logo-container {
		margin: 17px auto 15px;
	  }
	  
	  .footer-logo {
		width: 77px;
		height: 40px;
		background-image: url(https://cdn.iconscout.com/icon/free/png-256/amazon-21-225434.png);
		background-size: 120px 120px;
		background-repeat: no-repeat;
		background-position: 0px -35px;
	  }
	  
	  .lcc-container-d {
		vertical-align: top;
		margin: 18px 0 0 76px;
	  }
	  
	  .lcc-language, .lcc-currency, .lcc-country {
		text-decoration: none;
		display: inline-block;
		vertical-align: center;
		border: 1px solid #848688;
		border-radius: 3px;
		padding: 6px 18px 6px 8px;
	  }
	  .lcc-currency {
		margin: 0 10px;
	  }
	  
	  .language-l, .currency-c, .country-c {
		display: inline-block;
		white-space: normal;
		text-align: center;
		font-size: 13px;
		line-height: 18px;
		padding: 0 0.6em;
	  }
	  .language-l, .currency-c, .country-c, .currency-symbol {
		color: #CCC;
	  }
	  
	  .language-up-down-arrow {
		font-size: 13px;
		color: gray;
		display: inline-block;
		margin-left: 1em;
		position: relative;
		left: 12px;
	  }
	  .currency-symbol { 
		font-weight: 500;
	  	font-size: 15px;
	  }
	  .currency-symbol, .language-globe, .language-up-down-arrow, .country-flag {
		vertical-align: middle;
	  	display: inline-block;
	  }
	  
	  .language-globe {
		width: 17px;
		height: 17px;
		background-image: url(https://cdn.iconscout.com/icon/free/png-256/globe-earth-sphere-space-world-internet-30889.png);
		background-size: 17px 17px;
		background-repeat: no-repeat;
	  }
	  
	  .country-flag {
		background-image: url(https://cdn-icons-png.flaticon.com/512/330/330459.png);
		background-size: 20px 20px;
		background-repeat: no-repeat;
		background-position: 0 -3px;
		width: 16px;
		height: 15px;
	  }
	`;


	return (
		<PaditemStyles className='footer-paditem'>
			<div className='paditem-container'>
				<span className='footer-logo-container'>
					<a href='/'>
						<div className='footer-logo'></div>
					</a>
				</span>
				<span className='lcc-container-d'>
					<div className='lcc-container'>
						<a href='/' className='lcc-language'>
							<div className='language-globe'></div>
							<span className='language-l'>English</span>
							<span className='language-up-down-arrow'>♦</span>
						</a>
						<a href='/' className='lcc-currency'>
							<span className='currency-symbol'>$</span>
							<span className='currency-c'>USD - U.S. Dollar</span>
						</a>
						<a href='/' className='lcc-country'>
							<span className='country-flag'></span>
							<span className='country-c'>United States</span>
						</a>
					</div>
				</span>
			</div>
		</PaditemStyles>
	)
}