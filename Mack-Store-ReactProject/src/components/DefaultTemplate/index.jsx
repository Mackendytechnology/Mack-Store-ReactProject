import { Header } from "../Header";
import { Footer } from "../footer";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
