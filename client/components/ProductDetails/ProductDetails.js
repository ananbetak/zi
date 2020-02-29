import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Link } from 'react-router-native';
import queryString from 'query-string';
import styles from './ProductDetails.style.js';

class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Product: {
                id: null,
                title: null,
                body: null,
                userId: null
            }
        }
    }


    componentDidMount() {
        const ProductDetailparsed = queryString.parse(this.props.location.search);
        const ProductParsed = JSON.parse(ProductDetailparsed.Product);
        this.setState({
            Product: ProductParsed
        });
    }

    render() {

        const { Product } = this.state;

        return (
            <SafeAreaView style={styles.SafeAreaViewcontainer}>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <View style={styles.ButtonContainer}>
                            <Link to={{
                                pathname: "/",
                            }}
                            >
                                <Text style={styles.BackButton}> Go Back To Home Page </Text>
                            </Link >
                        </View>
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}

export default ProductDetails;