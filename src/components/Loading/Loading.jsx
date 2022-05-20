import Lottie from 'react-lottie';

import Container from '../Container';

const Loading = ({ withName, ...props }) => {
	const loadingAnimation = 'loading-animation.json';

	return (
		<Container>
			<Lottie
				options={{ loop: true, autoplay: true, animationData: require(`../../assets/animations/${loadingAnimation}`) }}
				{...props}
			/>
		</Container>
	);
};

export default Loading;