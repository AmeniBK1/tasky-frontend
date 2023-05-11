import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PostHistory = () => {
  const [posts, setPosts] = useState([
    { id: 1, description: 'Post 1', type: 'Type 1', price: '$10', location: 'Location 1' },
    { id: 2, description: 'Post 2', type: 'Type 2', price: '$20', location: 'Location 2' },
    { id: 3, description: 'Post 3', type: 'Type 3', price: '$30', location: 'Location 3' },
    
    { id: 4, description: 'Post 4', type: 'Type 4', price: '$10', location: 'Location 4' },
    { id: 5, description: 'Post 5', type: 'Type 5', price: '$20', location: 'Location 5' },
    { id: 6, description: 'Post 6', type: 'Type 6', price: '$30', location: 'Location 6' },    // Add more posts here
  ]);

  const renderItem = ({ item }) => (
    <View style={{ padding: 16 ,backgroundColor: "#fff" }}>
      <View  style={{ padding: 23 , borderRadius: 15, borderWidth: 1, backgroundColor: "#fff", borderBottomLeftRadius: 1, borderColor:"gray"}}>
      <Text style={{ fontWeight: 'bold' }}>{item.description}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Price: {item.price}</Text>
      <Text>Location: {item.location}</Text>
      <View   style={{  marginLeft:250 }}>
  
      </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PostHistory;
