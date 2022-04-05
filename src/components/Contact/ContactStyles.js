import styled from 'styled-components';

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
    export const textarea = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 120px;
	max-width: 220px;
	width: 100%;
    min-height: 120px;
    height: 220px;
`

export const iframe = styled.div`
	tabindex="0" 
	data-auto-height="true" 
	data-aspect-ratio="0.7729220222793488" 
	scrolling="no" 
	width="100%" 
	height="600" 
	frameborder="0"
	margin: 12px auto 6px auto;
	font-family: Helvetica,Arial,Sans-serif;
	font-style: normal;
	font-variant: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: normal;
	font-size-adjust: none;
	font-stretch: normal;
	-x-system-font: none;
	display: block;"
`

export const button = styled.button`
margin-right: 5px;
{
	box-sizing: border-box;
  }
  
  input[type=default], hidden, reset {
	width: 100%;
	padding: 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	resize: vertical;
  }
  
  label {
	padding: 12px 12px 12px 0;
	display: inline-block;
  }
  
  input[type=default] {
	background-color: #04AA6D;
	color: white;
	padding: 12px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	float: right;
  }
  
  input[type=default]:hover {
	background-color: #45a049;
  }
  
  .container {
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
  }
  
  .col-25 {
	float: left;
	width: 25%;
	margin-top: 6px;
  }
  
  .col-75 {
	float: left;
	width: 75%;
	margin-top: 6px;
  }
  
  /* Clear floats after the columns */
  .row:after {
	content: "";
	display: table;
	clear: both;
  }
  
  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
	.col-25, .col-75, input[type=submit] {
	  width: 100%;
	  margin-top: 0;
	}
  }
`