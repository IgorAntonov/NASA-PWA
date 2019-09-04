import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
} from '@material-ui/core'
import { Favorite, Share, ExpandMore } from '@material-ui/icons'
import { formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'

type Props = {
  date: string
  explanation: string
  url: string
  title: string
}

export const DataCard: React.FC<Props> = ({ date, explanation, url, title }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card style={{ margin: '16px 0' }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">NO</Avatar>}
        title={title}
        subheader={`${formatDistance(new Date(date), new Date(), { locale: ru })} назад`}
      />
      <CardContent
        style={{
          maxHeight: 80,
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {explanation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          style={{
            height: 0,
            paddingTop: '56.25%',
          }}
          image={url}
          title={title}
        />
        <CardContent>
          <Typography paragraph>{explanation}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
