/**
 * Copyright (c) 2018-present, Raphael Amorim.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 *
 */

import type {CanvasComponentContext} from '../types';
import {Bitmap} from "mirakulo_renderer";

const cacheImageControl = {};

// function saveOnCache(
//   src: string,
//   element: ?Image,
//   width: number,
//   height: number
// ): void {
//   cacheImageControl[src] = {
//     element,
//     width,
//     height,
//   };
// }

// type Props = {|
//   style: {
//     width?: number,
//     height?: number,
//     x: number,
//     y: number,
//   },
//   src: string,
//   imageElement: Image,
//   width?: number,
//   height?: number,
// |};

// function drawImage(
//   ctx: CanvasRenderingContext2D,
//   imageElement: Image,
//   x: number,
//   y: number,
//   width: number,
//   height: number
// ) {
//   ctx.drawImage(imageElement, x, y, width, height);
// }

class ImageComponent {
  constructor(props: Props, apeContext) {
    const {imageElement, src} = props;
    this._imgObj = new Bitmap(src);
    this.updateProps(props);
    apeContext.ctx.addChild(this._imgObj);
  }

  destroy(apeContext) {
    apeContext.ctx.removeChild(this._imgObj);
    delete this._imgObj;
  }

  updateProps(newProps) {
    if (! this._imgObj) {
      return;
    }

    const {style, imageElement, src, width, height} = newProps;

    // console.log("X: " + style.x);
    // console.log("Y: " + style.y);
    // console.log("Width: " + width);
    // console.log("Height: " + height);

    this._imgObj.x = style.x;
    this._imgObj.y = style.y;
    this._imgObj.width = width;
    this._imgObj.height = height;
  }

  render() {

  }
}
// function ImageComponent(props: Props, apeContext: CanvasComponentContext) {
//   const {ctx} = apeContext;
//   const {style = {x: 0, y: 0}, imageElement, src, width, height} = props;

//   if (!src && !imageElement) {
//     return null;
//   }

//   const cachedImage = cacheImageControl[src];
//   if (cachedImage) {
//     drawImage(
//       ctx,
//       cachedImage.element,
//       style.x,
//       style.y,
//       width || style.width || cachedImage.width,
//       height || style.height || cachedImage.height
//     );
//     return;
//   }

//   if (imageElement && imageElement.src) {
//     drawImage(
//       ctx,
//       imageElement,
//       style.x,
//       style.y,
//       width || style.width || imageElement.naturalWidth,
//       height || style.height || imageElement.naturalHeight
//     );
//     return;
//   }

//   let newImageElement = new Image();
//   newImageElement.src = src;

//   function loadImage() {
//     if (!newImageElement) {
//       return;
//     }
//     const imageWidth = Number(
//       width || style.width || newImageElement.naturalWidth
//     );
//     const imageHeight = Number(
//       height || style.height || newImageElement.naturalHeight
//     );
//     ctx.drawImage(newImageElement, style.x, style.y, imageWidth, imageHeight);
//     saveOnCache(src, newImageElement, imageWidth, imageHeight);
//     newImageElement = null;
//   }

//   if (newImageElement.complete) {
//     loadImage();
//   } else {
//     newImageElement.addEventListener('load', loadImage);
//     newImageElement.addEventListener('error', () => {
//       if (process.env.NODE_ENV === 'development') {
//         console.warn('failed to load image:', src);
//       }
//     });
//   }
// }

export default ImageComponent;
