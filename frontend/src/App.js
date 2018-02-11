import React, {Component} from 'react';

import PostList from "./components/PostList";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";


class App extends Component {
    render() {
        return (
            <div>
                <AppMenu/>
                <PostList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
