import { React } from "react";
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';

import {
  Flex,
  Box,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = ({
    loading,
    onLoginClick,
    onSignUpClick,
    onForgotPasswordClick
 }) => {
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>
                        Olá, bem vindo ao Wallie! 💰
                    </Heading>
                </Stack>
                <Formik initialValues={{ email: '', password: '' }} onSubmit={onLoginClick}>
						{({ values, handleChange, handleSubmit }) => (
							<Box>
								<Stack>
									<FormLabel>Email</FormLabel>
									<Input type={'email'} name={'email'} disabled={loading} placeholder="Informe seu email" onChange={handleChange} />
								</Stack>

								<Stack direction={'column'} marginTop={3}>
									<Stack direction={'row'} justify={'space-between'}>
                                        <FormLabel>Senha</FormLabel>
                                        <Link onClick={onForgotPasswordClick} color={"gray.400"} _hover={{ color:"green.400" }}>
                                            Esqueceu a senha?
                                        </Link>
									</Stack>
									<Input type={'password'} name={'password'} disabled={loading} placeholder="Informe sua senha" onChange={handleChange} />
								</Stack>

                                <Stack spacing={10}>
                                    <Button bg={"green.400"} color={"white"} _hover={{ bg: "green.500" }} onClick={handleSubmit} disabled={!values.email || !values.password} marginTop={5} isLoading={loading}>
                                        Entrar
                                    </Button>
                                </Stack>

                                <Stack fontSize='xs' direction={{ base: "column", sm: "row" }} align={"center"} justify={"center"} marginTop={3}>
                                    <Text color={"gray.400"}>
                                        Ainda não possui uma conta?
                                    </Text>
                                    <Link color={"green.400"} onClick={onSignUpClick}>
                                        Cadastre-se
                                    </Link>
                                </Stack>
							</Box>
						)}
					</Formik>
            </Stack>
        </Flex>
    );
};

Login.propTypes = {
	loading: PropTypes.bool.isRequired,
	onLoginClick: PropTypes.func.isRequired,
	onSignUpClick: PropTypes.func.isRequired,
	onForgotPasswordClick: PropTypes.func.isRequired
};

export default Login;
