import React from 'react';
import { render } from 'react-native-testing-library';
import {
    Content, Container, Text
} from 'native-base';


class App extends React.Component {

    render() {
        return (
            <Container testID="containerId">
                <Text testID="textIdOutside">Hello</Text>
                <Content testID="contentId">
                    <Text testID="textIdInside">Hello</Text>
                </Content>
            </Container>
        );
    }
}

describe('Testing Content', () => {
    const { queryByTestId } = render(<App />)
    it('renders Container', () => {
        expect(queryByTestId('containerId')).not.toBeNull()
    });
    it('renders Content', () => {
        expect(queryByTestId('contentId')).not.toBeNull()
    });
    it('renders text outside content', () => {
        expect(queryByTestId('textIdOutside')).not.toBeNull()
    });
    it('renders text inside content', () => {
        expect(queryByTestId('textIdInside')).not.toBeNull()
    });

})