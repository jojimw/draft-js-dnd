import Draft from "draft-js";
import Immutable from "immutable";

const customBlockRenderMap = Immutable.Map({
    'custom-block-h3': {
        element: 'h3'
    }
  });

export const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(customBlockRenderMap);