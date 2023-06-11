// Footer.js

import { Content } from "@/styles/global";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        marginTop: "48px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <Content>
        <p>
          © 2023 Buscador de Resoluções CONSU/CONSEPE (UEFS). Todos os direitos
          reservados.
        </p>
      </Content>
    </footer>
  );
};

export default Footer;
