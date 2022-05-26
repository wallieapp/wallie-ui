import { React } from "react";
import { PropTypes } from "prop-types";

import { Formik } from 'formik';

import {
	Box,
	Flex,
	Text,
	Link,
	Input,
	Stack,
	Button,
	Heading,
	FormLabel,
	useColorModeValue
} from "@chakra-ui/react";

const SignUp = ({ error, loading, onLoginClick, onRegisterClick }) => {
  return (
    <Flex
		minH={"100vh"}
		align={"center"}
		justify={"center"}
		bg={useColorModeValue("gray.50", "gray.800")}
	>
		<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
					<Heading fontSize={"4xl"} textAlign={'center'}>
                        Não é cadastrado? Crie sua conta! 💰
                    </Heading>
                </Stack>
                <Formik initialValues={{ email: '', password: '' }} onSubmit={onRegisterClick}>
                        {({ values, handleChange, handleSubmit }) => (
                            <Box>
                                <Stack>
                                    <FormLabel margin={0}>Nome</FormLabel>
                                    <Input type={'text'} name={'name'} disabled={loading} placeholder="Informe seu nome" onChange={handleChange} />
                                </Stack>

                                <Stack>
                                    <FormLabel margin={0} marginTop={3}>Email</FormLabel>
                                    <Input type={'email'} name={'email'} disabled={loading} placeholder="Informe seu email" onChange={handleChange} />
                                </Stack>

                                <Stack direction={'column'} marginTop={3}>
									<FormLabel margin={0} >Senha</FormLabel>
                                    <Input type={'password'} name={'password'} disabled={loading} placeholder="Informe sua senha" onChange={handleChange} />
                                </Stack>

                                <Stack direction={'column'} marginTop={3}>
									<FormLabel margin={0}>Confirmar Senha</FormLabel>
                                    <Input type={'password'} name={'confirm_password'} disabled={loading} placeholder="Confirme sua senha" onChange={handleChange} />
                                </Stack>

                                <Stack spacing={10}>
                                    <Button bg={"green.400"} color={"white"} _hover={{ bg: "green.500" }} onClick={handleSubmit} disabled={!values.email || !values.password} marginTop={5} isLoading={loading}>
                                        Entrar
                                    </Button>
                                </Stack>

                                <Stack fontSize='xs' direction={{ base: "column", sm: "row" }} align={"center"} justify={"center"} marginTop={3}>
                                    <Text color={"gray.400"}>
                                        Já é cadastrado?
                                    </Text>
                                    <Link color={"green.400"} onClick={onLoginClick}>
                                        Acesse sua conta.
                                    </Link>
                                </Stack>
                            </Box>
                        )}
                    </Formik>
            </Stack>
    </Flex>
  );
};

SignUp.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	onLoginClick: PropTypes.func.isRequired,
	onRegisterClick: PropTypes.func.isRequired
};

export default SignUp;
