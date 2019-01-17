import React from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

import initContent from "../templates/initContent.json";
import termsConditions from "./../templates/terms2.json";

import {
    sampleBlockRenderer,
    extendedBlockRenderMap
} from "../utils/draft-js-utils";

import {
    handleDragStart,
    handleDragEnd,
    getNextEditorState,
    logState,
    getContentBlockArray,
    getBlockArray,
    inputFromUser 
} from "../utils/draftjs-helpers"

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
            // editorState: EditorState.createWithContent(convertFromRaw(initContent))
            // editorState: EditorState.createWithContent(convertFromRaw(termsConditions))
        };
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    onStyleButtonClick = (e) => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, e.target.name));
    }

    insertContent = (contentBlockArray, selection = null) => {
        const { editorState } = this.state;
        const nextEditorState = getNextEditorState(editorState, contentBlockArray, selection);
        this.onChange(nextEditorState);
    }


    handleDrop = (selection, dataTransfer, isInternal) => {
        if (isInternal === "external") {
            const type = dataTransfer.data.getData('text');
            const contentBlockArray = getContentBlockArray(getBlockArray(type));
            this.insertContent(contentBlockArray, selection);
            return 'handled';
        }
    }

    render() {
        const styles = ['BOLD', 'ITALIC', 'UNDERLINE'];
        const buttons = styles.map(style => {
            return <button key={style} onClick={this.onStyleButtonClick} name={style}>{style}</button>
        })
        return (
            <React.Fragment>
                <h2>New Editor</h2>
                <div className='toolbar'>
                    {buttons}
                    <button key='logger' onClick={() => logState(this.state.editorState)}>LOG STATE</button>
                    <button key='text' onClick={() => this.insertContent( getContentBlockArray(getBlockArray('terms') ) ) }>INSERT</button>
                    <button key='input' onClick={() => this.insertContent( inputFromUser() ) }>INPUT</button>
                </div>

                <div
                    className="terms"
                    draggable
                    id="terms"
                    onDragStart={e => handleDragStart(e)}
                    onDragEnd={e => handleDragEnd(e)} 
                >
                    Terms
                </div>

                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                    ref='editor'
                    handleDrop={this.handleDrop}
                    blockRendererFn={sampleBlockRenderer}
                    blockRenderMap={extendedBlockRenderMap}
                    placeholder='Start typing...'
                />
            </React.Fragment>
        );
    }
}

export default MyEditor;