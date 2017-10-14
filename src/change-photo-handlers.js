// ACTION standards:  https://github.com/acdlite/flux-standard-action
const changePhoto = (state, action) => {
    switch (action.type) {
        case 'PHOTO_INDEX':
            return handleEdges({ selected: action.payload.photoIndex }, action);
        case 'NEXT':
            return handleEdges({ selected: state.selected + 1 }, action);
        case 'PREVIOUS':
            return handleEdges({ selected: state.selected - 1 }, action);
        case 'RANDOM':
            return randomPhotoIndex(state, action);
        default:
            return state;
    }
}

const handleEdges = (state, action) => {
    const photoListEnd = action.payload.photoCount - 1,
        photoListStart = 0;
    if (state.selected > photoListEnd)
        return { selected: photoListStart };

    if (state.selected < photoListStart)
        return { selected: photoListEnd };

    return state;
}

const randomPhotoIndex = (state, action) => {
    const photoCount = action.payload.photoCount;
    const newPhotoIndex = Math.floor(Math.random() * photoCount)

    if (newPhotoIndex === state.selected)
        return randomPhotoIndex(state, action);

    return { selected: newPhotoIndex };
}

export {
    changePhoto
};