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

    it('get a random photo index between 0 and 3', () => {
        const currentState = { selected: 1 };
        const action = {
            type: 'RANDOM',
            payload: {
                photoCount: 3,
                photoIndex: 2
            }
        };
        const newState = changePhoto(currentState, action);
        expect(newState.selected).toBeGreaterThanOrEqual(0);
        expect(newState.selected).toBeLessThanOrEqual(2);
    });
});