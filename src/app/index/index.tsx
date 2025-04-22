import { Image, TouchableOpacity, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from '@/app/index/styles';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={24} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />
      <FlatList
        data={['1', '2', '3', '4', '5']}
        renderItem={({ item }) => (
          <Link name="XVIDEOS" url="https://xvideos.com.br" onDetails={() => console.log('Details clicked')} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
}