import { changePhoto } from './change-photo-handlers';

describe('Changing the photo state', () => {
    test('next photo', () => {
        const currentState = { selected: 0 };
        const action = {
            type: 'NEXT',
            payload: {
                photoCount: 3
            }
        };

        expect(changePhoto(currentState, action)).toEqual({ selected: 1 });
    });
})