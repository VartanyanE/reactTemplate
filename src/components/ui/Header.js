import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";

export default function Header(Props) {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  return (
    <ElevationScroll>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h4" color="secondary">
            Manch Development
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
