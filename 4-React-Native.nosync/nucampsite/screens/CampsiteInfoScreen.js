import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { FlatList, StyleSheet, Text, View, Button, Modal } from 'react-native';
import { useState } from 'react';
import { Rating, Input, Divider } from 'react-native-elements';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { postComment } from '../features/comments/commentsSlice';


const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const favorites = useSelector((state) => state.favorites);
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(5);
    const [author, setAuthor] = useState();
    const [text, setText] = useState();

    const handleSubmit = () => {
        const newComment = {
            author,
            rating,
            text,
            campsiteId: campsite.id
        };
        dispatch(postComment(newComment));
        setShowModal(!showModal);
    }

    const resetForm = () => {
        setAuthor();
        setRating(5);
        setText();
    }

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Rating
                    startingValue={item.rating}
                    imageSize={10}
                    readonly
                    style={{ alignItems: 'flex-start', paddingVertical: '5%' }}
                    type="star"
                /> 
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };

    return (
        <>
            <FlatList
                data={comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
                renderItem={renderCommentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    marginHorizontal: 20,
                    paddingVertical: 20
                }}
                ListHeaderComponent={
                    <>
                        <RenderCampsite
                            campsite={campsite}
                            isFavorite={favorites.includes(campsite.id)}
                            markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                            onShowModal={() => setShowModal(!showModal)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                        <Divider style={{ alignSelf: "center", width: "80%" }} />
                    </>
                }
            />
            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}>
                <View style={styles.modal}>
                    <Rating 
                        showRating = {true}
                        startingValue = {rating}
                        imageSize = {40}
                        onFinishRating = {(rating)=> setRating(rating)}
                        style = {{paddingVertical: 10}}
                    />
                        <Input
                        placeholder = 'Author'
                        leftIcon = {{ type: "font-awesome", name: "user-o" }}
                        leftIconContainerStyle = {{paddingRight:10}}
                        onChangeText = {(author => setAuthor(author))}
                        value = {author}
                        />
                        <Input
                        placeholder = 'Comment(text)'
                        leftIcon = {{ type: "font-awesome", name: "comment-o" }}
                        leftIconContainerStyle = {{paddingRight:10}}
                        onChangeText = {(text) => setText(text)}
                        value = {text}
                        />

                    <Button
                            onPress={() => {
                                handleSubmit();
                                resetForm();
                            }}
                            color='#5637DD'
                            title='Submit'
                            />

                    </View>
                    <View style={{ margin: 10 }} >
                        <Button
                            onPress={() => {
                                resetForm();
                                setShowModal(!showModal);
                            }}
                            color='#808080'
                            title='Cancel'
                        />
                    </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default CampsiteInfoScreen;

