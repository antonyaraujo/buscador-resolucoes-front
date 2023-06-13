import { AuthContext } from "@/contexts/AuthContext";
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { FormEvent, useContext, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("\n");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const { signIn } = useContext(AuthContext);

  /**
   * Handle the submit. Send the user's credentials to be authorized.
   */
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    alert(data);

    setInvalidLogin((await signIn(data)) === 400);
  }

  return (
    <Flex
      justify="center"
      align="center"
      margin={{ base: "inherit", lg: "-48px" }}
      w="100%"
      gap="50px"
      px="10px"
    >
      <Flex
        display={{ base: "none", lg: "flex" }}
        flexDir="column"
        w="100%"
        maxW="646px"
        height="calc(100vh - 184px)"
        background="linear-gradient(0deg, rgba(175,179,191,1) 20%, rgba(139,144,153,1) 83%)"
        borderRadius="0px 0px 24px 24px"
        align="center"
        justify="center"
        color="white"
      >
        <Box maxW="450px">
          <Heading fontSize="2xl">Submissão de resoluções</Heading>
          <Text fontSize="xl" textAlign="justify">
            Bem-vindo(a)! <br /> Você está prestes a acessar nossa plataforma de
            busca de resoluções da UEFS. <br />
            Aqui, você encontrará um vasto acervo de resoluções abrangendo
            diferentes áreas e anos. Para poder submeter resoluções, por favor,
            faça login na sua conta. <br />
            Agradecemos por utilizar nosso sistema de busca de resoluções da
            UEFS!
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDir="column"
        w="100%"
        maxW="400px"
        textAlign="center"
        gap="20px"
      >
        <Heading fontSize="2xl">Login</Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDir="column" gap="20px">
            <FormControl isRequired isInvalid={invalidLogin}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AtSignIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Insira seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired isInvalid={invalidLogin}>
              <FormLabel>Senha</FormLabel>
              <InputGroup size="md">
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Insira sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Mostrar/esconder senha"
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handleClick}
                    colorScheme="transparent"
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>E-mail ou senha inválidos.</FormErrorMessage>
            </FormControl>
            <Button type="submit">Entrar</Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
