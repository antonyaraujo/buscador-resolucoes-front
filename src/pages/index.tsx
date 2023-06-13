import { useState, useEffect } from "react";
import {
  Box,
  Input,
  Flex,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Radio,
  RadioGroup,
  Stack,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import api from "../services/api_busca";

interface Resolucao {
  ano: string;
  orgao: string;
  descricao: string;
  numero: string;
  link: string;
}

function Search() {
  const [keywords, setKeywords] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [resolutions, setResolutions] = useState<Resolucao[]>([]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await api.post("/suaURLaqui", {
        palavras_chave: keywords,
        data_inicio: startDate,
        data_final: endDate,
      });
      setResolutions(response.data);
    } catch (error) {
      console.error("Erro ao buscar resoluções:", error);
    }
  };

  return (
    <Box>
      <Box maxWidth="1440px" padding="32px 32px">
        <Flex gap="15px" w="100%" align="center">
          <Box w="100%" maxW="600px">
            <Text>Realize a busca de resoluções</Text>
            <Input
              placeholder="Palavras-chave"
              value={keywords}
              w="100%"
              onChange={(e) => setKeywords(e.target.value)}
            />
          </Box>
          <Box w="100%" maxW="200px">
            <Text>Data de início</Text>
            <Input
              placeholder="Data de Início"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Box>
          <Box w="100%" maxW="200px">
            <Text>Data final</Text>
            <Input
              placeholder="Data Final"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
          <Box mt="20px">
            <Button bg="#333" color="white" onClick={handleSearch}>
              Buscar
            </Button>
          </Box>

          <Flex flexDir="column" gap="5px">
            <Checkbox value="CONSUL">CONSUL</Checkbox>
            <Checkbox value="CONSEPE">CONSEPE</Checkbox>
          </Flex>
        </Flex>
        <Box>
          <TableContainer mt="24px">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Ano</Th>
                  <Th>Orgão</Th>
                  <Th>Descrição</Th>
                  <Th>Número</Th>
                  <Th>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                {resolutions &&
                  resolutions.map((resolution) => (
                    <Tr key={resolution?.numero}>
                      <Td>{resolution?.ano}</Td>
                      <Td>{resolution?.orgao}</Td>
                      <Td maxWidth="30%" overflow="hidden">
                        {resolution?.descricao}
                      </Td>
                      <Td>{resolution?.numero}</Td>
                      <Td>
                        <a href={resolution?.link}>Link para a resolução</a>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;
