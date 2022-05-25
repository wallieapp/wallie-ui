import { React } from "react";
import { PropTypes } from 'prop-types';

import {
  Flex,
  useColorModeValue
} from "@chakra-ui/react";

const SignUp = ({
    error,
    loading
 }) => {
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            Olá
        </Flex>
    );
};

SignUp.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default SignUp;
