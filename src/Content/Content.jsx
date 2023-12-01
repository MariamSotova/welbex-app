import React from "react";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes.Content}>
      <div className={classes.ContentInfo}>
        <div className={classes.Info}>
          <p className={classes.InfoHeader}>
            Зарабатывайте <br /> больше{" "}
            <span className={classes.GradientText}>
              <br /> с WELBEX
            </span>
          </p>
          <p className={classes.InfoText}>
            Развиваем и контролируем <br />
            продажи за вас
          </p>
        </div>
        <div className={classes.InfoAdvantages}>
          <div>
            <p>
              Вместе с 
              <span className={classes.GradientInfoText}>бесплатной</span>
              <br />{" "}
              <span className={classes.GradientInfoTextItem}>
                консультацией
              </span>{" "}
              мы дарим:
            </p>
          </div>
          <div className={classes.InfoList}>
            <div className={classes.InfoItem}>
              <div className={classes.InfoItemContainer}>
                <h4>Виджеты</h4>
                <p>30 готовых решений</p>
              </div>
              <div className={classes.InfoItemContainer}>
                <h4>Skype Аудит</h4>
                <p>отдела продаж и CRM системы</p>
              </div>
            </div>
            <div className={classes.InfoItem}>
              <div>
                <h4>Dashboard</h4>
                <p>с показателями вашего бизнеса</p>
              </div>
              <div>
                <h4>35 дней</h4>
                <p>использования CRM</p>
              </div>
            </div>
          </div>
          <div className={classes.MobileInfo}>
            <div className={classes.MobileInfoList}>
              <div className={classes.MobileInfoItem}>
                <div className={classes.MobileInfoLine}></div>
                <p>Skype аудит</p>
              </div>
              <div className={classes.MobileInfoItem}>
                <div className={classes.MobileInfoLine}></div>
                <p>Dashboard</p>
              </div>
            </div>
            <div className={classes.MobileInfoList}>
              <div className={classes.MobileInfoItem}>
                <div className={classes.MobileInfoLine}></div>
                <p>30 виджетов</p>
              </div>
              <div className={classes.MobileInfoItem}>
                <div className={classes.MobileInfoLine}></div>
                <p>Месяц аmoCRM</p>
              </div>
            </div>
          </div>
          <div>
            <button type="button" className={classes.Button}>
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
