import { Image, TouchableOpacity, View, FlatList, Modal, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from '@/app/index/styles';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => router.push('/add')}>
          <MaterialIcons name="add" size={24} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />
      <FlatList
        data={['1', '2', '3', '4', '5']}
        renderItem={({ item }) => (
          <Link name="xitems" url="https://xitems.com.br" onDetails={() => console.log('Details clicked')} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      
      <Modal transparent visible={false}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Mamada</Text>
              <TouchableOpacity onPress={() => console.log('Close modal')}>
                <MaterialIcons name="close" size={24} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>xpto</Text>
            <Text style={styles.modalUrl}>https://xpto.com.br</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" variant="primary" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}