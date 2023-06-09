import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  FormControl,
  Input,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  RadioGroup,
  Radio,
  Button,
  InputGroup,
  InputRightElement,
  FormLabel,
} from "@chakra-ui/react";
import { AttachmentIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Content,
  FormInput,
  UploadButton,
  UploadLabel,
  UploadFormInput,
  RemoveLabel,
} from "@/styles/global";

const Register = () => (
  <Box width="100%">
    <Content>
      <FormControl justifyContent="center" display="flex">
        <Card key="cadastro-resolucao" size="lg">
          <CardHeader>
            <Heading size="md">
              Cadastro de Resolução CONSU/CONSEPE - UEFS
            </Heading>
          </CardHeader>
          <CardBody minW="50%">
            <form>
              <Box marginTop="24px">
                <label>1. Nome da Resolução</label>
                <Input placeholder="medium size" size="md" variant="filled" />
              </Box>
              <Box marginTop="24px">
                <label>2. Conselho</label>
                <RadioGroup value={3}>
                  <Radio>CONSU</Radio>
                  <Radio>CONSEPE</Radio>
                </RadioGroup>
              </Box>
              <Box marginTop="24px">
                <label style={{ marginTop: "48px" }}>3. Arquivo</label>
                <InputGroup>
                  <UploadFormInput placeholder="Arquivo" value={3} disabled />
                  <InputRightElement>
                    {true ? (
                      <UploadLabel textStyle="caption1" htmlFor="logo">
                        <UploadButton zIndex={-1} leftIcon={<AttachmentIcon />}>
                          Upload
                          <Input
                            type="file"
                            display="none"
                            name="logo"
                            id="logo"
                            accept="zip"
                          />
                        </UploadButton>
                      </UploadLabel>
                    ) : (
                      <RemoveLabel textStyle="caption1" htmlFor="logo">
                        <UploadButton>
                          <DeleteIcon />
                          <Input
                            display="none"
                            name="logo"
                            id="logo"
                            accept="zip"
                          />
                        </UploadButton>
                      </RemoveLabel>
                    )}
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box
                marginTop="48px"
                alignContent="right"
                right="0"
                w="100%"
                display="flex"
                justifyContent="right"
              >
                <Button>Enviar</Button>
              </Box>
            </form>
          </CardBody>
        </Card>
      </FormControl>
    </Content>
  </Box>
);

export default Register;
