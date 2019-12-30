import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function FilterOptions(props) {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Show & Filter</FormLabel>
      <RadioGroup
        value={props.filter}
        onChange={event => props.onFilterChange(event.target.value)}
      >
        <FormControlLabel value="sector" control={<Radio />} label="sector" />
        <FormControlLabel value="topic" control={<Radio />} label="topic" />
        <FormControlLabel value="country" control={<Radio />} label="country" />
        <FormControlLabel value="region" control={<Radio />} label="region" />
        <FormControlLabel value="pestle" control={<Radio />} label="pestle" />
      </RadioGroup>
    </FormControl>
  );
}
