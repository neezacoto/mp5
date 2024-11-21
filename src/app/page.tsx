import LinkSubmission from "../../components/LinkSubmission";

export default function Home() {
  return (
    <div style={styles.page}>
      <LinkSubmission />
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
