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
  Stack,
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
import { SetStateAction, useState } from "react";
import { SmashUploader } from "@smash-sdk/uploader";

<head>
  <meta charSet="UTF-8" />
  <script src="https://unpkg.com/@smash-sdk/uploader/dist/SmashUploader.browser.js"></script>
</head>;

const Register = () => {
  const [resolution, setResolution] = useState("aaa");
  const [year, setYear] = useState(2000);
  const [council, setCouncil] = useState("CONSU");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  function setFileNull() {
    setFile(null);
  }

  function upload() {
    const fileInput = document.getElementById("uploadInput");

    const su = new SmashUploader({
      region: "us-east-1",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZiZjVlOTRkLWRhYzMtNGNkYS05MGFhLTA1MjAxMTZjNTc2MC1ldSIsInVzZXJuYW1lIjoiNzkwNmNmNmEtYjU1YS00YmI0LTgxNDEtZjRhZTM2YWFmZTBlIiwicmVnaW9uIjoidXMtZWFzdC0xIiwiaXAiOiIxMzguNTkuMTE0LjAiLCJhY2NvdW50IjoiYzhhMGE3YzctMjhhNS00YTllLTg0MDAtZGJlN2ZlMzZkMzk1LWVhIiwiaWF0IjoxNjg2NTA5NTMyLCJleHAiOjQ4NDIyNjk1MzJ9.ExO9ubmdIisa1kR-t5CNhpi_ImR8OmAdaO97qm2_QUk",
    });
    const files = [file];
    su.upload({ files })
      .then((transfer) => {
        console.log(transfer);
        //transfer.transferUrl - Link com arquivo
        //esquema_requisicao_para_ocr => {'link': transfer.transferUrl}
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sendData() {
    upload();
    // 1. Enviar uma mensagem para o gerenciamento de usuario informando o usúario e timestamp da aço
    // NECESSÁRIO enviar Datetime.now() para rota api de gerenciamento de usuários
    // 2. Disponibilizar acesso as resoluções em formato pdf com link de acesso(sugestão google drive)
    // Extrair arquivos pdf do zip
    // 3. Enviar requisições ao módulo OCR passando o link para pdf, utilizar json no formato esquema_requisicao_para_ocr
    //{'link': transfer.transferUrl}
    // 4. Enviar json de resoluções extraidas para o módulo de armazenamento cadastrar a nova resolução, usar json no formato esquema_store_banco
    /**{
    "numero":"001/2016",
    "ano":2016,
    "data":"08/01/2016",
    "reitor":"Nome do reitor",
    "cabecalho":"todo texto até a palavra resolve",
    "texto":" todo texto da resolução",
    "link":"Link de acesso para o pdf da resolução",
      "email_usuario":"email do usuario que cadastrou a resolução"
  } */
  }

  return (
    <>
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
                  <Box>
                    <label>1. Ano da Resolução</label>
                    <Input
                      variant="filled"
                      type="number"
                      min="1900"
                      max="2099"
                      step="1"
                      value={year}
                      onChange={(e) => setYear(e.target.valueAsNumber)}
                    />
                  </Box>
                  <Box marginTop="24px">
                    <label>2. Conselho</label>
                    <RadioGroup
                      value={council}
                      onChange={(e) => setCouncil(e)}
                      variant="filled"
                    >
                      <Stack>
                        <Radio value="CONSU">CONSU</Radio>
                        <Radio value="CONSEPE">CONSEPE</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Box marginTop="24px">
                    <label style={{ marginTop: "48px" }}>
                      3. Resolução digitalizada
                    </label>
                    <InputGroup>
                      <UploadFormInput
                        placeholder={
                          file === null ? "Insira o arquivo .zip" : file?.name
                        }
                        variant="filled"
                        accept=".zip"
                        disabled
                      />
                      <InputRightElement>
                        {file === null ? (
                          <UploadLabel textStyle="caption1" htmlFor="logo">
                            <UploadButton
                              zIndex={-1}
                              leftIcon={<AttachmentIcon />}
                            >
                              Upload
                              <Input
                                type="file"
                                display="none"
                                name="logo"
                                id="logo"
                                accept=".zip"
                                variant="filled"
                                onChange={handleFileChange}
                              />
                            </UploadButton>
                          </UploadLabel>
                        ) : (
                          <RemoveLabel textStyle="caption1" htmlFor="logo">
                            <UploadButton onClick={() => setFileNull()}>
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
                    <Button onClick={() => sendData()}>Enviar</Button>
                  </Box>
                </form>
              </CardBody>
            </Card>
          </FormControl>
        </Content>
      </Box>
    </>
  );
};

export default Register;
