import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SearchContentData } from '../../helper/staticDataHelper'

const SearchContent = (props) => {
    const suggestedSearchData = SearchContentData.filter(x => x.type == "SUGGESTED");
    const trendingSearchData = SearchContentData.filter(x => x.type == "TRENDING");
    const natureSearchData = SearchContentData.filter(x => x.type == "NATURE");

    return (
        <View>
            <View>
                <Text style={{ paddingLeft: 15, paddingVertical: 15, fontWeight: 'bold' }}>
                    Suggested
                </Text>
                {
                    suggestedSearchData.map((data, index) => {
                        return (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {data.images.map(img => {
                                        return (
                                            <TouchableOpacity
                                                onPressIn={() => props.openImage(img)} style={{ paddingBottom: 2 }}
                                                onPressOut={() => props.openImage(null)}
                                            >
                                                <Image source={img} style={{ width: 137, height: 150 }} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </>
                        )
                    })
                }
                <Text style={{ paddingLeft: 15, paddingVertical: 15, fontWeight: 'bold' }}>
                    Trending
                </Text>
                {
                    trendingSearchData.map((data, index) => {
                        return (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {data.images.map(img => {
                                        return (
                                            <TouchableOpacity
                                                onPressIn={() => props.openImage(img)} style={{ paddingBottom: 2 }}
                                                onPressOut={() => props.openImage(null)}
                                            >
                                                <Image source={img} style={{ width: 137, height: 150 }} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </>
                        )
                    })
                }
                <Text style={{ paddingLeft: 15, paddingVertical: 15, fontWeight: 'bold' }}>
                    Nature
                </Text>
                {
                    natureSearchData.map((data, index) => {
                        return (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {data.images.map(img => {
                                        return (
                                            <TouchableOpacity
                                                onPressIn={() => props.openImage(img)} style={{ paddingBottom: 2 }}
                                                onPressOut={() => props.openImage(null)}
                                            >
                                                <Image source={img} style={{ width: 137, height: 150 }} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default SearchContent