import {
  makeStyles
} from "@material-ui/core/styles";

export const navBarStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    justifyContent: "center"
  },
  links: {
    justifyContent: "flex-end",
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    listStyleType: "none",
    justifyContent: "space-around",
    marginRight: "6px"
    // border: "2px solid black"
  },
  font: {
    fontFamily: "Lobster, cursive",
  },

})