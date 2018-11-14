/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export class TileStyle {

  static type = 'TILE';

  constructor(styleDescriptor) {
    this._descriptor = styleDescriptor;
  }

  static canEdit(styleInstance) {
    return styleInstance.constructor === TileStyle;
  }

  static createDescriptor() {
    return {
      type: TileStyle.type,
      properties: {
        alphaValue: 0.5
      }
    };
  }

  static getDisplayName() {
    return 'Tile style';
  }

  _getMBOpacity() {
    const DEFAULT_OPACITY = 0.5;
    return this._descriptor.properties.alphaValue || DEFAULT_OPACITY;
  }

  setMBPaintProperties(mbMap, tileLayerID) {
    const opacity = this._getMBOpacity();
    mbMap.setPaintProperty(tileLayerID, 'raster-opacity', opacity);
  }
}