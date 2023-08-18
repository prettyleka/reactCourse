import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { FlatList } from 'react-native';
import { Avatar, ListItem, Tile } from 'react-native-elements';

const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites);

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile
            title={campsite.name}
            caption={campsite.description}
            featured
            onPress={() =>
                navigation.navigate('CampsiteInfo', { campsite })
            }
            imageSrc={{ uri: baseUrl + campsite.image }} />
            //     onPress={() =>
            //         navigation.navigate('CampsiteInfo', { campsite })
            //     }
            // >
            //     <Avatar source={campsite.image} rounded />
            //     <ListItem.Content>
            //         <ListItem.Title>{campsite.name}</ListItem.Title>
            //         <ListItem.Subtitle>
            //             {campsite.description}
            //         </ListItem.Subtitle>
            //     </ListItem.Content>
        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;