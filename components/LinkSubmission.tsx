"use client";
import { useState } from "react";
import createLink from "../lib/createLink";

const LinkSubmission = () => {
  const [smegma, setSmegma] = useState("_");
  const [input, setInput] = useState("");
  const [alias, setAlias] = useState("");
  const [error, setError] = useState(false);

  const smegmaMoment = async () => {
    // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    try {
      new URL(input);
    } catch {
      setError(true);
      return;
    }
    setError(false);
    const currentUrl = window.location.origin;
    const generatedLink = `${currentUrl}/${alias}`;
    const result = await createLink(alias, input);
    if (result) {
      setSmegma(generatedLink);
    } else {
      setSmegma("Error creating link");
    }
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
          <input
            style={styles.input}
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            placeholder="shortened link name"
          />
        </div>
        <div>
          <input
            type="url"
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="link"
          />
        </div>
        {error && (
          <div style={styles.error}>
            Ok buddy pal, it says link, not whatever you just typed.
          </div>
        )}
        <div style={styles.button} onClick={smegmaMoment}>
          Submit
        </div>
      </div>
    </div>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  error: {
    color: "red",
    textAlign: "center",
    fontSize: ".8rem",
  },
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
