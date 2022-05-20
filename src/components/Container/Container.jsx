import { ContainerDiv } from './styles';
import { getClasses } from '../../utils/styler';

const Container = ({ id, children, ...props }) => (
	<ContainerDiv id={id} className={getClasses({ ...props }, { container: true })}>
        {children}
    </ContainerDiv>
);

export default Container;