import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './SearchResult.styles';
import queryString from 'query-string';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { SearchData } from '../../redux/search/searchAction';

class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Product: {
                id: null,
                title: null,
                body: null,
                userId: null
            },
            SearchText: null,
            isLoading: true,
            Message: null
        }

    }

    componentDidMount() {
        const ProductDetailparsed = queryString.parse(this.props.location.search);
        this.setState({
            SearchText: ProductDetailparsed.search
        }, () => {
            this.props.SearchData(this.state.SearchText)
        }
        );
    }

    componentDidUpdate(prevProps) {

        if (this.props !== prevProps) {
            this.setState({
                Product: this.props.Product,
                Message: this.props.Message,
                isLoading: false
            });
        }
    }

    render() {

        const { Product, isLoading, Message } = this.state;
        return (
            <View style={styles.Loadingcontainer}>
                {isLoading === true ?
                    <View>
                        <Text style={styles.LoadingText}> Loading ... </Text>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>

                    :
                    <SafeAreaView style={styles.SafeAreaViewcontainer}>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.ButtonContainer}>
                                <Link to={{
                                    pathname: "/",
                                }}
                                >
                                    <Text style={styles.BackButton}> Go Back To Home Page </Text>
                                </Link >
                            </View>
                            {Message === 'We Have Result' ?
                                <View style={styles.ProductDetailsContainer}>
                                    <View style={styles.ProductDetailsContent}>
                                        <Text style={styles.ProductDetailsId}>
                                            Id : {Product.id}
                                        </Text>
                                        <Text style={styles.ProductDetailsUserId}>
                                            UserId : {Product.userId}
                                        </Text>
                                        <Text style={styles.ProductDetailsTitle}>
                                            Title : {Product.title}
                                        </Text>
                                        <Text style={styles.ProductDetailsBody}>
                                            Body : {Product.body}
                                        </Text>
                                    </View>
                                </View>
                                :
                                <View>
                                    <Text> No Results Found </Text>
                                </View>
                            }
                        </ScrollView>
                    </SafeAreaView>

                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Product: state.searchReducer.Product,
        Message: state.searchReducer.Message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SearchData: (SearchText) => dispatch(SearchData(SearchText)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);