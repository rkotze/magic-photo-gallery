import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as photoReducers from './get-photos-reducers';

describe('Start app', () => {

  beforeAll(() => {
    photoReducers.getPhotosAction = jest.fn(() => ({
      type: 'none'
    }));
  });

  it('expect props to run valid App component', () => {
    const render = shallow(<App />);

    expect(render.props()).toEqual(expect.objectContaining({
      loading: expect.any(String),
      photoList: expect.any(Array),
      dispatch: expect.any(Function)
    }));

  });
  
});