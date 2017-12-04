// Reason why we import raf because it is shimmed after Enzyme adapter is imported.
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-334486441
import raf from './tempPolyfills';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
