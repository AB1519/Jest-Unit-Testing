import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapater-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});