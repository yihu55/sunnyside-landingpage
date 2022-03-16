import styled from "styled-components";
import img from "../images/desktop/image-header.jpg";

export const colors = {
  softRed: "hsl(7, 99%, 70%)",
  yellow: "hsl(51, 100%, 49%)",
  darkDesaturatedCyan: "hsl(167, 40%, 24%)",
  darkBlue: "hsl(198, 62%, 26%)",
  darkModerateCyan: "hsl(168, 34%, 41%)",
  veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
  veryDarkGrayish: "hsl(213, 9%, 39%)",
  darkGrayish: "hsl(232, 10%, 55%)",
  grayish: "hsl(210, 4%, 67%)",
  footer: "hsl(165, 64%, 71%)",
  textColor: "hsl(0, 0%, 100%)",
};
export const fonts = {
  // barlowFont: '"Barlow", sans_serif',
  // frauncesFont: '"Fraunces", serif',
  barlowFont: "Arial, Helvetica, sans-serif",
  frauncesFont: "cursive",
  fontSize: "18px",
};

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: ${fonts.barlowFont};
  .nav_logo p {
    font-size: 22px;
    color: ${colors.textColor};
    font-weight: 900;
  }
  .nav_menu {
    position: relative;
    left: 100px;
  }
  .nav_menu a {
    padding: 15px;
    margin: 20px;
    font-size: 13px;
    font-weight: 700;
    color: ${colors.textColor};
    :hover {
      background-color: lightblue;
      border-radius: 40px;
    }
  }
`;

export const HeaderStyled = styled.header`
  background: url(${img}) no-repeat center/cover;
  height: 800px;
  width: 100%;
  color: ${colors.textColor};
`;
export const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: 600px 600px 600px;

  div {
    position: relative;
  }
  div article {
    position: absolute;
    bottom: -60px;
  }
`;
export const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 110px;
`;
export const AsideStyled = styled.aside`
  text-align: center;
  height: 600px;
  padding: 100px;
  h3 {
    padding-bottom: 50px;
  }
  .recension {
    display: flex;
    flex-direction: row;
    div {
      padding: 20px;
    }
  }
`;
export const FooterStyled = styled.footer`
  text-align: center;
  background-color: ${colors.footer};
  height: 400px;
  h4 {
    margin-top: 0;
    padding: 30px;
  }
`;
export default { colors, fonts };
