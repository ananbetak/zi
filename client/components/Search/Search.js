import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from './Search.style';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            SearchText: 'Start Searching...'
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        if (this.state.SearchText === 'Start Searching...') {
            alert('Text Can Not Be "Start Searching..."');
        } else if (this.state.SearchText === null) {
            alert('Text Can Not Be Empty');
        } else {
            this.props.history.push('/SearchResult?search=' + this.state.SearchText);
        }
    }

    render() {
        const { SearchText } = this.state;
        return (
            <View style={styles.Statusbar}>
                <View style={styles.MainContainer}>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            style={styles.TextInput}
                            onChangeText={SearchText => this.setState({ SearchText: SearchText.toLowerCase() })}
                            value={SearchText}
                            onTouchStart={() => this.setState({ SearchText: null })}
                        />
                    </View>
                    <View style={styles.ButtonContainer}>
                        <Button style={styles.Button} title="Search" onPress={this.handleSearch} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Search;