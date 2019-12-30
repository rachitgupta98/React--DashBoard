import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import Filter from "../Filters/filter";
const useStyles = makeStyles({
  card: {
    width: 300
  }
});

const labels = {
  1: "Low",
  2: "Medium",
  3: "High"
};
const relevLabels = {
  1: "Vague",
  2: "Early stage",
  3: "Gaining Traction",
  4: "Evolving",
  5: "Established",
  6: "Expansionary",
  7: "Growing"
};
function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ""}>
      <span {...other} />
    </Tooltip>
  );
}
function IconContainer2(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={relevLabels[value] || ""}>
      <span {...other} />
    </Tooltip>
  );
}
export default function DisplayCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5" align="center">
              {props.sideData.toUpperCase()}
            </Typography>

            <Typography
              gutterBottom
              color="textSecondary"
              variant="body2"
              component="p"
              align="center"
            >
              {props.freq} | {props.relevance.value} | {props.likelihood}
            </Typography>
          </CardContent>
          <CardContent>
            <Link
              underline="hover"
              onClick={() => {
                window.open(props.link);
              }}
            >
              {props.title}
            </Link>
          </CardContent>
        </CardActionArea>
        {props.open ? (
          <CardContent>
            <Typography component="legend">Impact</Typography>
            <Rating
              value={props.impact}
              max={3}
              precision={1}
              IconContainerComponent={IconContainer}
            />

            <Typography component="legend">Relevance</Typography>
            <Rating
              value={props.relevance.key}
              max={7}
              precision={1}
              IconContainerComponent={IconContainer2}
            />
          </CardContent>
        ) : (
          <CardContent></CardContent>
        )}
        <CardContent
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Filter
          </Button>
          <Dialog open={open} keepMounted onClick={handleClose}>
            <DialogContent>
              <DialogContentText>
                <Filter
                  filter={props.filter}
                  onFilterChange={props.onFilterChange}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
