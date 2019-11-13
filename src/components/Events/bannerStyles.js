import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    height: "50vh",
    backgroundImage: ({ image }) => `url(${image})`
  }
});
