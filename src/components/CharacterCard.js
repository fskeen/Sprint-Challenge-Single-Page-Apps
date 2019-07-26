// Component is now unused due to Material UI in CharacterList.js


import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function CharacterCard (props) {
  const classes = useStyles();


  const { char } = props;
  return (
    <GridListTile>
      <img src={char.image} alt={char.name} />
      <GridListTileBar
              title={<h3>{char.name}</h3>}
              subtitle={<span><p>Location: {char.location.name}</p>
              <p>Origin: {char.origin.name}</p></span>}
              actionIcon={
              <IconButton aria-label={`info about ${char.name}`} className={classes.icon}>
                <InfoIcon />
              </IconButton>
              }
            />
      </GridListTile>
    )
}
