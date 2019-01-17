import {
    EditorState,
    convertToRaw,
    Modifier,
    BlockMapBuilder,
    genKey,
    ContentBlock,
} from 'draft-js';
import { Map } from "immutable";

import termsConditions from "../../templates/terms2.json";

export const getNextEditorState = (editorState, contentBlockArray, selection) => {
    const contentState = editorState.getCurrentContent();

    selection = selection || editorState.getSelection();

    let nextEditorState = EditorState.createEmpty();
    const fragment = BlockMapBuilder.createFromArray(contentBlockArray);
    // const testState = ContentState.createFromBlockArray(contentBlockArray).blockMap;

    if (selection.isCollapsed()) {
        const nextContentState = Modifier.replaceWithFragment(contentState, selection, fragment);
        nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'insert-fragment'
        );
    }
    return nextEditorState;
}

export const logState = editorState => {
    console.log( convertToRaw( editorState.getCurrentContent() ) );
}

export const getContentBlockArray = (dataArray) => {
    return dataArray.map(blockData => new ContentBlock(
        {
            ...blockData,
            key: genKey(),
            data: new Map({})
        })
    );
}

export const inputFromUser = () => {
    const input = prompt();
    return [
        new ContentBlock({
            text: input,
            key: genKey(),
            data: new Map({})
        })
    ];
}

export const getBlockArray = type => {
    const blockArray = {
        terms: termsConditions.blocks
    };
    return blockArray[type];
}