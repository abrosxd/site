import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Prism from "prismjs";
import "./LampaStore.css";

export default function LampaStore() {
  const { t: w } = useTranslation("Work");
  const { t: t } = useTranslation("Work/Projects/LampaStore");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="case lampa-store">
      <div className="sticky-header">
        <div className="section">
          <h2>{w("stack")}</h2>
          <div className="icons">
            <img src="/assets/icons/stack/html5.png" alt="HTML5" />
            <img src="/assets/icons/stack/css3.png" alt="CSS3" />
            <img src="/assets/icons/stack/js.png" alt="JavaScript" />
          </div>
        </div>
        <div className="section">
          <h2>{w("time")}</h2>
          <p>{t("sticky.time")}</p>
        </div>
        <div className="section">
          <h2>{w("role")}</h2>
          <p>{t("sticky.role")}</p>
        </div>
      </div>
      <div className="header">
        <h1>{t("title")}</h1>
        <img src="/assets/projects/LampaStore/header.png" alt="Header" />
      </div>
      <div className="content">
        <h2>{t("description")}</h2>
        <div className="buttons">
          <a
            className="but"
            href="https://t.me/abrosxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("buttons.1")}
          </a>
        </div>

        <div className="block info">
          <div className="flex">
            <div className="section50">
              <h4>{w("client")}</h4>
              <h3>{t("info.client")}</h3>
            </div>
            <div className="section50">
              <h4>{w("tasks")}</h4>
              <ul className="tasks">
                <li>{t("info.tasks.1")}</li>
                <li>{t("info.tasks.2")}</li>
                <li>{t("info.tasks.3")}</li>
                <li>{t("info.tasks.4")}</li>
              </ul>
            </div>
          </div>
          <h4>{w("problems")}</h4>
          <ul className="problems">
            <li className="card">
              <h5>01</h5>
              <h3>{t("info.problems.1.title")}</h3>
              <p>{t("info.problems.1.text")}</p>
            </li>
            <li className="card">
              <h5>02</h5>
              <h3>{t("info.problems.2.title")}</h3>
              <p>{t("info.problems.2.text")}</p>
            </li>
            <li className="card">
              <h5>03</h5>
              <h3>{t("info.problems.3.title")}</h3>
              <p>{t("info.problems.3.text")}</p>
            </li>
          </ul>
        </div>
        <div className="block flex results">
          <div className="section20">
            <h2>{w("results")}</h2>
          </div>
          <div className="section80">
            <div className="cards">
              <div className="card">
                <h3 className="t1">{t("results.1")}</h3>
                <img src="/assets/projects/LampaStore/result-1.png" />
              </div>
              <div className="card">
                <h3 className="t2">{t("results.2")}</h3>
                <img src="/assets/projects/LampaStore/result-2.png" />
              </div>
              <div className="card">
                <h3 className="t3">{t("results.3")}</h3>
                <img src="/assets/projects/LampaStore/result-3.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="block flex design">
          <div className="section20">
            <h2>{w("design")}</h2>
          </div>
          <div className="section80">
            <div className="img">
              <img src="/assets/projects/LampaStore/mockup-desktop.png" />
            </div>
            <div className="flex">
              <div className="img">
                <img src="/assets/projects/LampaStore/mockup-tablet.png" />
              </div>
              <div className="img">
                <img src="/assets/projects/LampaStore/mockup-mobile.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="block flex map">
          <div className="section20">
            <h2>Logic map</h2>
          </div>
          <div className="section80">
            <div className="img">
              <img src="/assets/projects/LampaStore/logic-map.png" />
            </div>
          </div>
        </div>
        <div className="block flex dev">
          <div className="section20">
            <h2>{w("dev")}</h2>
          </div>
          <div className="section80">
            <div className="step">
              <h3>{t("dev.1")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`function deletePlugin(pluginToRemoveUrl) {
  var plugins = Lampa.Storage.get("plugins");
  var updatedPlugins = plugins.filter(function (obj) {
    return obj.url !== pluginToRemoveUrl;
  });
  Lampa.Storage.set("plugins", updatedPlugins);
  Lampa.Settings.update();
  Lampa.Noty.show("Плагин успешно удален");
  Lampa.Storage.set("needRebootSettingExit", true);
  settingsWatch();
}

function checkPlugin(pluginToCheck) {
  var plugins = Lampa.Storage.get("plugins");
  var checkResult = plugins.filter(function (obj) {
    return obj.url == pluginToCheck;
  });
  if (JSON.stringify(checkResult) !== "[]") {
    return true;
  } else {
    return false;
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="step">
              <h3>{t("dev.2")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`Lampa.SettingsApi.addComponent({
  component: "skull",
  name: "Skull Store",
  icon: icon_skull,
});

Lampa.Settings.listener.follow("open", function (e) {
  if (e.name == "main") {
    setTimeout(function () {
      $('div[data-component="skull_online"]').remove();
      $('div[data-component="skull_tv"]').remove();
      $('div[data-component="skull_torpars"]').remove();
      $('div[data-component="skull_interface"]').remove();
      $('div[data-component="skull_control"]').remove();
      $('div[data-component="skull_style"]').remove();
    }, 0);
    $("#hideInstall").remove();
    setTimeout(function () {
      $("div[data-component=plugins]").before(
        $("div[data-component=skull]")
      );
    }, 30);
  }
});`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="step">
              <h3>{t("dev.3")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`const newsBlock = "code news";
Lampa.SettingsApi.addParam({
  component: "skull",
  param: {
    name: "skull_news",
    type: "static",
  },
  field: { name: newsBlock },
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>{w("footer")}</p>
        <p>lampa.mx | google.com</p>
      </div>
    </div>
  );
}
