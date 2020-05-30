import React, { useState } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';

import { rgbToHex } from 'utils';
import ModalLayout from 'components/modal';
import {
	setState,
	getState,
} from 'codewonders-helpers/bundle-cjs/helpers/localstorage';
import history from 'utils/history';
import { BorderWrap, CardWrapper } from './style';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import { ReactComponent as Delete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

const SmallCard = ({
	children,
	copyText,
	data,
	loved,
	saveGradient,
	url,
	layout,

	mode,
}) => {
	const [viewCode, setViewCode] = useState(false);
	const [show, setShow] = useState(false);

	const deleteGradient = (datas) => {
		setState(
			'SAVED_GRADIENTS',
			getState('SAVED_GRADIENTS').filter((item) => item.id !== datas.id)
		);
		history.go();
	};
	return (
		<>
			<CardWrapper
				className="card"
				layout={layout}
				color={{
					one: rgbToHex(data.color, 1),
					two: rgbToHex(data.color, 0),
				}}
			>
				{children}
				{viewCode && (
					<CodeSnippnets
						data={data}
						setViewCode={setViewCode}
						copyText={copyText}
					/>
				)}
				<div className="card-body">
					<div onClick={() => setShow(!show)}>
						<figure
							style={{
								background: data.color,
							}}
						/>
						<article>
							<h4>{data.name}</h4>
							<p className="hex__section">
								<span>{rgbToHex(data.color, 1)}</span> <ArrowRight />{' '}
								<span>{rgbToHex(data.color, 0)}</span>
							</p>
						</article>
					</div>
					<div
						className="small__colors"
						style={{
							background: `${rgbToHex(data.color, 1)}`,
						}}
					/>
					<div
						className="small__colors"
						style={{
							background: `${rgbToHex(data.color, 0)}`,
						}}
					/>
					<BorderWrap className="float-right border-wrap">
						<button
							onClick={() => {
								setViewCode(true);
								copyText();
							}}
							type="button"
							className="none-button mr-2"
						>
							<Code tabIndex="-1" />
						</button>

						<button type="button" className="none-button" tabIndex="-1">
							<a
								download={`Piggment-${data.name}`}
								href={url}
								title={data.name}
								tabIndex="0"
							>
								<Save tabIndex="-1" />
							</a>
						</button>
						{mode !== 'delete' && (
							<button
								onClick={() => saveGradient(data)}
								type="button"
								className="none-button ml-2"
							>
								<Love tabIndex="-1" className={`${loved && 'active_love'}`} />
							</button>
						)}
						{mode === 'delete' && (
							<button
								onClick={() => deleteGradient(data)}
								type="button"
								className="none-button ml-2"
							>
								<Delete tabIndex="-1" />
							</button>
						)}
					</BorderWrap>
				</div>
				{show && (
					<ModalLayout show={show} data={data} setShow={() => setShow(false)} />
				)}
			</CardWrapper>
		</>
	);
};

SmallCard.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	url: PropTypes.string,
	layout: PropTypes.bool,
	mode: PropTypes.string,
};

export default SmallCard;
