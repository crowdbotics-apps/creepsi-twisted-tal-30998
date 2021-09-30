import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_9_362}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d5/dbdb/d0727bc072f1386a42c355160a3394a4"
          }}
          style={styles.ImageBackground_9_354}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e63/ea3b/67ed08129d7c459f3e9a4b400cef1f05"
          }}
          style={styles.ImageBackground_9_355}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b44/bb7b/a5f473ebf6693b33240a32c7a98da42b"
          }}
          style={styles.ImageBackground_9_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0d5/dbaa/c43023c3e020f01a37050780e25bb335"
          }}
          style={styles.ImageBackground_9_356}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c6e/a514/ff4b891271505da1aee0fe83a6987517"
          }}
          style={styles.ImageBackground_9_361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7383/eae1/05424689aac04ac7b8ef3d7f8faf45ae"
          }}
          style={styles.ImageBackground_9_353}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1041/bfc9/088fa6e046b2c51d000f88183cee245e"
          }}
          style={styles.ImageBackground_9_357}
        />
      </View>
      <View style={styles.View_4_13} />
      <View style={styles.View_4_14}>
        <Text style={styles.Text_4_14}>Sign in</Text>
      </View>
      <View style={styles.View_4_15}>
        <Text style={styles.Text_4_15}>Register</Text>
      </View>
      <View style={styles.View_7_267}>
        <View style={styles.View_7_269}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_7_270}
          />
          <View style={styles.View_7_275}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
              }}
              style={styles.ImageBackground_7_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
              }}
              style={styles.ImageBackground_7_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_7_284}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
            }}
            style={styles.ImageBackground_7_289}
          />
        </View>
      </View>
      <View style={styles.View_9_372}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f6a/b0e7/b02f1c36650de1064413b41b7084d0e3"
          }}
          style={styles.ImageBackground_9_370}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ebe/6108/00f58ebb1855c2cd3738826d479d5e5d"
          }}
          style={styles.ImageBackground_9_369}
        />
      </View>
      <View style={styles.View_9_373}>
        <Text style={styles.Text_9_373}>MangaKaKalot</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 83, 13, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_9_362: {
    width: wp("157.36754557291667%"),
    minWidth: wp("157.36754557291667%"),
    height: hp("136.90276432558488%"),
    minHeight: hp("136.90276432558488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.2%"),
    top: hp("-17.486330459678108%")
  },
  ImageBackground_9_354: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.39999999999999%"),
    top: hp("56.967213114754095%"),
    resizeMode: "cover"
  },
  ImageBackground_9_355: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666665%"),
    top: hp("63.66120218579235%"),
    resizeMode: "cover"
  },
  ImageBackground_9_358: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("88.1147547823484%"),
    resizeMode: "cover"
  },
  ImageBackground_9_356: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("23.497267759562842%"),
    resizeMode: "cover"
  },
  ImageBackground_9_361: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.71583917753293%"),
    resizeMode: "cover"
  },
  ImageBackground_9_353: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("31.284153005464482%"),
    resizeMode: "cover"
  },
  ImageBackground_9_357: {
    width: wp("84.30087890625%"),
    minWidth: wp("84.30087890625%"),
    height: hp("43.18692566918545%"),
    minHeight: hp("43.18692566918545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.599999999999998%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_13: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%"),
    top: hp("59.83606557377049%"),
    backgroundColor: "rgba(255, 83, 13, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_4_14: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("61.338797814207645%"),
    justifyContent: "flex-start"
  },
  Text_4_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_15: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("71.44808743169399%"),
    justifyContent: "flex-start"
  },
  Text_4_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_267: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6%"),
    top: hp("0%")
  },
  View_7_269: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_7_270: {
    flexGrow: 1,
    width: wp("58.4%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("-0.273224043715847%")
  },
  View_7_275: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.5486378487342043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_7_276: {
    width: wp("6.487483723958333%"),
    minWidth: wp("6.487483723958333%"),
    height: hp("1.5482709707458162%"),
    minHeight: hp("1.5482709707458162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583329%"),
    top: hp("0.00036687798838785923%")
  },
  ImageBackground_7_280: {
    width: wp("4.072623697916667%"),
    minWidth: wp("4.072623697916667%"),
    height: hp("1.4980295316769126%"),
    minHeight: hp("1.4980295316769126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("0%")
  },
  ImageBackground_7_284: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571935101285007%"),
    minHeight: hp("1.4571935101285007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.045893101092895794%")
  },
  ImageBackground_7_289: {
    flexGrow: 1,
    width: wp("7.580305989583333%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920930989583335%"),
    top: hp("2.34528421704235%")
  },
  View_9_372: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("24.043715846994534%")
  },
  ImageBackground_9_370: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_9_369: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_9_373: {
    width: wp("51.46666666666667%"),
    minWidth: wp("51.46666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("29.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_9_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
