import React from "react";

class sampleBlock extends React.Component {
    render() {
        const {block, contentState} = this.props;
        const data = block.getData();
        return (
            //   <div style={{paddingTop: '50px', paddingBottom: '8px'}}>
            <div data-offset-key="0tys1-0-0" className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                <span data-offset-key="0tys1-0-0">
                    <span data-text="true">{data.get("some")}</span>
                </span>
            </div>
        )
    }
}

export {
    sampleBlock
} 