import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';

import classNames from 'classnames';
import getSharedStyles from '../styles';
import withCanvas from 'src/utils/withCanvas';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles((theme) => ({
  ...getSharedStyles(theme),
  cardHolder: {
    display: 'flex',
    padding: '5px',
    'justify-content': 'center',
    'flex-direction': 'column'
  },
  imgSize: {
    'max-width': '150px',
    'max-height': '150px'
  },
  imgHolder: {
    padding: '5px 5px 0px 5px',
    'background-color': 'gray',
    'border-radius': '5px'
  },
  buttonHolder: {
    'align-self': 'center'
  },
  removeButton: {
    color: 'red'
  },
  addButton: {
    'background-color': 'green',
    margin: '10px'
  },
  imagePreviewThumb: {
    width: '180px',
    height: '135px',
    '&:hover': {
      '& $imgPreviewControls': {
        opacity: 1
      }
    }
  },
  imagePreviewThumbDisabled: {
    width: '180px',
    height: '135px',
    opacity: 0.2,
    '&:hover': {
      '& $imgPreviewControls': {
        opacity: 1
      }
    }
  },
  imgPreviewControls: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    opacity: '0'
  },
  imgBtn: {
    width: '40px',
    height: '40px',
    background: theme.palette.primary.main,
    cursor: 'pointer',
    margin: '5px'
  },
  p10: {
    padding: '10px'
  }
}));

function ImagesHolder(props) {
  const inputRef = useRef(null);
  let filePath = '';

  const classes = useStyles();

  const onChange = async (event) => {
    event.preventDefault();

    const files = event.target.files;
    const images = [...props.images];
    for (var i = 0; i < files.length; i++) {
      const file = files[i];

      filePath = URL.createObjectURL(file);
      var urlCreator = window.URL || window.webkitURL;
      var src = urlCreator.createObjectURL(file);

      images.push({
        src: await props.canvas.resize(src, 320, file.name, file.type),
        filePath,
        disabled: false
      });
    }
    props.onChange(images);

    // zabezpecuje volanie onChange aj pri uploadovani rovnakeho suboru
    // -> po ulozeni formularu nezavolalo onChange opat, v pripade nahrania
    // -> rovnakeho suboru ako predtym
    event.target.value = '';
  };

  const onClick = () => {
    inputRef.current.click();
  };

  const handleDeleteImage = (image) => {
    const images = props.images.filter((i) => i.filePath !== image.filePath);
    props.onChange(images);
  };

  const handleDisableImage = (image) => {
    const images = props.images.map((i) => {
      if (i.filePath === image.filePath) {
        i.disabled = !image.disabled;
      }
      return i;
    });

    props.onChange(images);
  };

  const handleDragStart = (e, imgFrom) => {
    e.dataTransfer.setData('filePath', imgFrom.filePath);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, imgTo) => {
    const filePath = e.dataTransfer.getData('filePath');

    let images = [...props.images];

    const imgFrom = images.find((i) => i.filePath === filePath);
    const imgFromIndex = images.findIndex(
      (x) => x.filePath === imgFrom.filePath
    );
    const imgToIndex = images.findIndex((x) => x.filePath === imgTo.filePath);

    images[imgFromIndex] = { ...images[imgToIndex] };
    images[imgToIndex] = { ...imgFrom };

    props.onChange(images);
  };

  const renderImages = () => {
    return props.images.map((i) => {
      return i.delete ? (
        <></>
      ) : (
        <div
          className={classNames(
            i.disabled
              ? classes.imagePreviewThumbDisabled
              : classes.imagePreviewThumb,
            classes.imageFitHolder,
            classes.mr2,
            classes.mb2
          )}
          draggable="true"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, i)}
          onDragStart={(e) => handleDragStart(e, i)}
        >
          <img
            className={classNames(classes.imageFit)}
            src={i.src !== null && i.filePath === '' ? i.src : i.filePath}
            alt="img"
          />

          <div className={classNames(classes.imgPreviewControls)}>
            <div
              className={classNames(
                classes.dFlex,
                classes.w100,
                classes.h100,
                classes.alignItemsCenter,
                classes.justifyContentCenter
              )}
            >
              <div
                className={classNames(
                  classes.imgBtn,
                  classes.dFlex,
                  classes.alignItemsCenter,
                  classes.justifyContentCenter
                )}
                onClick={() => handleDeleteImage(i)}
              >
                <DeleteIcon className={classNames(classes.textWhite)} />
              </div>
              <div
                className={classNames(
                  classes.imgBtn,
                  classes.dFlex,
                  classes.alignItemsCenter,
                  classes.justifyContentCenter
                )}
                onClick={() => handleDisableImage(i)}
              >
                {(i.disabled && (
                  <CheckCircleIcon className={classNames(classes.textWhite)} />
                )) || (
                  <RemoveCircleIcon className={classNames(classes.textWhite)} />
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="left"
        alignItems="left"
        className={classNames(classes.p10)}
      >
        <Grid item xs={12} className={classNames(classes.pr10)}>
          <div className={classNames(classes.dFlex, classes.flexWrap)}>
            {renderImages()}
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="left" alignItems="left">
        <Grid item xs={12} className={classNames(classes.pr10)}>
          <div>
            <IconButton className={classes.button} onClick={onClick}>
              <AddIcon />
            </IconButton>
            <input
              ref={inputRef}
              style={{ display: 'none' }}
              type="file"
              accept={'image/jpeg'}
              onChange={onChange}
              multiple
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

ImagesHolder.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  canvas: PropTypes.object.isRequired,
};

export default withCanvas(ImagesHolder);
