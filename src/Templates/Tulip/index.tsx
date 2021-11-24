import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import './tulip.css';

export const Tulip: React.FC<{
	headerText: string;
	titleText: string;
	labelText: string;
}> = ({titleText, labelText, headerText}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const height = spring({
		fps,
		frame,
		from: 0,
		to: 180,
		config: {
			damping: 200,
		},
	});

	const heightRevert = spring({
		fps,
		frame: frame - 150,
		from: 180,
		to: 0,
		config: {
			damping: 200,
		},
	});

	const metaTitleScale = spring({
		fps,
		frame: frame - 40,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
	});

	const metaLabelScale = spring({
		fps,
		frame: frame - 60,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
	});

	const scalerevert = spring({
		fps,
		frame: frame - 150,
		from: 1,
		to: 0,
		config: {
			damping: 200,
		},
	});

	const header = headerText.split(' ').map((t) => ` ${t} `);

	return (
		<div className="tulip-container">
			<div
				className="tulip"
				style={{
					height: `${frame > 149 ? heightRevert : height}px`,
				}}
			>
				<div
					className="tulip-heading"
					// style={{
					// 	transform: `scale(${headerScale})`,
					// }}
				>
					{/* Provident Park Square */}
					{header.map((t: any, i: any) => {
						return (
							<span
								key={t}
								style={{
									transform: `scale(${
										frame > 129
											? scalerevert
											: spring({
													fps,
													frame: frame - i * 5 - 20,
													config: {
														damping: 100,
														stiffness: 200,
														mass: 0.5,
													},
											  })
									})`,
									display: 'inline-block',
								}}
							>
								{t} &nbsp;
							</span>
						);
					})}
				</div>
				<div className="tulip-meta-items">
					<div className="tulip-meta">
						<div
							className="tulip-title"
							style={{
								transform: `scale(${
									frame > 129 ? scalerevert : metaTitleScale
								})`,
							}}
						>
							3
						</div>
						<div
							className="tulip-label"
							style={{
								transform: `scale(${
									frame > 129 ? scalerevert : metaLabelScale
								})`,
							}}
						>
							Beds
						</div>
					</div>

					<div className="tulip-meta">
						<div
							className="tulip-title"
							style={{
								transform: `scale(${
									frame > 129 ? scalerevert : metaTitleScale
								})`,
							}}
						>
							2
						</div>
						<div
							className="tulip-label"
							style={{
								transform: `scale(${
									frame > 129 ? scalerevert : metaLabelScale
								})`,
							}}
						>
							Baths
						</div>
					</div>

					<div className="tulip-meta">
						<div
							className="tulip-title"
							style={{
								transform: `scale(${
									frame > 129 ? scalerevert : metaTitleScale
								})`,
							}}
						>
							2k
						</div>
						<div
							className="tulip-label"
							style={{
								transform: `scale(${
									frame > 129 ? scalerevert : metaLabelScale
								})`,
							}}
						>
							Sqft
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
