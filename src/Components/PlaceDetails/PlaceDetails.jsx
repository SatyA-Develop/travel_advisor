import React from 'react'
import { Box, Chip, Typography, Button, CardMedia, CardContent, CardActions, Card } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating';

import useStyles from './Styles'

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles()
  

  if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })


  return (
    <Card ref={refProp}  elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://content.jdmagicbox.com/comp/dhanbad/e7/9999px326.x326.190701160731.d6e7/catalogue/mithi-hotel-restaurant-dhanbad-1qkpagauns.jpg'}
        title={place.name ? place.name : "MITHI Food Gallery"}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' >{place.name ? place.name : "Mithi Food Gallery"}</Typography>
        <Box display='flex' justifyContent='space-between'>
        <Rating  value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant='subtitle1'>Out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level ? place.price_level : '$$$$'}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Range</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Direction</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.bearing}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => [
          <Box my={1} display='flex' justifyContent='space-between' alignItems='center' >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
          </Box>
        ])}
        {place?.cuisine?.map(({ name })=>(
            <Chip key={ name } size='small' label={name} className={classes.chip}/>
        ))}
        {place?.address && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
            <LocationOnIcon/> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon/> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size='small' color='primary' onClick={()=> window.open(place.web_url, '_blank')}>
                Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={()=> window.open(place.website, '_blank')}>
                Website
          </Button>
        </CardActions>

      </CardContent>
    </Card>
  )
}

export default PlaceDetails