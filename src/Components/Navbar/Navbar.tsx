// Navbar.js
import { Content } from "@/styles/global";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        padding: "24px 24px",
        marginBottom: "48px",
      }}
    >
      <Content>
        <Box style={{ gap: "24px", flexDirection: "row", width: "70%" }}>
          <Link href="/search">Home</Link>

          <Link href="/register">Cadastrar Resolução</Link>

          <Link href="/search">Buscar</Link>

          <Link href="/login">Login</Link>

          <Link href="/about">Sobre</Link>
        </Box>
      </Content>
    </nav>
  );
};

export default Navbar;
