import "./home.scss";
import { Header } from "@/components/Header/header";
import { Main } from "@/components/Main/main";
import { Footer } from "@/components/Footer/footer";

export const Home = () => {
  return `
    <div class="container">
    ${Header()}
    ${Main()}
    ${Footer()}
    </div>
    `;
};
