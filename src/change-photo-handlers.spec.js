import { changePhoto } from './change-photo-handlers';

describe('Changing the photo state', () => {
    it('next photo', () => {
        const currentState = { selected: 0 };
        const action = {
            type: 'NEXT',
            payload: {
                photoCount: 3
            }
        };

        expect(changePhoto(currentState, action)).toEqual({ selected: 1 });
    });

    it('previous photo', () => {
        const currentState = { selected: 1 };
        const action = {
            type: 'PREVIOUS',
            payload: {
                photoCount: 3
            }
        };

        expect(changePhoto(currentState, action)).toEqual({ selected: 0 });
    });

    it('by specifing the index photo', () => {
        const currentState = { selected: 1 };
        const action = {
            type: 'PHOTO_INDEX',
            payload: {
                photoCount: 3,
                photoIndex: 2
            }
        };

        expect(changePhoto(currentState, action)).toEqual({ selected: 2 });
    });
});