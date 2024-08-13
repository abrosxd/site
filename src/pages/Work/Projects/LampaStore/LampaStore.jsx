import React from "react";
import { useTranslation } from "react-i18next";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./LampaStore.css";

export default function LampaStore() {
  const customStyleCode = {
    backgroundColor: "transparent",
    fontSize: "medium",
  };

  const { t: w } = useTranslation("Work");
  const { t: t } = useTranslation("Work/Projects/LampaStore");

  return (
    <div className="case lampa-store">
      <h1>{t("title")}</h1>
      <div className="header">
        <div className="left">
          <h3>{t("header.description")}</h3>
          <div className="buttons">
            <a href="https://t.me/abrosxd" target="_blank">
              {t("header.buttons.1")}
            </a>
          </div>
        </div>
        <div className="right">
          <div className="widget stack">
            <h2>{w("stack")}</h2>
            <div className="icons">
              <img src="/assets/icons/stack/html5.png" />
              <img src="/assets/icons/stack/css3.png" />
              <img src="/assets/icons/stack/js.png" />
            </div>
          </div>
          <div className="widget time">
            <h2>{w("time")}</h2>
            <p>{t("header.time")}</p>
          </div>
          <div className="widget role">
            <h2>{w("role")}</h2>
            <p>{t("header.role")}</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <h2>{w("info")}</h2>
          <div className="sec1">
            <div className="left">
              <h3>{w("client")}</h3>
              <p>{t("content.info.client")}</p>
            </div>
            <div className="right">
              <h3>{w("tasks")}</h3>
              <ul>
                <li>{t("content.info.tasks.1")}</li>
                <li>{t("content.info.tasks.2")}</li>
                <li>{t("content.info.tasks.3")}</li>
                <li>{t("content.info.tasks.4")}</li>
              </ul>
            </div>
          </div>
          <h3>{w("problems")}</h3>
          <ul className="sec2">
            <li>
              <h3>01</h3>
              <h2>{t("content.info.problems.1.title")}</h2>
              <p>{t("content.info.problems.1.text")}</p>
            </li>
            <li>
              <h3>02</h3>
              <h2>{t("content.info.problems.2.title")}</h2>
              <p>{t("content.info.problems.2.text")}</p>
            </li>
            <li>
              <h3>03</h3>
              <h2>{t("content.info.problems.3.title")}</h2>
              <p>{t("content.info.problems.3.text")}</p>
            </li>
          </ul>
        </div>
        <div className="results">
          <h2>{w("results")}</h2>
          <div className="sec">
            <div className="card save-ui">
              <p>{t("content.results.1")}</p>
              <img src="/assets/projects/work/LampaStore/result-1.png" />
            </div>
            <div className="card news-integration">
              <p>{t("content.results.2")}</p>
              <img src="/assets/projects/work/LampaStore/result-2.png" />
            </div>
          </div>
          <div className="sec">
            <div className="card desc-status">
              <p>{t("content.results.3")}</p>
              <img src="/assets/projects/work/LampaStore/result-3.png" />
            </div>
          </div>
        </div>
        <div className="process">
          <h2>{w("process")}</h2>
          <div className="block design">
            <div className="left">
              <h3>UI</h3>
            </div>
            <div className="right">
              <div className="mockup">
                <img src="/assets/projects/work/LampaStore/mockup-desktop.png" />
              </div>
              <div className="sec">
                <div className="mockup">
                  <img src="/assets/projects/work/LampaStore/mockup-tablet.png" />
                </div>
                <div className="mockup">
                  <img src="/assets/projects/work/LampaStore/mockup-mobile.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="block logic-map">
            <div className="left">
              <h3>{t("content.process.logicmap")}</h3>
            </div>
            <div className="right">
              <img src="/assets/projects/work/LampaStore/logic-map.png" />
            </div>
          </div>
          <div className="block dev">
            <div className="left">
              <h3>{t("content.process.dev.title")}</h3>
            </div>
            <div className="right">
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.1")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
function deletePlugin(pluginToRemoveUrl) {
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
}
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.2")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
Lampa.SettingsApi.addComponent({
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
});
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.3")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
const newsBlock = "code news";

Lampa.SettingsApi.addParam({
  component: "skull",
  param: {
    name: "skull_news",
    type: "static",
  },
  field: { name: newsBlock },
});
                  `}
                  </SyntaxHighlighter>
                </div>
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
