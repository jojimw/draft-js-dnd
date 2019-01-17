import React from "react";
import Draft from "draft-js";
import Immutable, { Map } from "immutable";

const customBlockRenderMap = Immutable.Map({
    'custom-block-h3': {
        element: 'h3'
    }
  });

export const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(customBlockRenderMap);