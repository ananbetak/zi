import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getProducts, LoadMoreProducts } from '../../redux/data/dataActions';
import styles from './Products.style.js';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-native';
import Search from '../Search/Search';

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Products: [],
            Message: null,
            Counter: null,
            userToken: null,
            isLoading: true,
            ScrollToIndex: null
        };
        this.handleLoadMore = this.handleLoadMore.bind(this);

    }

    v4options = {
        random: [
            0x10,
            0x91,
            0x56,
            0xbe,
            0xc4,
            0xfb,
            0xc1,
            0xea,
            0x71,
            0xb4,
            0xef,
            0xe1,
            0x67,
            0x1c,
            0x58,
            0x36,
        ],
    };

    LoadMore = {
        Counter: null,
        userToken: null,
    };

    componentDidMount() {
        this.props.getProducts();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                isLoading: false
            });
            userToken = uuidv4(this.v4options);
            if (this.props.DataToAdd.length > 0) {
                const tempConcatedProducts = this.state.Products.concat(this.props.DataToAdd);
                this.setState({
                    Message: this.props.Message,
                    Products: tempConcatedProducts,
                    userToken: userToken,
                    Counter: this.props.Counter
                }, () => {
                    this.scrollToIndex();
                });
            } else {
                this.setState({
                    Message: this.props.Message,
                    Products: this.props.Products,
                    userToken: userToken,
                    Counter: this.props.Counter
                });
            }
        }
    }

    handleLoadMore() {
        this.setState({
            isLoading: true
        });
        this.LoadMore.Counter = this.state.Counter;
        this.LoadMore.userToken = this.state.userToken;
        this.props.LoadMoreProducts(this.LoadMore);
    }

    scrollToIndex = () => {
        if (this.state.Counter === 0) {
            setTimeout(() => {
                this.flatListRef.scrollToIndex({ animated: true, index: this.state.Products.length - 1 });
            }, 100);
        } else {
            setTimeout(() => {
                this.flatListRef.scrollToIndex({ animated: true, index: this.state.Counter - 1 });
            }, 100);
        }
    }

    getItemLayout = (data, index) => (
        { length: 50, offset: 50 * index, index }
    )


    render() {

        const { Products, Message, isLoading } = this.state;

        return (
            <View style={styles.MainContainer}>
                <Search history={this.props.history} />
                {isLoading === true ?
                    <View style={[styles.Loadingcontainer]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    :
                    <View>
                        <Text style={styles.MainTitle}> Products : {Products.length} </Text>
                        <FlatList style={styles.FlatList}
                            data={Products}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) =>
                                <TouchableOpacity>
                                    <View>
                                        <Link to={{
                                            pathname: "/ProductDetails",
                                            search: "?Product=" + JSON.stringify(item)
                                        }}
                                        >
                                            <Text style={styles.ProductTitle} numberOfLines={1} ellipsizeMode="tail"> {item.title} </Text>
                                        </Link>
                                    </View >
                                </TouchableOpacity>
                            }

                            getItemLayout={this.getItemLayout}
                            ref={(ref) => { this.flatListRef = ref; }}
                        />
                        {Message === 'we got more data' ?
                            <Button
                                title="Load More..."
                                onPress={this.handleLoadMore}
                            /> :
                            Message === 'no more data' ?
                                <Text> End Of List </Text> :
                                Message === 'there is no data' ?
                                    <Text style={styles.ProductTitle}> there is no data to show </Text> :
                                    null
                        }
                    </View>
                }

            </View >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Products: state.dataReducer.Products,
        Counter: state.dataReducer.Counter,
        Message: state.dataReducer.Message,
        DataToAdd: state.dataReducer.DataToAdd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        LoadMoreProducts: (LoadMore) => dispatch(LoadMoreProducts(LoadMore)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);