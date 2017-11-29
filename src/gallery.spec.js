import React from 'react';
import { Gallery } from './gallery';

describe('Render the gallery', () => {
    let galleryComponent, 
    dispatchMock = jest.fn();

    beforeAll(() => {
        galleryComponent = shallow(
            <Gallery
            dispatch={dispatchMock}
            photoList={
                [
                {
                    photo: '/assets/main01.jpg',
                    title: 'Abstract art ',
                    thumbnail: '/assets/thumb01.jpg'
                },
                {
                    photo: '/assets/main02.jpg',
                    title: 'Riding the wave',
                    thumbnail: '/assets/thumb02.jpg'
                },
                {
                    photo: '/assets/main03.jpg',
                    title: 'Sushi dinner',
                    thumbnail: '/assets/thumb03.jpg'
                },
                {
                    photo: '/assets/main04.jpg',
                    title: 'Cat photo',
                    thumbnail: '/assets/thumb04.jpg'
                }
                ]
            } />
        );
    });

    afterEach(() => {
        dispatchMock.mockReset();
    });

    it('the initial state showing first image selected', () => {
        expect(galleryComponent).toMatchSnapshot();
    });

    it('go to next image', () => {
        galleryComponent.instance().next();
        expect(dispatchMock).toBeCalledWith({ 
            type: 'NEXT', 
            payload: {
                photoCount: 4
            }});
        galleryComponent.setProps({selected: 1});
        expect(galleryComponent).toMatchSnapshot();
    });

    it('go to previous image using keyboard', () => {
        const LEFT_KEY = 37;
        galleryComponent.instance().arrowKeyPress({
            keyCode: LEFT_KEY
        });
        expect(dispatchMock).toBeCalledWith({ 
            type: 'PREVIOUS', 
            payload: {
                photoCount: 4
            }});
        galleryComponent.setProps({ selected: 0 });
        expect(galleryComponent).toMatchSnapshot();
    });

    it('go to next image using keyboard', () => {
        const RIGHT_KEY = 39;
        galleryComponent.instance().arrowKeyPress({
            keyCode: RIGHT_KEY
        });
        expect(dispatchMock).toBeCalledWith({ 
            type: 'NEXT', 
            payload: {
                photoCount: 4
         }});
        
        galleryComponent.setProps({ selected: 1 });
        expect(galleryComponent).toMatchSnapshot();
    });

    it('specify a photo to change to', () => {
        galleryComponent.instance().changePhoto(3)();
        expect(dispatchMock).toBeCalledWith({ 
            type: 'PHOTO_INDEX', 
            payload: {
                photoIndex: 3
         }});
        galleryComponent.setProps({ selected: 3 });
        expect(galleryComponent).toMatchSnapshot();
    });
});