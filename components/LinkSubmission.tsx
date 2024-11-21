"use client";
import { useState } from "react";

const LinkSubmission = () => {
  const [smegma, setSmegma] = useState("_");
  const smegmaMoment = () => {
    setSmegma("smegma");
  };
  return (
    <div style={styles.bigContainer}>
      <div style={styles.linkContainer}>{smegma}</div>
      <div style={styles.container}>
        <div style={styles.epicContainer}>
          <div style={styles.title}>Input That Link Brody </div>
          <div>🙂‍↕️👇↕️</div>
        </div>
        <div>
          <input style={styles.input} placeholder="shortened link name" />
        </div>
        <div>
          <input style={styles.input} placeholder="link" />
        </div>
        <div style={styles.button} onClick={smegmaMoment}>
          Submit
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    marginTop: "1rem",
    backgroundColor: "#008CBA",
    width: "165px",
    height: "40px",
    borderRadius: "8px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  epicContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  linkContainer: {
    display: "flex",
    border: "1px lightgray solid",
    width: "100%",
    height: "3rem",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
  },
  bigContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    paddingBottom: "5rem",
    width: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "2rem",
    borderRadius: "8px",
    gap: ".5em",
    width: "250px",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    boxSizing: "border-box",
    width: "100%",
    height: "2rem",
    borderRadius: "8px",
    border: "1px lightgray solid",
    padding: ".5em 1em",
  },
};
export default LinkSubmission;
