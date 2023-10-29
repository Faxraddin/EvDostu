import React from "react";
import { useSelector } from "react-redux";

export default function About1() {
  
  return (
    <>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4vw 0 4vw 0",
            gap: "1vw",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                gap: ".7vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "grey",
                  width: "100%",
                  height: "25vw",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 40px -17px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    background: "grey",
                    width: "19%",
                    height: "7vw",
                    borderRadius: "20px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    background: "grey",
                    width: "19%",
                    height: "7vw",
                    borderRadius: "20px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    background: "grey",
                    width: "19%",
                    height: "7vw",
                    borderRadius: "20px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    background: "grey",
                    width: "19%",
                    height: "7vw",
                    borderRadius: "20px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    background: "grey",
                    width: "19%",
                    height: "7vw",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                gap: "0vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1vw",
                  background: "white",
                  height: "50%",
                  padding: "1vw",
                  boxShadow: "0px 0px 40px -17px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
              >
                <h1>{useSelector(state => state.about.price)}azn</h1>
                <span>{useSelector(state => state.about.rooms)}</span>
                <span>{useSelector(state => state.about.address)}</span>
                <span>taqdim</span>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#6F4AFE",
                    fontSize: "1vw",
                    borderRadius: "20px",
                    height: "2.3vw",
                    marginTop: ".6vw",
                  }}
                >
                  Connect
                </button>
              </div>
              <div style={{ height: "30%" }}>
                <h1 style={{ fontSize: "1.6vw", color: "#8365FB" }}>Place</h1>
                <h3 style={{ fontSize: "1vw" }}>Address</h3>
                <div
                  style={{
                    display: "flex",
                    background: "grey",
                    width: "100%",
                    height: "90%",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2vw",
            }}
          >
            <h1 style={{ fontSize: "2vw", color: "#8365FB" }}>Aciglama</h1>
            <p style={{ fontSize: "1vw", width: "20%" }}>
              Onoiafjapsodincarhwfndvfchgvjklçnlkjjvhbnkjbvchgvbjnkhszeatsrydtufyiguilçokçlmnjbhvgcfxdsawesrdtfyguhjikhaepromv
              asdpõkºvaºprijmvadpwofkjariwghjPOKFÇIOAJNGVÇODFMKVÇTOERIJVPIAifjvospiojfgºisfjv~fjpgiafjfhvoihidfnvioçajfg
              <br></br>piafdjavpfiadjgpifajavadfijgtiojbpijf
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1vw",
              fontSize: "1vw",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "2vw", color: "#8365FB" }}>Alcitmalilar</h1>
            <div style={{ display: "flex", gap: "1vw" }}>
              <div>
                <h3>Wifi</h3>
                <h3>TV</h3>
              </div>
              <div>
                <h3>Divan</h3>
                <h3>Kondisioner</h3>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5vw",
              width: "100%",
              fontSize: "1vw",
              color: "purple",
            }}
          >
            <h1 style={{ fontSize: "2vw", color: "#8365FB" }}>Objectler</h1>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </div>
        </div>
      </div>
    </>
  );
}
