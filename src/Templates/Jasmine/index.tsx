import {useCurrentFrame, useVideoConfig, spring, interpolate} from 'remotion';

import './jasmine.css';

export const Jasmine: React.FC<{
	titleText: string;
	labelText: string;
}> = ({titleText, labelText}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const top = spring({
		fps,
		from: -200,
		to: 0,
		frame,
	});

	const topParent = spring({
		fps,
		from: -200,
		to: 0,
		frame,
	});

	const scale = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 5,
	});

	const scaleParent = spring({
		fps,
		from: 0,
		to: 1,
		frame,
	});

	const scaleTitle = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 10,
	});

	const scaleLabel = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 15,
	});

	const scaleParentDown = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 90,
		config: {
			overshootClamping: true,
		},
	});

	return (
		<div className="jasmine-container">
			<div
				className="jasmine"
				style={{
					transform: `scale(${frame < 59 ? scaleParent : scaleParentDown})`,
					opacity: opacity,
					marginTop: `${topParent}px`,
				}}
			>
				<span
					className="title"
					style={{
						transform: `scale(${scaleTitle})`,
					}}
				>
					Thomson Impressions
				</span>
				<span
					style={{
						transform: `scale(${scaleLabel})`,
					}}
					className="label"
				>
					2 BEDDER
				</span>
			</div>
		</div>
	);
};
