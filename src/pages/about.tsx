import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  FormControl,
} from "@chakra-ui/react";
import { Content } from "@/styles/global";

const About = () => {
  return (
    <Box>
      <Content>
        <FormControl justifyContent="center" display="flex">
          <Card key="cadastro-resolucao" size="lg" maxWidth="60%">
            <CardHeader>
              <Heading size="md">
                Sobre o Buscador de Resoluções CONSU/CONSEPE - UEFS
              </Heading>
            </CardHeader>
            <CardBody textAlign="justify">
              Projeto de extensão da disciplina EXA 844 Programação para redes
              da Universidade Estadual de Feira de Santana (UEFS) Resumo do
              projeto O projeto consiste no desenvolvimento de um engenho de
              busca para resoluções da UEFS, o sistema deve permite o cadastro
              de resoluções, busca de resoluções por ano , tipo, texto e etc.
              Sobre o projeto O projeto é dividido em quatro módulos individuais
              são eles: gerenciamento de usuários ,cadastro de resoluções
              ,armazenamento de dados e busca, módulo de extração de dados, a
              fim de que os módulos fossem desenvolvidos independentes um dos
              outros foi estabelecido que a comunicação entre módulos seria
              feita através de APIs construídas junto aos módulos.
            </CardBody>
          </Card>
        </FormControl>
      </Content>
    </Box>
  );
};

export default About;
