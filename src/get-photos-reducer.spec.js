import { getPhotoList } from './get-photos-reducers';

describe('Different states for fetching photos', () => {
    const photoList = [{
        "photo": "/assets/main01.jpg",
        "title": "Abstract art ",
        "thumbnail": "/assets/thumb01.jpg"
    },
    {
        "photo": "/assets/main02.jpg",
        "title": "Riding the wave",
        "thumbnail": "/assets/thumb02.jpg"
    }];

    it('default state', function(){
        const currentState = { loading: 'started', photoList: [] };
        const action = {};

        expect(getPhotoList(currentState, action))
        .toEqual({ loading: 'started', photoList: [] });
    });

    it('request photos and show loading in progress', () => {
        const currentState = { loading: 'loading', photoList: [] };
        const action = {
            type: 'GET_PHOTOS_LOADING'
        };

        expect(getPhotoList(currentState, action))
        .toEqual({ loading: 'loading', photoList: [] });
    });

    it('successful response returns photoList', () => {
        const currentState = { loading: 'loading', photoList: [] };
        const action = {
            type: 'GET_PHOTOS_SUCCESS',
            payload: {
                photoList: photoList
            }
        };

        expect(getPhotoList(currentState, action))
        .toEqual({ loading: 'done', photoList: photoList });
    });

});