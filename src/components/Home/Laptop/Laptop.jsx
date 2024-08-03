import React from "react";
import "./Laptop.css";
import Keyboard from "../../../assets/icons/keyboard.svg";

export default function Laptop() {
  return (
    <div className="laptop section">
      <section className="scene__visible">
        <div className="scene__zoom">
          <div className="scene">
            <div className="scene__rock">
              <div className="scene__spin">
                <div className="scene__shadow">
                  <div className="scene__jump">
                    <div className="scene__flip">
                      {/* This is the spinning 3D laptop */}
                      <div className="jbook">
                        <div className="jbook__shell shell shell--top">
                          <div className="cuboid up">
                            <div className="cuboid__side"></div>
                            <div className="cuboid__side"></div>
                            <div className="cuboid__side"></div>
                            <div className="cuboid__side"></div>
                            <div className="cuboid__side up">
                              <img
                                className="logo-abros"
                                src="/assets/logo/icon150.webp"
                              />
                              <p className="sticker-abros">ABROS</p>
                            </div>
                            <div className="cuboid__side down">
                              <div className="window">
                                <div className="border">
                                  <div className="camera"></div>
                                </div>
                                <div className="screen"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jbook__shell shell shell--bottom">
                          <div className="cuboid down">
                            <div className="cuboid__side back"></div>
                            <div className="cuboid__side right">
                              <div className="hdmi"></div>
                              <div className="type-c"></div>
                              <div className="card-rider"></div>
                            </div>
                            <div className="cuboid__side front"></div>
                            <div className="cuboid__side left">
                              <div className="mag-charge">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                              </div>
                              <div className="type-c"></div>
                              <div className="type-c"></div>
                              <div className="aux"></div>
                            </div>
                            <div className="cuboid__side up">
                              <div className="laptop-keyboard">
                                <img src={Keyboard} />
                              </div>
                              <div className="laptop-trackpad"></div>
                            </div>
                            <div className="cuboid__side down">
                              <div className="stand"></div>
                              <div className="stand"></div>
                              <div className="stand"></div>
                              <div className="stand"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="light-effect"></div>
    </div>
  );
}
