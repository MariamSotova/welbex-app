import React from "react";
import classes from "./Footer.module.css";
import telegram from "./../img/telegram.svg";
import viber from "./../img/viber.svg";
import whatsapp from "./../img/whatsapp.svg";

const Content = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterInfo}>
        <div className={classes.FooterInfoMenu}>
          <h3>О компании</h3>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.FooterLink}
          >
            Партнёрская программа
          </a>
          <a
            href="/#link"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.FooterLink}
          >
            Вакансии
          </a>
        </div>
        <div className={classes.FooterInfoMenu}>
          <h3>Меню</h3>
          <div className={classes.FooterInfoMenuLink}>
            <div className={classes.FooterInfoMenuLinkItem}>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Расчёт стоимости
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Услуги
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Виджеты
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Интеграции
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Наши клиенты
              </a>
            </div>
            <div className={classes.FooterInfoMenuLinkItem}>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Кейсы
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLinkLetter}
              >
                Благодарственные письма
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLinkLetterMobile}
              >
                Благодарность клиентов
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Сертификаты
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Блог на Youtube
              </a>
              <a
                href="/#link"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.FooterLink}
              >
                Вопрос / Ответ
              </a>
            </div>
          </div>
        </div>
        <div className={classes.FooterInfoMenu}>
          <h3>Контакты</h3>
          <a className={classes.FooterLink} href="tel:+1123-456-7890">
            +7 555 555-55-55
          </a>
          <div className={classes.FooterSocialLinks}>
            <a href="/#telegram">
              <img src={telegram} width={24} height={24} alt="telegram"></img>
            </a>

            <a href="/#viber">
              <img src={viber} width={24} height={24} alt="viber"></img>
            </a>

            <a href="/#whatsapp">
              <img src={whatsapp} width={24} height={24} alt="whatsapp"></img>
            </a>
          </div>
          <p className={classes.FooterTextAddress}>
            Москва, Путевой проезд 3с1, к 902
          </p>
          <p className={classes.FooterText}>
            ©WELBEX 2022. Все права защищены.
          </p>
          <a
            href="/#link"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.FooterLinkPrivacy}
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
