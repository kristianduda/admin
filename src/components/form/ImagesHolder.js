import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';

import classNames from 'classnames';
import getSharedStyles from '../styles';
import withCanvas from 'src/utils/withCanvas';
import { blobToBase64 } from 'src/utils/convert';

import DeleteIcon from '@mui/icons-material/Delete';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

  const [data, setData] = useState([]);

  const classes = useStyles();
  const init = async () => {
    const images = await Promise.all(
      props.value.map(async (i) => {
        const src = await props.getFile(i);
        return {
          id: i,
          src,
          filePath: await blobToBase64(src)
        };
      })
    );

    setData(images);
  };

  useEffect(init, []);

  const setImages = (images) => {
    setData(images);
    props.setValue(
      props.name,
      images.map((i) => i.id)
    );
  };

  const onChange = async (event) => {
    event.preventDefault();

    const files = event.target.files;
    const images = [...data];
    for (var i = 0; i < files.length; i++) {
      const file = files[i];

      const filePath = URL.createObjectURL(file);
      var urlCreator = window.URL || window.webkitURL;
      var obj = urlCreator.createObjectURL(file);
      const src = await props.canvas.resize(obj, 320, file.name, file.type);
      const f = await props.addFile(src);

      images.push({
        id: f._id,
        src,
        filePath,
        disabled: false
      });
    }

    setImages(images);

    // zabezpecuje volanie onChange aj pri uploadovani rovnakeho suboru
    // -> po ulozeni formularu nezavolalo onChange opat, v pripade nahrania
    // -> rovnakeho suboru ako predtym
    event.target.value = '';
  };

  const onClick = () => {
    inputRef.current.click();
  };

  const handleDeleteImage = async (image) => {
    const images = data.filter((i) => i.id !== image.id);
    setImages(images);

    await props.deleteFile(image.id);
  };

  const handleDisableImage = (image) => {
    const images = data.map((i) => {
      if (i.id === image.id) {
        i.disabled = !image.disabled;
      }
      return i;
    });

    setImages(images);
  };

  const handleDragStart = (e, imgFrom) => {
    e.dataTransfer.setData('id', imgFrom.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, imgTo) => {
    const id = e.dataTransfer.getData('id');

    let images = [...data];

    const imgFrom = images.find((i) => i.id === id);
    const imgFromIndex = images.findIndex((x) => x.id === imgFrom.id);
    const imgToIndex = images.findIndex((x) => x.id === imgTo.id);

    images[imgFromIndex] = { ...images[imgToIndex] };
    images[imgToIndex] = { ...imgFrom };

    setImages(images);
  };

  const renderImages = () => {
    return data.map((i) => {
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
            src={i.filePath}
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
              {/* <div
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
              </div> */}
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
            <Button
              // className={classes.button}
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={onClick}
            >
              Add images
            </Button>
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
  canvas: PropTypes.object.isRequired
};

export default withCanvas(ImagesHolder);
