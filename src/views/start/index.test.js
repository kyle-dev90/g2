import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import StartView from './index';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('StartView', () => {
    it('Renders RegisterView without crashing', () => {
        shallow(<Provider store={store}><Router><StartView /></Router></Provider>);
    });

    it('Renders titles, submit button without crash', () => {
        const wrapper = mount(<Provider store={store}><Router><StartView /></Router></Provider>);

        expect(wrapper.find(`h1`).first().text()).toBe("Welcome the the Trivia Challenge!");
        expect(wrapper.find(`h2`).first().text()).toBe("You will be presented with 10 True or False questions.");
        expect(wrapper.find(`h3`).first().text()).toBe("Can you score 100%?");

        expect(wrapper.find(`button`).first().text()).toBe("BEGIN");
    });

    // can add simulation etc
});