import classes from "./NavBar.module.css";
import telegram from "./../img/telegram.svg";
import viber from "./../img/viber.svg";
import whatsapp from "./../img/whatsapp.svg";
import logo from "./../img/logo_welbex.svg";

const NavLinks = (props) => {
  return (
    <ul>
      <li
        className={classes.logoText}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#logo" className={classes.Logo}>
          <img className={classes.logo} src={logo} alt="logo"></img>
        </a>
        <br />
        <br /> крупный интегратор CRM
        <br /> в Росcии и ещё 8 странах
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/#services"
          className={classes.Services}
        >
          Услуги
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/#widgets"
          className={classes.Widgets}
        >
          Виджеты
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/#integrations"
          className={classes.Integrations}
        >
          Интеграции
        </a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a
          href="/#cases"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.Cases}
        >
          Кейсы
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a
          href="/#сertificates"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.Certificates}
        >
          Cертификаты
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#call" className={classes.Call}>
          +7 555 555-55-55
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#telegram" className={classes.Telegram}>
          <img className={classes.telegram} src={telegram} alt="telegram"></img>
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#viber" className={classes.Viber}>
          <img className={classes.viber} src={viber} alt="viber"></img>
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#whatsapp" className={classes.Whatsapp}>
          <img className={classes.whatsapp} src={whatsapp} alt="whatsapp"></img>
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
