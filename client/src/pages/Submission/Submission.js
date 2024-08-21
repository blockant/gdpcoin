import React, { useState, useEffect } from "react";

const Submission = () => {
  return (
    <center
      style={{ width: "100%", backgroundColor: "#eaf3fc", height: "100vh" }}>
      <table
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        bgcolor="#eaf3fc">
        <tr>
          <td style={{ padding: "40px 0" }}>
            <table
              style={{ width: "100%", maxidth: " 620px", margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", paddingBottom: "25px" }}>
                    <a href="#">
                      <img
                        style={{ height: "40px" }}
                        src="images/logo2x.png"
                        alt="logo"
                      />
                    </a>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#16a1fd",
                        paddingTop: "12px",
                      }}>
                      Thank you!
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                maxWidth: "620px",
                margin: "0 auto",
                backgroundColor: "#ffffff",
                border: "1px solid #e3edf8",
                borderBottom: "4px solid #16a2fd",
              }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", padding: "50px 30px" }}>
                    <img
                      style={{ width: "88px", marginBottom: "10px" }}
                      src="images/kyc-progress.png"
                      alt="img"
                    />
                    <h2
                      style={{
                        fontSize: "18px",
                        color: "#16a1fd",
                        fontWeight: "400",
                        marginBottom: "8px",
                      }}>
                      Please check your mail and verify.
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <table style=width:100%;max-width:620px;margin:0 auto;">
              <tbody></tbody>
            </table> */}
          </td>
        </tr>
      </table>
    </center>
  );
};

export default Submission;
