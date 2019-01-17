export const handleDragStart = event => {
    event.dataTransfer.setData("text", event.target.id);
    event.target.classList.add('dragging')
}

export const handleDragEnd = event => {
    event.target.classList.remove('dragging');
}
