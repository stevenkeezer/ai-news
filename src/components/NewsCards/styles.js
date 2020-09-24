import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    // color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    padding: "1% 1%",
    width: "100%",
    margin: 0,
  },
});
