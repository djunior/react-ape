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
import {Text as MKText} from 'mirakulo_renderer';

type Props = {|
  style: {
    borderStyle?: Array<number>,
    borderSize: number,
    borderColor?: string,
    fontSize?: number,
    fontFamily?: string,
    color?: string,
    align: string,
    x: number,
    y: number,
  },
  children: string,
  content?: string,
|};

class Text {
// (props: Props, apeContext: CanvasComponentContext) {
  constructor(props: Props, apeContext) {
    const {style = {}, children, content} = props;
    this._textObj = new MKText(content || children, `${style.fontSize || 18}px ${style.fontFamily || 'Helvetica'}`, style.color || 'black');
    apeContext.ctx.addChild(this._textObj);
  }

  destroy(apeContext) {
    apeContext.ctx.removeChild(this._textObj);
    delete this._textObj;
  }

  updateProps(props) {
    const {style = {}, children, content} = props;
  }

  render() {

  }
  // const {ctx} = apeContext;
  // const {style = {}, children, content} = props;

  // ctx.beginPath();
  // ctx.setLineDash(style.borderStyle || []);
  // ctx.textBaseline = 'middle';
  // ctx.lineWidth = style.borderSize;
  // // ctx.strokeStyle = style.borderColor || 'black';
  // ctx.font = `${style.fontSize || 18}px ${style.fontFamily || 'Helvetica'}`;
  // ctx.fillStyle = style.color || 'black';
  // ctx.textAlign = style.align;
  // ctx.fillText(content || children, style.x, style.y);
  // // ctx.strokeText(props.children, 20, 20);
  // ctx.fill();
  // // ctx.stroke();
  // // ctx.setLineDash([]);
  // ctx.closePath();
}

export default Text;
