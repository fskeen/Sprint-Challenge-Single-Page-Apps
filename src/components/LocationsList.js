import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination'

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
    backgroundColor: "whitesmoke",
  },
  gridList: {
    width: 800,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



export default function LocationList() {
  const [locationArray, setLocationArray] = useState([])
  const [page, setPage] = useState(1)

  const classes = useStyles();

  const pagePrev = function () {
    if (page === 1) {
      return
    }
    return setPage(page - 1)
  }

  const pageNext = function () {
    if (page === 3) {
      return
    }
    return setPage(page + 1)
  }

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(response => {
        setLocationArray(response.data.results);
        // console.log(response.data.results)
      })
      .catch(error => {console.log(" Check out this error: ", error)})
  }, [page])

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Locations</ListSubheader>
        </GridListTile>
        {locationArray.map(tile => (
          <GridListTile key={tile.id}>
            <img src="https://imgur.com/txpEqZF.jpg" alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span><p>Dimension: {tile.dimension}</p>
              <p>Type: {tile.type}</p></span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Pagination next={pageNext} prev={pagePrev}/>
    </div>
  );


  // return (
  //   <section className='location-list grid-view'>
  //     <GridList cellHeight={180} className={classes.gridList}>
  //       <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
  //         <ListSubheader component="div">December</ListSubheader>
  //       </GridListTile>
  //     {locationArray.map(a => (
  //       <locationCard char={a} key={a.id}/>
  //     ))}
  //     </GridList>
  //   </section>)
}
