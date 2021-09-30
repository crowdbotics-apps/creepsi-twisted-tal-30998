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
      <View style={styles.View_14_745} />
      <View style={styles.View_14_746}>
        <View style={styles.View_I14_746_14_736}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I14_746_14_736_6_33}
          />
          <View style={styles.View_I14_746_14_736_6_38}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I14_746_14_736_6_39}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I14_746_14_736_6_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I14_746_14_736_6_47}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I14_746_14_736_6_52}
          />
        </View>
      </View>
      <View style={styles.View_14_752}>
        <View style={styles.View_14_753}>
          <View style={styles.View_I14_753_14_738} />
          <View style={styles.View_I14_753_14_739}>
            <Text style={styles.Text_I14_753_14_739}>Zoro bubble Head</Text>
          </View>
          <View style={styles.View_I14_753_14_740}>
            <Text style={styles.Text_I14_753_14_740}>$16.99</Text>
          </View>
        </View>
        <View style={styles.View_14_754}>
          <View style={styles.View_I14_754_14_738} />
          <View style={styles.View_I14_754_14_739}>
            <Text style={styles.Text_I14_754_14_739}>Deku Nike </Text>
          </View>
          <View style={styles.View_I14_754_14_740}>
            <Text style={styles.Text_I14_754_14_740}>$225.00</Text>
          </View>
        </View>
        <View style={styles.View_14_755}>
          <View style={styles.View_I14_755_14_738} />
          <View style={styles.View_I14_755_14_739}>
            <Text style={styles.Text_I14_755_14_739}>
              Levi Ackerman plush pillow
            </Text>
          </View>
          <View style={styles.View_I14_755_14_740}>
            <Text style={styles.Text_I14_755_14_740}>$9.99</Text>
          </View>
        </View>
        <View style={styles.View_14_757}>
          <Text style={styles.Text_14_757}>Hot deals</Text>
        </View>
      </View>
      <View style={styles.View_14_758}>
        <View style={styles.View_14_759}>
          <View style={styles.View_I14_759_14_738} />
          <View style={styles.View_I14_759_14_739}>
            <Text style={styles.Text_I14_759_14_739}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I14_759_14_740}>
            <Text style={styles.Text_I14_759_14_740}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_14_760}>
          <View style={styles.View_I14_760_14_738} />
          <View style={styles.View_I14_760_14_739}>
            <Text style={styles.Text_I14_760_14_739}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I14_760_14_740}>
            <Text style={styles.Text_I14_760_14_740}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_14_761}>
          <View style={styles.View_I14_761_14_738} />
          <View style={styles.View_I14_761_14_739}>
            <Text style={styles.Text_I14_761_14_739}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I14_761_14_740}>
            <Text style={styles.Text_I14_761_14_740}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_14_762}>
          <View style={styles.View_I14_762_14_738} />
          <View style={styles.View_I14_762_14_739}>
            <Text style={styles.Text_I14_762_14_739}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I14_762_14_740}>
            <Text style={styles.Text_I14_762_14_740}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_14_763}>
          <Text style={styles.Text_14_763}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_14_764}>
        <View style={styles.View_I14_764_6_56}>
          <Text style={styles.Text_I14_764_6_56}>shop</Text>
        </View>
        <View style={styles.View_I14_764_6_60}>
          <Text style={styles.Text_I14_764_6_60}>Back</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c2/c42e/ff7c31fd7e5869322cae91609fcb0aa8"
        }}
        style={styles.ImageBackground_15_367}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6876/46af/9da47761d7036dccc7dbf4ab8cbc3afa"
        }}
        style={styles.ImageBackground_15_364}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea7/537a/f4f71ee70be74eeff94d5de76411d4f5"
        }}
        style={styles.ImageBackground_15_361}
      />
      <View style={styles.View_15_332}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03bc/de2e/71d11527bc634e541e96a9aadd7064e5"
          }}
          style={styles.ImageBackground_15_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c078/96b5/f59854f0b9c11bb4f2df769c74339b6c"
          }}
          style={styles.ImageBackground_15_333}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51f7/746a/8e61315dcbe8dcfdb3a21ac41bb14733"
          }}
          style={styles.ImageBackground_15_334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b6/ea2e/ebe6b5c01e0deb8dec49b1ccfe019275"
          }}
          style={styles.ImageBackground_15_336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3e5/beb4/1066d1a1773bb0e5f0900190049b7463"
          }}
          style={styles.ImageBackground_15_337}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f9/d8d4/30b0c789b62d52f2d3af4a72822f086b"
          }}
          style={styles.ImageBackground_15_339}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f0/d9eb/4f316e24a8aa09e99f980721bf5f8b65"
        }}
        style={styles.ImageBackground_15_343}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f82/f998/2096d3cd5a9e2f93ec3deab8a2ecd901"
        }}
        style={styles.ImageBackground_15_344}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c7f/d1e3/312196903420aad38b12bfa0ce56e1af"
        }}
        style={styles.ImageBackground_15_348}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f4/d9be/b9368c3e89e5cc11bdd244f4cba6ab65"
        }}
        style={styles.ImageBackground_15_349}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e02/c1e3/4b47e437a942451a388b9eb82497a309"
        }}
        style={styles.ImageBackground_15_350}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f4/d9be/b9368c3e89e5cc11bdd244f4cba6ab65"
        }}
        style={styles.ImageBackground_15_351}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f4/d9be/b9368c3e89e5cc11bdd244f4cba6ab65"
        }}
        style={styles.ImageBackground_15_352}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6769/d945/0bc88b39771f865d1ca3fa5a852ec43b"
        }}
        style={styles.ImageBackground_15_353}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547b/c0d6/4056bcb7077da19b7a188863563725a7"
        }}
        style={styles.ImageBackground_15_363}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85e9/da0b/73db5dc4ffb24059fdbbf133bd22df1b"
        }}
        style={styles.ImageBackground_15_347}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_14_745: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)"
  },
  View_14_746: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_746_14_736: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I14_746_14_736_6_33: {
    flexGrow: 1,
    width: wp("58.4%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("-0.273224043715847%")
  },
  View_I14_746_14_736_6_38: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.5486378487342043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I14_746_14_736_6_39: {
    width: wp("6.487483723958333%"),
    minWidth: wp("6.487483723958333%"),
    height: hp("1.5482709707458162%"),
    minHeight: hp("1.5482709707458162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583343%"),
    top: hp("0.00036687798838785923%")
  },
  ImageBackground_I14_746_14_736_6_43: {
    width: wp("4.072639973958333%"),
    minWidth: wp("4.072639973958333%"),
    height: hp("1.4980295316769126%"),
    minHeight: hp("1.4980295316769126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("0%")
  },
  ImageBackground_I14_746_14_736_6_47: {
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
  ImageBackground_I14_746_14_736_6_52: {
    flexGrow: 1,
    width: wp("7.580305989583333%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920930989583335%"),
    top: hp("2.34528421704235%")
  },
  View_14_752: {
    width: wp("96.53333333333333%"),
    minWidth: wp("96.53333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.551912568306015%")
  },
  View_14_753: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_753_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_753_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%"),
    justifyContent: "flex-start"
  },
  Text_I14_753_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_753_14_740: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%"),
    justifyContent: "flex-start"
  },
  Text_I14_753_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_754: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_754_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_754_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%"),
    justifyContent: "flex-start"
  },
  Text_I14_754_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_754_14_740: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%"),
    justifyContent: "flex-start"
  },
  Text_I14_754_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_755: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_755_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_755_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234965%"),
    justifyContent: "flex-start"
  },
  Text_I14_755_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_755_14_740: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726774%"),
    justifyContent: "flex-start"
  },
  Text_I14_755_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_757: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_758: {
    width: wp("130.13333333333333%"),
    minWidth: wp("130.13333333333333%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("88.25136612021858%")
  },
  View_14_759: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_759_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_759_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%"),
    justifyContent: "flex-start"
  },
  Text_I14_759_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_759_14_740: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I14_759_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_760: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_760_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_760_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%"),
    justifyContent: "flex-start"
  },
  Text_I14_760_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_760_14_740: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I14_760_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_761: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_761_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_761_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%"),
    justifyContent: "flex-start"
  },
  Text_I14_761_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_761_14_740: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I14_761_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_762: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100.8%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_762_14_738: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_I14_762_14_739: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234972%"),
    justifyContent: "flex-start"
  },
  Text_I14_762_14_739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_762_14_740: {
    flexGrow: 1,
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.85792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I14_762_14_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_763: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_763: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_764: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_764_6_56: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I14_764_6_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_764_6_60: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_I14_764_6_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_15_367: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    top: hp("60.38251366120219%"),
    resizeMode: "cover"
  },
  ImageBackground_15_364: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("95.49180327868852%"),
    resizeMode: "cover"
  },
  ImageBackground_15_361: {
    width: wp("47.02169596354167%"),
    minWidth: wp("47.02169596354167%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.13333333333334%"),
    top: hp("94.53551912568307%"),
    resizeMode: "cover"
  },
  View_15_332: {
    width: wp("100.53333333333335%"),
    minWidth: wp("100.53333333333335%"),
    height: hp("17.62295081967213%"),
    minHeight: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("93.30601092896174%")
  },
  ImageBackground_15_358: {
    width: wp("35.738834635416666%"),
    minWidth: wp("35.738834635416666%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_15_333: {
    width: wp("100.53333333333335%"),
    minWidth: wp("100.53333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.972677595628426%")
  },
  ImageBackground_15_334: {
    width: wp("8.799999999999999%"),
    height: hp("4.098360655737705%"),
    top: hp("11.612021857923509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%")
  },
  ImageBackground_15_336: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.400000000000006%"),
    top: hp("11.612021857923509%")
  },
  ImageBackground_15_337: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("11.612021857923509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%")
  },
  ImageBackground_15_339: {
    width: wp("10.133333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("11.612021857923509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  ImageBackground_15_343: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("12.158469945355192%"),
    resizeMode: "cover"
  },
  ImageBackground_15_344: {
    width: wp("9.6%"),
    height: hp("4.098360655737705%"),
    top: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_15_348: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-32.53333333333333%"),
    top: hp("14.48087431693989%"),
    resizeMode: "cover"
  },
  ImageBackground_15_349: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("43.5792349726776%")
  },
  ImageBackground_15_350: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("43.5792349726776%")
  },
  ImageBackground_15_351: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("43.5792349726776%")
  },
  ImageBackground_15_352: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.06666666666667%"),
    top: hp("43.5792349726776%")
  },
  ImageBackground_15_353: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("59.699453551912576%"),
    resizeMode: "cover"
  },
  ImageBackground_15_363: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("61.065573770491795%"),
    resizeMode: "cover"
  },
  ImageBackground_15_347: {
    width: wp("60%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    top: hp("11.885245901639344%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
