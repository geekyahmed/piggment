import styled, { css } from 'styled-components';

export const Snippet = styled.div`
	background: #fffffff2;
	position: absolute;
	height: 100%;
	z-index: 99;
	width: 100%;
	max-height: 100%;
	overflow: overlay;

	padding: 24px;
	article {
		text-align: left !important;
	}
	h4 {
		font-size: 15px;
		font-weight: 600;
		color: var(--black);
		letter-spacing: -0.5px;
		margin-bottom: 1rem;
	}
	dd {
		color: var(--black);
		margin-bottom: 2px;
	}
	svg {
		width: 20px;
	}
	code {
		font-size: 12px;
		color: #a9a9a9;
		display: block;

		margin-bottom: 15px;
	}
	button {
		font-size: 13px;
		margin-top: 5px;
		padding: 6px 14px;
	}
`;
/* ----------------------------- end codsnipped ----------------------------- */

export const BorderWrap = styled.div`
	border: 1px solid #e4e4e4;
	padding: 1px 7px;
	margin: 0;
	border-radius: 50px;
	svg {
		cursor: pointer;
		transition: all 0.3s ease;
		&:nth-child(3) {
			&.active_love {
				fill: #e83630 !important;
			}
			&:hover {
				fill: #e83630 !important;
				transform: scale(1.14);
			}
		}
		&:nth-child(2) {
			&:hover {
				fill: var(--theme-primary) !important;
				transform: scale(1.14);
			}
		}
		&:nth-child(1) {
			&:hover {
				fill: var(--accent) !important;
				transform: scale(1.14);
			}
		}
	}
`;

export const CardWrapper = styled.div`
	border: none !important;
	box-shadow: 0 2px 15px #0d14420d;
	cursor: pointer;
	transition: all 0.4s ease;
	figure {
		min-height: 15em;
		border-radius: 8px;
		transition: all 0.4s ease;
		${(props) =>
			props.layout &&
			css`
				height: 14em;
				min-height: 14em;
				width: 14em;
				border-radius: 50% !important;
				margin: 1rem auto;
			`}
	}

	&:hover {
		margin-top: -8px;
		figure {
			transform: scale(1.06);
		}
	}
	.hex__section {
		span {
			transition: all 0.3s ease;
			&:first-child {
				&:hover {
					color: ${(props) => props.color.one};
				}
			}
			&:last-child {
				&:hover {
					color: ${(props) => props.color.two};
				}
			}
		}
	}

	.small__colors {
		height: 1em;
		width: 1em;

		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.4s ease;
		&:hover {
			transform: scale(1.14);
		}
	}
	article {
		${(props) =>
			props.layout &&
			css`
				text-align: center;
			`}
		h4 {
			text-transform: capitalize;
			font-size: 1.15em;
			font-weight: 500;

			color: #0a0a0a;
			white-space: nowrap;
		}
		p {
			font-size: 0.79em;
			white-space: nowrap;
			color: #989898;
		}
	}

	svg {
		width: 1.06em;
		fill: #717171;
	}
	.card-body {
		padding: 13px;
	}
`;

export const GenerateWrapper = styled.div`
	height: 100vh;
	width: 100%;

	.css_code {
		article {
			text-align: center !important;
		}
	}
	.small__colors {
		height: 18px;
		width: 18px;
		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.4s ease;
		&:hover {
			transform: scale(1.14);
		}
	}
	.control__panel {
		span {
			font-size: 15px;
			color: #676767;
			cursor: pointer;

			&:hover {
				color: var(--accent);
				user-select: none;
			}
		}
		h6 {
			font-size: 17px;
			font-weight: 600;
			letter-spacing: -0.4px;
			margin-bottom: 9px;
		}
	}

	.hex__section {
		span {
			transition: all 0.3s ease;
			&:first-child {
				&:hover {
					color: ${(props) => props.color.one};
				}
			}
			&:last-child {
				&:hover {
					color: ${(props) => props.color.two};
				}
			}
		}
	}
	.border-wrap {
		border: none;
	}
	.snippet {
		position: absolute;
		height: 350px;
		z-index: 99;
		width: 500px;
		top: 50%;

		left: 50%;
		transform: translate(-50%, -50%);
		article {
			text-align: left !important;
		}
	}
	.write__up {
		padding: 0 30px;
		background: #fff8f0;
		border-radius: 6px;

		display: flex;
		width: 97.5%;
		position: fixed;
		bottom: 1rem;
		left: 50%;
		transform: translate(-50%, 0);
		align-items: center;
		justify-content: space-between;

		text-align: left;
		height: 110px;

		h4 {
			font-size: 18px;
			text-transform: capitalize;
			font-weight: 500;
			color: var(--black);
			margin-bottom: 5px;
		}
		p {
			font-size: 13px;
			color: #8c8c8c;
			margin: 5px 0;
			svg {
				width: 17px;
				height: auto;
				fill: #8c8c8c;
			}
		}
		svg {
			width: 23px;
			height: 33px;
			fill: #a7a7a7;
		}
	}
`;
export const LargeCardWrapper = styled.div`
	height: 400px;
	width: 100%;
	position: relative;

	border-radius: 7px;
	.css_code {
		article {
			text-align: center !important;
		}
	}

	&:before {
		content: '';
		position: absolute;

		height: 100%;
		width: 100%;
		background-size: calc(20 * 0.5px) calc(20 * 0.5px);
		background-image: radial-gradient(#0a113e30 0.5px, transparent 0.5px);
		left: 0;
		top: 0;
		border-radius: 0;
	}
	.write__up {
		padding: 0 25px;
		background: #0a113e30;
		border-radius: 6px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		text-align: left;
		bottom: 0;
		left: 0;
		height: 80px;

		h4 {
			font-size: 17px;
			text-transform: capitalize;
			font-weight: 500;
			color: #ececec;
			margin-bottom: 0;
		}
		p {
			font-size: 13px;
			color: #dedede;
		}
		svg {
			width: 17px;
			fill: #dedede;
		}
	}
`;