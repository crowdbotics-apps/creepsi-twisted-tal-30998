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
      <View style={styles.View_14_301}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I14_301_6_33}
        />
        <View style={styles.View_I14_301_6_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I14_301_6_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I14_301_6_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I14_301_6_47}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I14_301_6_52}
        />
      </View>
      <View style={styles.View_14_302}>
        <View style={styles.View_I14_302_6_55}>
          <Text text="" style={styles.Text_I14_302_6_55} />
        </View>
        <View style={styles.View_I14_302_6_56}>
          <Text style={styles.Text_I14_302_6_56}>Otakus Lounge</Text>
        </View>
        <View style={styles.View_I14_302_6_60}>
          <Text style={styles.Text_I14_302_6_60}>Back</Text>
        </View>
      </View>
      <View style={styles.View_14_303}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I14_303_14_277}
        />
        <View style={styles.View_I14_303_14_278}>
          <Text style={styles.Text_I14_303_14_278}>Message here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e684/ebc6/a7704639970586fc92b604dc4788178c"
          }}
          style={styles.ImageBackground_I14_303_14_279}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1dc/17af/17c9c745fce465e8ee87258f11487932"
        }}
        style={styles.ImageBackground_14_490}
      />
      <View style={styles.View_14_492}>
        <View style={styles.View_14_493} />
        <View style={styles.View_14_494}>
          <Text style={styles.Text_14_494}>Do you know what time is it?</Text>
        </View>
      </View>
      <View style={styles.View_14_496}>
        <View style={styles.View_14_567}>
          <View style={styles.View_14_497} />
          <View style={styles.View_14_498}>
            <Text style={styles.Text_14_498}>
              broo i asked for the time as in 10:00 or something lol
            </Text>
          </View>
        </View>
        <View style={styles.View_14_564}>
          <View style={styles.View_14_537} />
          <View style={styles.View_14_538}>
            <Text style={styles.Text_14_538}>
              Holy shit that looks good man{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_14_566}>
          <View style={styles.View_14_539} />
          <View style={styles.View_14_540}>
            <Text style={styles.Text_14_540}>One piece is the Goat </Text>
          </View>
        </View>
        <View style={styles.View_14_565}>
          <View style={styles.View_14_541} />
          <View style={styles.View_14_542}>
            <Text style={styles.Text_14_542}>no arguments </Text>
          </View>
        </View>
        <View style={styles.View_14_594}>
          <View style={styles.View_14_595} />
          <View style={styles.View_14_596}>
            <Text style={styles.Text_14_596}>typing...</Text>
          </View>
        </View>
        <View style={styles.View_14_599}>
          <View style={styles.View_14_600} />
          <View style={styles.View_14_601}>
            <Text style={styles.Text_14_601}>typing...</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09e7/b1b8/c186f7b06cf4ca0b18cebebb98e47f35"
          }}
          style={styles.ImageBackground_14_499}
        />
        <View style={styles.View_14_500}>
          <View style={styles.View_14_501} />
        </View>
      </View>
      <View style={styles.View_14_503}>
        <View style={styles.View_14_504} />
        <View style={styles.View_14_505}>
          <Text style={styles.Text_14_505}>It’s morning in Tokyo 😎</Text>
        </View>
        <View style={styles.View_14_506}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8462/a76c/ca6834ebbd979206eda402b847ffb198"
            }}
            style={styles.ImageBackground_14_507}
          />
        </View>
      </View>
      <View style={styles.View_14_511}>
        <View style={styles.View_14_512} />
        <View style={styles.View_14_513}>
          <Text style={styles.Text_14_513}>My dinner</Text>
        </View>
        <View style={styles.View_14_514}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8462/a76c/ca6834ebbd979206eda402b847ffb198"
            }}
            style={styles.ImageBackground_14_515}
          />
        </View>
      </View>
      <View style={styles.View_14_545}>
        <View style={styles.View_14_546} />
        <View style={styles.View_14_547}>
          <Text style={styles.Text_14_547}>Ahh shit here we go again </Text>
        </View>
        <View style={styles.View_14_548}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8462/a76c/ca6834ebbd979206eda402b847ffb198"
            }}
            style={styles.ImageBackground_14_549}
          />
        </View>
      </View>
      <View style={styles.View_14_553}>
        <View style={styles.View_14_593}>
          <View style={styles.View_14_554} />
          <View style={styles.View_14_555}>
            <Text style={styles.Text_14_555}>let the Karnage begin </Text>
          </View>
        </View>
        <View style={styles.View_14_556}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8462/a76c/ca6834ebbd979206eda402b847ffb198"
            }}
            style={styles.ImageBackground_14_557}
          />
        </View>
      </View>
      <View style={styles.View_14_519}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b29e/3116/617f60f9d82c151a65dc3ab3c400c86e"
          }}
          style={styles.ImageBackground_14_520}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/340b/c653/8ccc7b68da72387b466de401599f7c61"
          }}
          style={styles.ImageBackground_14_521}
        />
        <View style={styles.View_14_522}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8462/a76c/ca6834ebbd979206eda402b847ffb198"
            }}
            style={styles.ImageBackground_14_523}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3f3/c13b/0a9bc1c3ea3067b9a4f9309639277798"
        }}
        style={styles.ImageBackground_14_561}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c239/c904/3416b2b86d4e1b58c03b4fbf182ce729"
        }}
        style={styles.ImageBackground_14_563}
      />
      <View style={styles.View_14_574}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e102/4e39/a84c22a2a984e382dd9ee1f65baa6043"
          }}
          style={styles.ImageBackground_I14_574_405_15135}
        />
      </View>
      <View style={styles.View_14_580}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e102/4e39/a84c22a2a984e382dd9ee1f65baa6043"
          }}
          style={styles.ImageBackground_I14_580_405_15135}
        />
      </View>
      <View style={styles.View_14_586}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e102/4e39/a84c22a2a984e382dd9ee1f65baa6043"
          }}
          style={styles.ImageBackground_I14_586_405_15135}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04aa/31e0/a8ac6b0fd7944f887a876980777fe165"
        }}
        style={styles.ImageBackground_14_592}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3165/0ae6/af61ae8ef61349eeb56f18a265b6db07"
        }}
        style={styles.ImageBackground_14_597}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a548/31d7/3778b40f0842ae13eeaff64632e2ce7b"
        }}
        style={styles.ImageBackground_14_598}
      />
      <View style={styles.View_14_604}>
        <View style={styles.View_14_605} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_14_301: {
    flexGrow: 1,
    width: wp("100%"),
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
  ImageBackground_I14_301_6_33: {
    flexGrow: 1,
    width: wp("58.4%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("-0.273224043715847%")
  },
  View_I14_301_6_38: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.5486378487342043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I14_301_6_39: {
    width: wp("6.487475585937499%"),
    minWidth: wp("6.487475585937499%"),
    height: hp("1.5482709707458162%"),
    minHeight: hp("1.5482709707458162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288891601562511%"),
    top: hp("0.00036687798838785923%")
  },
  ImageBackground_I14_301_6_43: {
    width: wp("4.0726318359375%"),
    minWidth: wp("4.0726318359375%"),
    height: hp("1.4980295316769126%"),
    minHeight: hp("1.4980295316769126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%"),
    top: hp("0%")
  },
  ImageBackground_I14_301_6_47: {
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
  ImageBackground_I14_301_6_52: {
    flexGrow: 1,
    width: wp("7.580312093098958%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920937093098958%"),
    top: hp("2.34528421704235%")
  },
  View_14_302: {
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
  View_I14_302_6_55: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_I14_302_6_55: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_302_6_56: {
    flexGrow: 1,
    width: wp("58.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I14_302_6_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_302_6_60: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_I14_302_6_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_303: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("101.91256830601093%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I14_303_14_277: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I14_303_14_278: {
    flexGrow: 1,
    width: wp("32.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_I14_303_14_278: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I14_303_14_279: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_14_490: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("19.672131147540984%"),
    resizeMode: "cover"
  },
  View_14_492: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("8.128415300546447%"),
    minHeight: hp("8.128415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("16.256830601092894%")
  },
  View_14_493: {
    width: wp("58.666666666666664%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549
  },
  View_14_494: {
    width: wp("52.26666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999975%"),
    top: hp("1.0245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_14_494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_496: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("68.71584699453553%"),
    minHeight: hp("68.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("31.147540983606557%")
  },
  View_14_567: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("0%")
  },
  View_14_497: {
    width: wp("58.666666666666664%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 4
  },
  View_14_498: {
    width: wp("52.26666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.1612021857923516%"),
    justifyContent: "flex-start"
  },
  Text_14_498: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_564: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("30.737704918032787%")
  },
  View_14_537: {
    width: wp("58.666666666666664%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 4
  },
  View_14_538: {
    width: wp("52.26666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999975%"),
    top: hp("0.705015463907209%"),
    justifyContent: "flex-start"
  },
  Text_14_538: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_566: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("36.33879781420764%")
  },
  View_14_539: {
    width: wp("58.666666666666664%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 4
  },
  View_14_540: {
    width: wp("52.26666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999975%"),
    top: hp("0.6428082784017022%"),
    justifyContent: "flex-start"
  },
  Text_14_540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_565: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("41.803278688524586%")
  },
  View_14_541: {
    width: wp("58.666666666666664%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 4
  },
  View_14_542: {
    width: wp("52.26666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999975%"),
    top: hp("0.642808278401688%"),
    justifyContent: "flex-start"
  },
  Text_14_542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_594: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("59.97267759562841%")
  },
  View_14_595: {
    width: wp("18.933333333333334%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 4
  },
  View_14_596: {
    width: wp("16.867879231770832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.032727050781249%"),
    top: hp("0.6428077572681872%"),
    justifyContent: "flex-start"
  },
  Text_14_596: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_599: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("64.48087431693988%")
  },
  View_14_600: {
    width: wp("18.933333333333334%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 4
  },
  View_14_601: {
    width: wp("16.867879231770832%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.032727050781249%"),
    top: hp("0.6428077572682014%"),
    justifyContent: "flex-start"
  },
  Text_14_601: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_14_499: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.8688524590163915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_500: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("8.060109289617483%")
  },
  View_14_501: {
    width: wp("34.66666666666667%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05999999865889549,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_14_503: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("25.546448087431695%")
  },
  View_14_504: {
    width: wp("55.2%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)"
  },
  View_14_505: {
    width: wp("34.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.34153005464480657%"),
    justifyContent: "flex-start"
  },
  Text_14_505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_506: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_14_507: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_511: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("44.12568306010929%")
  },
  View_14_512: {
    width: wp("21.333333333333336%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 18
  },
  View_14_513: {
    width: wp("14.933333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_14_513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_514: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000006%"),
    top: hp("2.732240437158474%")
  },
  ImageBackground_14_515: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_545: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("79.37158469945356%")
  },
  View_14_546: {
    width: wp("44.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 18
  },
  View_14_547: {
    width: wp("38.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0245901639344197%"),
    justifyContent: "flex-start"
  },
  Text_14_547: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_548: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    top: hp("2.7322404371584526%")
  },
  ImageBackground_14_549: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_553: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("85.10928961748634%")
  },
  View_14_593: {
    width: wp("44.266666666666666%"),
    minWidth: wp("44.266666666666666%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_554: {
    width: wp("44.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 18
  },
  View_14_555: {
    width: wp("32.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0245901639344197%"),
    justifyContent: "flex-start"
  },
  Text_14_555: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_14_556: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.333333333333336%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_14_557: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_519: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("51.229508196721305%")
  },
  ImageBackground_14_520: {
    width: wp("29.333333333333332%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 18
  },
  ImageBackground_14_521: {
    width: wp("29.333333333333332%"),
    height: hp("8.469945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999994%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 2
  },
  View_14_522: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("6.284153005464489%")
  },
  ImageBackground_14_523: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_14_561: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("62.431693989071036%"),
    resizeMode: "cover"
  },
  ImageBackground_14_563: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("67.89617486338798%"),
    resizeMode: "cover"
  },
  View_14_574: {
    width: wp("4.533333333333333%"),
    height: hp("2.459016393442623%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I14_574_405_15135: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_580: {
    width: wp("4.533333333333333%"),
    height: hp("2.459016393442623%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I14_580_405_15135: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_586: {
    width: wp("4.533333333333333%"),
    height: hp("2.459016393442623%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I14_586_405_15135: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_592: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("40.02732240437158%"),
    resizeMode: "cover"
  },
  ImageBackground_14_597: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("91.39344262295081%"),
    resizeMode: "cover"
  },
  ImageBackground_14_598: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("95.62841530054644%"),
    resizeMode: "cover"
  },
  View_14_604: {
    width: wp("100%"),
    height: hp("3.551912568306011%"),
    top: hp("108.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_605: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("1.7759562841530112%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
