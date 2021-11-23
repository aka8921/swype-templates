import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

require('./lilly.css');

export const Lilly: React.FC<{
	titleText: string;
	labelText: string;
}> = ({titleText, labelText}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 150,
		config: {
			stiffness: 50,
		},
	});

	const opacity = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 150,
		config: {
			stiffness: 50,
		},
	});

	const lillyMarginTop = spring({
		fps,
		from: -500,
		to: 0,
		frame,
		config: {
			stiffness: 50,
		},
	});

	const lillyDimensions = spring({
		fps,
		from: 0,
		to: 90,
		frame: frame,
		config: {
			stiffness: 50,
			damping: 10,
		},
	});

	const lillyIconScale = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 10,
		config: {
			stiffness: 50,
			damping: 200,
		},
	});

	const metaWidth = spring({
		fps,
		from: 0,
		to: 150,
		frame: frame - 40,
		config: {
			stiffness: 50,
			damping: 200,
		},
	});

	const metaMargin = spring({
		fps,
		from: 0,
		to: 20,
		frame: frame - 40,
		config: {
			stiffness: 50,
			damping: 200,
		},
	});

	const backgroundOpacity = spring({
		fps,
		from: 0,
		to: 0.7,
		frame: frame - 40,
		config: {
			stiffness: 50,
			damping: 200,
		},
	});

	return (
		<div className="lilly-container">
			<div
				className="lilly"
				style={{
					marginTop: `${lillyMarginTop}px`,
					background: `rgba(255, 255, 255, ${backgroundOpacity})`,
					transform: `scale(${scale})`,
					opacity: `${opacity}`,
				}}
			>
				<div
					className="lilly-icon-container"
					style={{
						width: `${lillyDimensions}px`,
						height: `${lillyDimensions}px`,
					}}
				>
					<img
						style={{
							transform: `scale(${lillyIconScale})`,
						}}
						src="https://res.cloudinary.com/deywmpeni/image/upload/v1634551464/housing-assets/housing-chicago/svg/bed_nrnege.svg"
						alt="Beds"
					/>
				</div>
				<div
					className="lilly-meta"
					style={{
						marginLeft: `${metaMargin}px`,
					}}
				>
					<span
						className="lilly-title"
						style={{
							width: `${metaWidth}px`,
						}}
					>
						{titleText}
					</span>
					<span
						className="lilly-label"
						style={{
							width: `${metaWidth}px`,
						}}
					>
						{labelText}
					</span>
				</div>
			</div>
		</div>
	);
};
