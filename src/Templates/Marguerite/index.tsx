import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import './marguerite.css';

export const Marguerite: React.FC<{
	headerText: string;
	titleText: string;
	labelText: string;
}> = ({titleText, labelText, headerText}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pinTopMargin = spring({
		fps,
		frame,
		from: -100,
		to: 0,
		config: {
			damping: 10,
		},
	});

	const titleWidth = spring({
		fps,
		frame: frame - 40,
		from: 0,
		to: 185,
		config: {
			damping: 10,
		},
	});

	const titlePadding = spring({
		fps,
		frame: frame - 40,
		from: 0,
		to: 10,
		config: {
			damping: 10,
		},
	});

	const labelWidth = spring({
		fps,
		frame: frame - 60,
		from: 0,
		to: 100,
		config: {
			damping: 10,
		},
	});

	const labelPadding = spring({
		fps,
		frame: frame - 60,
		from: 0,
		to: 10,
		config: {
			damping: 10,
		},
	});

	const scalePin = spring({
		fps,
		frame: frame - 15,
		from: 0.2,
		to: 1,
		config: {
			damping: 100,
		},
	});

	const scaleDown = spring({
		fps,
		frame: frame - 150,
		from: 1,
		to: 0,
		config: {
			damping: 100,
		},
	});

	const marginRightMarguerite = spring({
		fps,
		frame: frame - 150,
		from: 0,
		to: 200,
		config: {
			damping: 100,
		},
	});

	const opacityMarguerite = spring({
		fps,
		frame: frame - 150,
		from: 1,
		to: 0,
		config: {
			damping: 100,
		},
	});

	return (
		<div className="marguerite-container">
			<div
				className="marguerite"
				style={{
					transform: `scale(${scaleDown})`,
					overflow: 'hidden',
					marginRight: `-${marginRightMarguerite}px`,
					opacity: opacityMarguerite,
				}}
			>
				<div className="marguerite-meta">
					<div
						className="marguerite-title"
						style={{
							width: `${titleWidth}px`,
							padding: `10px ${titlePadding}px`,
						}}
					>
						Electron City
					</div>
					<div
						className="marguerite-label"
						style={{
							width: `${labelWidth}px`,
							padding: `10px ${labelPadding}px`,
						}}
					>
						Bangalore
					</div>
				</div>
				<div className="marguerite-icon">
					<svg
						width="120"
						height="167"
						viewBox="0 0 120 167"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						style={{
							transform: `scale(${scalePin})`,
							marginTop: `${pinTopMargin}px`,
						}}
					>
						<path
							d="M60 0C44.087 0 28.8258 6.32141 17.5736 17.5736C6.32141 28.8258 0 44.087 0 60C0 110.769 60 166.154 60 166.154C60 166.154 120 110.769 120 60C120 52.1207 118.448 44.3185 115.433 37.039C112.417 29.7595 107.998 23.1451 102.426 17.5736C96.8549 12.0021 90.2405 7.58251 82.961 4.56723C75.6815 1.55195 67.8793 0 60 0ZM60 100.394C52.0109 100.394 44.2011 98.0248 37.5584 93.5862C30.9156 89.1477 25.7383 82.8391 22.681 75.458C19.6236 68.077 18.8237 59.9552 20.3823 52.1195C21.9409 44.2839 25.7881 37.0864 31.4372 31.4372C37.0864 25.7881 44.2839 21.9409 52.1195 20.3823C59.9552 18.8237 68.077 19.6236 75.4581 22.681C82.8391 25.7383 89.1477 30.9156 93.5863 37.5584C98.0248 44.2011 100.394 52.0108 100.394 60C100.379 70.7086 96.1187 80.9744 88.5466 88.5466C80.9744 96.1187 70.7086 100.379 60 100.394Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};
