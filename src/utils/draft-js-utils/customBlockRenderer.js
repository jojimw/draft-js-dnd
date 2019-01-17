import React from "react";

import { sampleBlock } from "../../components/CustomBlocks";

export const sampleBlockRenderer = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'custom') {
        return {
            component: sampleBlock,
            editable: true
        };
    }
}