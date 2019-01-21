export const heightCalc = () => {
    const element = document.getElementsByClassName("DraftEditor-editorContainer")[0];
    if (element && element.offsetHeight >= 40) {
        console.log(`offset height = ${element.offsetHeight}px`);
        console.log(`client height = ${element.clientHeight}px`);
    }
}