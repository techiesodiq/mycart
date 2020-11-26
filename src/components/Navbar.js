import React, { Component } from "react";
import { Link } from "react-router-dom";
import navLogo from "../logo.svg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./Button";

export class Navbar extends Component {
	render() {
		return (
			<div>
				<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
					<Link to="/">
						<img src={navLogo} alt="store" className="navbar-brand" />
					</Link>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5">
							<Link to="/" className="nav-link">
								Products
							</Link>
						</li>
					</ul>
					<Link to="/cart" className="ml-auto">
						<ButtonContainer>
							<span>
								<FontAwesomeIcon icon={faCartPlus} />
							</span>
							My cart
						</ButtonContainer>
					</Link>
				</NavWrapper>
			</div>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`;

export default Navbar;
