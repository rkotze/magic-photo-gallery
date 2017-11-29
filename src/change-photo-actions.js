const changePhotoAction = (type, photosLength) => ({ 
    type: type, 
    payload: {
        photoCount: photosLength
    }
});

export const nextPhoto = (photosLength) => changePhotoAction('NEXT', photosLength);

export const previousPhoto = (photosLength) => changePhotoAction('PREVIOUS', photosLength);

export const randomPhoto = (photosLength) => changePhotoAction('RANDOM', photosLength);