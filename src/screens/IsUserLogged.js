import React, { useEffect } from "react";

import { SafeAreaView, View, ActivityIndicator, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";

import { loadPosts } from "../redux/actions/appActions";

import dataService from "../api/services/data.service";

export default IsUserLogged = ({ navigation }) => {

  const dispatch = useDispatch();
  const loadMenu = () => dispatch(loadPosts());

  const toMenu = () => navigation.replace('MobPosts')
  const toAutorization = () => navigation.replace('Auntification')



  const run = async () => {

    // loadMenu();
    // return
    // await dataService.logOut();

    let res = await dataService.loggedIn();
    // console.log('res', res)
    // return

    if (res.success) {
      loadMenu();
      toMenu();
    } else
      toAutorization();

  }

  useEffect(() => {
    console.log('IsUserLogged')
    run();

  }, []);


  return (
    <View style={styles.loyaut}>
      <ActivityIndicator
        color={"#1657"}
        size="large"
      // style={{ position: 'absolute', bottom: 62 }}
      />
    </View>
  );

}

// export default connect(mapDispatchToProps)(IsUserLogged)

const styles = StyleSheet.create({
  loyaut: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'red',
    flex: 1
  },
});
