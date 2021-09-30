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
      <View style={styles.View_9_388}>
        <View style={styles.View_9_384} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/800e/1d4e/f03ec5f8a49882b556f4e2864abb081b"
          }}
          style={styles.ImageBackground_9_383}
        />
        <View style={styles.View_9_385} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a8f/39f7/ec2938c2797f054159f55d85512e72ce"
          }}
          style={styles.ImageBackground_9_386}
        />
      </View>
      <View style={styles.View_15_331}>
        <View style={styles.View_9_394} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51f7/746a/8e61315dcbe8dcfdb3a21ac41bb14733"
          }}
          style={styles.ImageBackground_9_403}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9b6/ea2e/ebe6b5c01e0deb8dec49b1ccfe019275"
          }}
          style={styles.ImageBackground_12_215}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b44b/1b7a/9a56ec4213ff90662a26044c3cbcff87"
          }}
          style={styles.ImageBackground_12_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0131/3b1c/e1a3a909d43b323ea5c6b02dcc20161e"
          }}
          style={styles.ImageBackground_9_395}
        />
      </View>
      <View style={styles.View_14_266}>
        <View style={styles.View_6_223} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6332/4186/df3fed24bef739fcd6d20d8a37986090"
          }}
          style={styles.ImageBackground_9_379}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08e2/1a6c/c1d7d42ee03b65d4d4e5f41ab817c128"
          }}
          style={styles.ImageBackground_9_380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca2/d63b/d29de508361a5ad055632efe5a178d6c"
          }}
          style={styles.ImageBackground_9_381}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1080/64fb/0849fc7d51a71ef7e23cbc3515244f60"
          }}
          style={styles.ImageBackground_9_382}
        />
      </View>
      <View style={styles.View_13_242}>
        <View style={styles.View_9_392} />
        <View style={styles.View_10_230}>
          <Text style={styles.Text_10_230}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_13_241}>
        <View style={styles.View_10_229} />
        <View style={styles.View_10_232}>
          <Text style={styles.Text_10_232}>Completed</Text>
        </View>
      </View>
      <View style={styles.View_13_243}>
        <View style={styles.View_9_393} />
        <View style={styles.View_13_240}>
          <Text style={styles.Text_13_240}>Webtoons</Text>
        </View>
      </View>
      <View style={styles.View_14_271}>
        <View style={styles.View_14_270}>
          <View style={styles.View_14_253}>
            <Text style={styles.Text_14_253}>Tower of G..</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec7e/9ef4/99bd269e54c4314c1eb6a6e8ec42baa6"
            }}
            style={styles.ImageBackground_14_245}
          />
        </View>
        <View style={styles.View_14_269}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e3/cb36/37e9e51fd4bade6c255a9f36d4ecbb2b"
            }}
            style={styles.ImageBackground_14_247}
          />
          <View style={styles.View_14_254}>
            <Text style={styles.Text_14_254}>Soul Cartel</Text>
          </View>
          <View style={styles.View_14_268}>
            <View style={styles.View_14_255}>
              <Text style={styles.Text_14_255}>Sub Zero</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/d30b/ccc8179453a5575923a0001df1064728"
              }}
              style={styles.ImageBackground_14_248}
            />
          </View>
        </View>
        <View style={styles.View_14_252}>
          <View style={styles.View_14_251}>
            <Text style={styles.Text_14_251}>Zero Game</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c9/3b92/fdc43c5062edf68e8e7e0d3c6e0d3c58"
            }}
            style={styles.ImageBackground_14_246}
          />
        </View>
        <View style={styles.View_14_257}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5a/89df/f1b9e3279241a28c4fc93a304e849beb"
            }}
            style={styles.ImageBackground_14_250}
          />
          <View style={styles.View_14_256}>
            <Text style={styles.Text_14_256}>Solo Leveli..</Text>
          </View>
        </View>
        <View style={styles.View_14_267}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9274/2462/bf61bf8a4bdb942cd480546c631b60bb"
            }}
            style={styles.ImageBackground_14_258}
          />
          <View style={styles.View_14_259}>
            <Text style={styles.Text_14_259}>Ordeal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_13_228}>
        <View style={styles.View_11_208}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ea3/ae78/a651b1bedc6040e3f8a1f37643bb492a"
            }}
            style={styles.ImageBackground_10_233}
          />
          <View style={styles.View_11_203}>
            <Text style={styles.Text_11_203}>Romance of..</Text>
          </View>
        </View>
        <View style={styles.View_13_222}>
          <View style={styles.View_13_217}>
            <Text style={styles.Text_13_217}>Kuroko no..</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dba9/cfc3/009c805d9c073a76c33216f7f40e1e4f"
            }}
            style={styles.ImageBackground_13_216}
          />
        </View>
        <View style={styles.View_13_223}>
          <View style={styles.View_13_219}>
            <Text style={styles.Text_13_219}>Yu-gi-oh</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bed5/89c8/907430a263456449af160752469ba51a"
            }}
            style={styles.ImageBackground_13_218}
          />
        </View>
        <View style={styles.View_13_224}>
          <View style={styles.View_13_221}>
            <Text style={styles.Text_13_221}>Food wars</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60eb/a7fd/e2681c9c4e565e066102948d17d75614"
            }}
            style={styles.ImageBackground_13_220}
          />
        </View>
        <View style={styles.View_13_227}>
          <View style={styles.View_13_226}>
            <Text style={styles.Text_13_226}>Pandemic</Text>
          </View>
          <View style={styles.View_13_238}>
            <Text style={styles.Text_13_238}>100 days..</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1799/c8da/6427d3288116d5d6700eb6b7de1113f0"
            }}
            style={styles.ImageBackground_13_225}
          />
        </View>
      </View>
      <View style={styles.View_10_228}>
        <View style={styles.View_9_418}>
          <View style={styles.View_9_406}>
            <Text style={styles.Text_9_406}> Chapter 106</Text>
          </View>
          <View style={styles.View_9_411}>
            <Text style={styles.Text_9_411}>As Long as ...</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79ad/6ae5/afcb05b7c8d3f1a7e574f536d99800db"
            }}
            style={styles.ImageBackground_9_405}
          />
        </View>
        <View style={styles.View_10_211}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df2/e12d/a1b37f11a054130296fe2b5715fc2aa0"
            }}
            style={styles.ImageBackground_9_421}
          />
          <View style={styles.View_9_422}>
            <Text style={styles.Text_9_422}>Mercenary..</Text>
          </View>
          <View style={styles.View_9_423}>
            <Text style={styles.Text_9_423}>Chapter 52</Text>
          </View>
        </View>
        <View style={styles.View_10_219}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b12/4937/1aebdb9aea5bcd49f301dbe16373c175"
            }}
            style={styles.ImageBackground_10_214}
          />
          <View style={styles.View_10_218}>
            <Text style={styles.Text_10_218}>Chapter 97</Text>
          </View>
          <View style={styles.View_10_217}>
            <Text style={styles.Text_10_217}>Bowblade..</Text>
          </View>
        </View>
        <View style={styles.View_10_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5a/89df/f1b9e3279241a28c4fc93a304e849beb"
            }}
            style={styles.ImageBackground_10_220}
          />
          <View style={styles.View_10_221}>
            <Text style={styles.Text_10_221}>Solo leveling</Text>
          </View>
          <View style={styles.View_10_222}>
            <Text style={styles.Text_10_222}>Chapter 116</Text>
          </View>
        </View>
        <View style={styles.View_10_227}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bfc/cfb1/89c1ab7ee9c4bcede9c6d3158d8e40ad"
            }}
            style={styles.ImageBackground_10_224}
          />
          <View style={styles.View_10_225}>
            <Text style={styles.Text_10_225}>Infectee</Text>
          </View>
          <View style={styles.View_10_226}>
            <Text style={styles.Text_10_226}>Chapter 37</Text>
          </View>
        </View>
        <View style={styles.View_13_236}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8de5/6d3e/8e487084bf18db8ea82d6a475db734ca"
            }}
            style={styles.ImageBackground_13_229}
          />
          <View style={styles.View_13_234}>
            <Text style={styles.Text_13_234}>Begin...</Text>
          </View>
          <View style={styles.View_13_235}>
            <Text style={styles.Text_13_235}>Chapter 37</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed06/2ea4/68aa3132c27b2e26c77cc1f78048dea4"
        }}
        style={styles.ImageBackground_13_237}
      />
      <View style={styles.View_6_227}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I6_227_6_33}
        />
        <View style={styles.View_I6_227_6_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I6_227_6_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I6_227_6_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I6_227_6_47}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I6_227_6_52}
        />
      </View>
      <View style={styles.View_6_228}>
        <View style={styles.View_I6_228_6_55}>
          <Text style={styles.Text_I6_228_6_55}>Next</Text>
        </View>
        <View style={styles.View_I6_228_6_56}>
          <Text style={styles.Text_I6_228_6_56}>Welcome</Text>
        </View>
        <View style={styles.View_I6_228_6_60}>
          <Text style={styles.Text_I6_228_6_60}>Back</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_9_388: {
    width: wp("25.466666666666665%"),
    minWidth: wp("25.466666666666665%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666667%"),
    top: hp("40.02732240437158%")
  },
  View_9_384: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_9_383: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%"),
    top: hp("0%")
  },
  View_9_385: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_9_386: {
    width: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.999999999999993%"),
    top: hp("0%")
  },
  View_15_331: {
    width: wp("100.53333333333335%"),
    minWidth: wp("100.53333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.27868852459017%")
  },
  View_9_394: {
    width: wp("100.53333333333335%"),
    minWidth: wp("100.53333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_9_403: {
    width: wp("8.799999999999999%"),
    height: hp("4.098360655737705%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%")
  },
  ImageBackground_12_215: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_12_211: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%")
  },
  ImageBackground_9_395: {
    width: wp("10.133333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_14_266: {
    width: wp("115.6271728515625%"),
    minWidth: wp("115.6271728515625%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.066666666666666%"),
    top: hp("18.30601092896175%")
  },
  View_6_223: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  ImageBackground_9_379: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    resizeMode: "cover"
  },
  ImageBackground_9_380: {
    width: wp("26.75024820963542%"),
    minWidth: wp("26.75024820963542%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("0.1366120218579212%"),
    resizeMode: "cover"
  },
  ImageBackground_9_381: {
    width: wp("26.2988525390625%"),
    minWidth: wp("26.2988525390625%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.866666666666674%"),
    top: hp("0.1366120218579212%"),
    resizeMode: "cover"
  },
  ImageBackground_9_382: {
    width: wp("26.293841552734378%"),
    minWidth: wp("26.293841552734378%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    top: hp("0.1366120218579212%"),
    resizeMode: "cover"
  },
  View_13_242: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568306%")
  },
  View_9_392: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)"
  },
  View_10_230: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_10_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_241: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.30054644808743%")
  },
  View_10_229: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)"
  },
  View_10_232: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_243: {
    width: wp("100.53333333333335%"),
    minWidth: wp("100.53333333333335%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("83.06010928961749%")
  },
  View_9_393: {
    width: wp("100.53333333333335%"),
    minWidth: wp("100.53333333333335%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 83, 13, 1)"
  },
  View_13_240: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_13_240: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_271: {
    width: wp("106.93333333333332%"),
    minWidth: wp("106.93333333333332%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("88.79781420765028%")
  },
  View_14_270: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333332%"),
    top: hp("0%")
  },
  View_14_253: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_14_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_245: {
    width: wp("14.662630208333333%"),
    minWidth: wp("14.662630208333333%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_14_269: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("0%")
  },
  ImageBackground_14_247: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_14_254: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_14_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_268: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.400000000000006%"),
    top: hp("0%")
  },
  View_14_255: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_14_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_248: {
    width: wp("13.4865478515625%"),
    minWidth: wp("13.4865478515625%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_14_252: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_251: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_14_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_246: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_14_257: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("0%")
  },
  ImageBackground_14_250: {
    width: wp("14.346067301432292%"),
    minWidth: wp("14.346067301432292%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_14_256: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_14_256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_267: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    top: hp("0%")
  },
  ImageBackground_14_258: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_14_259: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_14_259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_228: {
    width: wp("100.8%"),
    minWidth: wp("100.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("69.67213114754098%")
  },
  View_11_208: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_233: {
    width: wp("15.180436197916666%"),
    minWidth: wp("15.180436197916666%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_11_203: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_11_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_222: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("0%")
  },
  View_13_217: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_13_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_216: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333293%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_223: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("0%")
  },
  View_13_219: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_13_219: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_218: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_224: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("0%")
  },
  View_13_221: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_13_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_220: {
    width: wp("13.430655924479169%"),
    minWidth: wp("13.430655924479169%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_227: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666667%"),
    top: hp("0%")
  },
  View_13_226: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344268%"),
    justifyContent: "flex-start"
  },
  Text_13_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_238: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("10.10928961748634%"),
    justifyContent: "flex-start"
  },
  Text_13_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_225: {
    width: wp("14.285713704427083%"),
    minWidth: wp("14.285713704427083%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10_228: {
    width: wp("105.99543457031251%"),
    minWidth: wp("105.99543457031251%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3333333333333335%"),
    top: hp("49.31693989071038%")
  },
  View_9_418: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("13.061498423091699%"),
    minHeight: hp("13.061498423091699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_406: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6011311848958335%"),
    top: hp("11.831990226370387%"),
    justifyContent: "flex-start"
  },
  Text_9_406: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_411: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344261%"),
    justifyContent: "flex-start"
  },
  Text_9_411: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_405: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10_211: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0%")
  },
  ImageBackground_9_421: {
    width: wp("14.026668294270833%"),
    minWidth: wp("14.026668294270833%"),
    height: hp("10.419398448506339%"),
    minHeight: hp("10.419398448506339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_9_422: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202196%"),
    justifyContent: "flex-start"
  },
  Text_9_422: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_423: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("11.885245901639351%"),
    justifyContent: "flex-start"
  },
  Text_9_423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_219: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.800000000000004%"),
    top: hp("0%")
  },
  ImageBackground_10_214: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10_218: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("11.885245901639351%"),
    justifyContent: "flex-start"
  },
  Text_10_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_217: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202196%"),
    justifyContent: "flex-start"
  },
  Text_10_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_223: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.199999999999996%"),
    top: hp("0%")
  },
  ImageBackground_10_220: {
    width: wp("14.3460693359375%"),
    minWidth: wp("14.3460693359375%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10_221: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.382513661202196%"),
    justifyContent: "flex-start"
  },
  Text_10_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_222: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("11.885245901639351%"),
    justifyContent: "flex-start"
  },
  Text_10_222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_227: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("0%")
  },
  ImageBackground_10_224: {
    width: wp("13.974348958333332%"),
    minWidth: wp("13.974348958333332%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10_225: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_10_225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_226: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("11.885245901639351%"),
    justifyContent: "flex-start"
  },
  Text_10_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_236: {
    width: wp("19.32877197265625%"),
    minWidth: wp("19.32877197265625%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("0%")
  },
  ImageBackground_13_229: {
    width: wp("14.795437622070311%"),
    minWidth: wp("14.795437622070311%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333317%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_234: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_13_234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_235: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999986%"),
    top: hp("11.885245901639351%"),
    justifyContent: "flex-start"
  },
  Text_13_235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_237: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%"),
    top: hp("69.67213114754098%"),
    resizeMode: "cover"
  },
  View_6_227: {
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
  ImageBackground_I6_227_6_33: {
    flexGrow: 1,
    width: wp("58.4%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("-0.273224043715847%")
  },
  View_I6_227_6_38: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.5486378487342043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I6_227_6_39: {
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
  ImageBackground_I6_227_6_43: {
    width: wp("4.072633870442708%"),
    minWidth: wp("4.072633870442708%"),
    height: hp("1.4980295316769126%"),
    minHeight: hp("1.4980295316769126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%"),
    top: hp("0%")
  },
  ImageBackground_I6_227_6_47: {
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
  ImageBackground_I6_227_6_52: {
    flexGrow: 1,
    width: wp("7.580314127604167%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920939127604166%"),
    top: hp("2.34528421704235%")
  },
  View_6_228: {
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
  View_I6_228_6_55: {
    flexGrow: 1,
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_I6_228_6_55: {
    color: "rgba(255, 83, 13, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_228_6_56: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.266666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I6_228_6_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I6_228_6_60: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_I6_228_6_60: {
    color: "rgba(255, 83, 13, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
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
