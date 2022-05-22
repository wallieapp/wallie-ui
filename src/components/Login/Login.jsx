import React from "react";

import {
  Flex,
  ScaleFade,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";

const Login = () => (
	<ScaleFade in={true} initialScale={0.9}>
		<Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
		<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
			<Stack align={"center"}>
				<Heading fontSize={"2xl"}>Olá, tudo bem? bem vindo ao Wallie.</Heading>
			</Stack>

			<Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} >
				<Stack spacing={4}>
					<FormControl id="email">
						<FormLabel>Email</FormLabel>
						<Input type="email" />
					</FormControl>

					<FormControl id="password">
						<FormLabel>Senha</FormLabel>
						<Input type="password" />
					</FormControl>

					<Stack spacing={10}>
						<Stack direction={{ base: "column", sm: "row" }} justify={"center"}>
							<Link color={"blue.400"}>Registre-se no Wallie.</Link>
						</Stack>

						<Button
							bg={"blue.400"}
							color={"white"}
							_hover={{
							bg: "blue.500"
							}}
						>
							Entre
						</Button>
					</Stack>
				</Stack>
			</Box>
		</Stack>
		</Flex>
	</ScaleFade>
);

export default Login;
