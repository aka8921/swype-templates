import {Composition} from 'remotion';

import {Jasmine} from './Templates/Jasmine';
import {Lilly} from './Templates/Lilly';
import {Tulip} from './Templates/Tulip';
import {Marguerite} from './Templates/Marguerite';

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

			<Composition
				id="Tulip"
				component={Tulip}
				durationInFrames={180}
				fps={30}
				width={406}
				height={720}
				defaultProps={{
					headerText: 'Provident Park Square',
					titleText: '3',
					labelText: 'Bedrooms',
				}}
			/>

			<Composition
				id="Marguerite"
				component={Marguerite}
				durationInFrames={180}
				fps={30}
				width={406}
				height={720}
				defaultProps={{
					headerText: 'Provident Park Square',
					titleText: '3',
					labelText: 'Bedrooms',
				}}
			/>
		</>
	);
};
