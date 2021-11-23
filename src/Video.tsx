import {Composition} from 'remotion';

import {Jasmine} from './Templates/Jasmine';
import {Lilly} from './Templates/Lilly';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Lilly"
				component={Lilly}
				durationInFrames={180}
				fps={30}
				width={406}
				height={720}
				defaultProps={{
					titleText: '3',
					labelText: 'Bedrooms',
				}}
			/>
			<Composition
				id="Jasmine"
				component={Jasmine}
				durationInFrames={180}
				fps={30}
				width={406}
				height={720}
				defaultProps={{
					titleText: '3',
					labelText: 'Bedrooms',
				}}
			/>
		</>
	);
};
