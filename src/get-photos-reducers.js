export const getPhotoList = (state = {}, action) => {
    switch(action.type){
        case 'GET_PHOTOS_LOADING':
            return {
                ...state,
                loading: 'loading',
            };
        case 'GET_PHOTOS_SUCCESS':
            return {
                ...state,
                loading: 'done', 
                photoList: action.payload.photoList 
            };
        default:
            return state;
    }
};

// play with async actions
export const getPhotosAction = () => {
    return (dispatch, state) => {
        dispatch({ type: 'GET_PHOTOS_LOADING' });

        fetch('/api/get-photos.json')
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'GET_PHOTOS_SUCCESS',
                payload: {
                    photoList: data.photos
                }
            });
        });
    };
};