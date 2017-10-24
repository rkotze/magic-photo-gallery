import React from 'react';
import Gallery from './gallery';
import renderer from 'react-test-renderer';

import * as photoHandler from './change-photo-handlers'; //makes easy to mock methods

describe('Render the gallery', () => {
    let galleryComponent, 
    changePhotoCopy = photoHandler.changePhoto;
    beforeAll(() => {
        galleryComponent = renderer.create(
            <Gallery 
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

    it('check changePhoto is called on dispatch', () => {
        photoHandler.changePhoto = jest.fn();
        galleryComponent.getInstance().dispatch({ type: 'next' });
        expect(photoHandler.changePhoto).toHaveBeenCalled();
        photoHandler.changePhoto = changePhotoCopy;
    });

    it('the initial state showing first image selected', () => {
        let gallerySnap = galleryComponent.toJSON();
        expect(gallerySnap).toMatchSnapshot();
    });

    it('go to next image', () => {
        galleryComponent.getInstance().next();
        let gallerySnap = galleryComponent.toJSON();
        expect(gallerySnap).toMatchSnapshot();
    });

    it('go to next image using keyboard', () => {
        galleryComponent.getInstance().arrowKeyPress({
            keyCode: 39
        });
        let gallerySnap = galleryComponent.toJSON();
        expect(gallerySnap).toMatchSnapshot();
    });

    it('go to previous image using keyboard', () => {
        galleryComponent.getInstance().arrowKeyPress({
            keyCode: 37
        });
        let gallerySnap = galleryComponent.toJSON();
        expect(gallerySnap).toMatchSnapshot();
    });

    it('specify a photo to change to', () => {
        galleryComponent.getInstance().changePhoto(3)();
        let gallerySnap = galleryComponent.toJSON();
        expect(gallerySnap).toMatchSnapshot();
    });
});