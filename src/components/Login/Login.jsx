import {useState, React} from "react";

import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = ({
    error,
    loading,
    onLoginClick,
    onSignUpClick,
    onForgotPasswordClick
 }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    Olá, bem vindo ao Wallie!
                </Heading>
            </Stack>
            <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
            >
                <Stack spacing={4}>

                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" onChange={event => setEmail(event.target.value)}/>
                </FormControl>

                <FormControl id="password">
                    <Stack fontSize='xs' spacing={10} direction={{ base: "row" }} align={"center"} justify={"space-between"}>
                        <FormLabel>Senha</FormLabel>
                        <Link color={"gray.400"} _hover={{ color:"blue.400" }}>Esqueceu a senha?</Link>
                    </Stack>
                    <Input type="password" onChange={event => setPassword(event.target.value)}/>
                </FormControl>

                <Stack spacing={10}>
                    <Button bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }} onClick={() => onLoginClick({ email, password })}>
                    Entrar
                    </Button>
                </Stack>

                    <Stack fontSize='xs' direction={{ base: "column", sm: "row" }} align={"center"} justify={"center"}>
                        <Text color={"gray.400"}>
                            Ainda não possui uma conta?
                        </Text>
                        <Link color={"blue.400"} onClick={onSignUpClick}>
                            Cadastre-se
                        </Link>
                    </Stack>
                </Stack>
            </Box>
            </Stack>
        </Flex>
    );
};


export default Login;
