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
      <View style={styles.View_8_508}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I8_508_6_33}
        />
        <View style={styles.View_I8_508_6_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I8_508_6_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I8_508_6_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I8_508_6_47}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I8_508_6_52}
        />
      </View>
      <View style={styles.View_8_509}>
        <View style={styles.View_I8_509_6_55}>
          <Text style={styles.Text_I8_509_6_55}>Login</Text>
        </View>
        <View style={styles.View_I8_509_6_56}>
          <Text style={styles.Text_I8_509_6_56}>Sign Up</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e8b/eed6/c14962247ad3d31c59e5c71aa05e15a8"
          }}
          style={styles.ImageBackground_I8_509_6_57}
        />
      </View>
      <View style={styles.View_8_510}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2174/99c8/49e890478d77419c77714699a9d46aef"
          }}
          style={styles.ImageBackground_I8_510_8_366}
        />
        <View style={styles.View_I8_510_8_367}>
          <Text style={styles.Text_I8_510_8_367}>Name</Text>
        </View>
      </View>
      <View style={styles.View_8_511}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2174/99c8/49e890478d77419c77714699a9d46aef"
          }}
          style={styles.ImageBackground_I8_511_8_366}
        />
        <View style={styles.View_I8_511_8_367}>
          <Text style={styles.Text_I8_511_8_367}>Email</Text>
        </View>
      </View>
      <View style={styles.View_8_512}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2174/99c8/49e890478d77419c77714699a9d46aef"
          }}
          style={styles.ImageBackground_I8_512_8_366}
        />
        <View style={styles.View_I8_512_8_367}>
          <Text style={styles.Text_I8_512_8_367}>Password</Text>
        </View>
        <View style={styles.View_I8_512_8_368}>
          <Text style={styles.Text_I8_512_8_368}>Show</Text>
        </View>
      </View>
      <View style={styles.View_8_513}>
        <View style={styles.View_I8_513_8_370}>
          <View style={styles.View_I8_513_8_370_8_373} />
        </View>
        <View style={styles.View_I8_513_8_371}>
          <Text style={styles.Text_I8_513_8_371}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
      </View>
      <View style={styles.View_8_514}>
        <View style={styles.View_I8_514_8_378}>
          <View style={styles.View_I8_514_8_379} />
        </View>
        <View style={styles.View_I8_514_8_380}>
          <View style={styles.View_I8_514_8_381} />
        </View>
        <View style={styles.View_I8_514_8_382}>
          <View style={styles.View_I8_514_8_383}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
              }}
              style={styles.ImageBackground_I8_514_8_384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
              }}
              style={styles.ImageBackground_I8_514_8_390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
              }}
              style={styles.ImageBackground_I8_514_8_391}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
            }}
            style={styles.ImageBackground_I8_514_8_392}
          />
          <View style={styles.View_I8_514_8_399}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/bf8d/925017302edca47807f877089a17458f"
              }}
              style={styles.ImageBackground_I8_514_8_400}
            />
            <View style={styles.View_I8_514_8_401}>
              <Text style={styles.Text_I8_514_8_401}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_402}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb1e/fafc/38bd3f8bc8fcd8744e55cb82fb70b08c"
              }}
              style={styles.ImageBackground_I8_514_8_403}
            />
            <View style={styles.View_I8_514_8_404}>
              <Text style={styles.Text_I8_514_8_404}>space</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_405}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdd/463d/0100a1c79169024aefd5598942a33048"
              }}
              style={styles.ImageBackground_I8_514_8_406}
            />
            <View style={styles.View_I8_514_8_407}>
              <Text style={styles.Text_I8_514_8_407}>123</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_408}>
            <View style={styles.View_I8_514_8_409}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/c976/95b76f9efb93520a356a6e2c5c3a165f"
                }}
                style={styles.ImageBackground_I8_514_8_410}
              />
              <View style={styles.View_I8_514_8_411}>
                <Text style={styles.Text_I8_514_8_411}> </Text>
              </View>
            </View>
            <View style={styles.View_I8_514_8_412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                }}
                style={styles.ImageBackground_I8_514_8_413}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                }}
                style={styles.ImageBackground_I8_514_8_416}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I8_514_8_417}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I8_514_8_418}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I8_514_8_419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I8_514_8_420}
              />
            </View>
          </View>
          <View style={styles.View_I8_514_8_421}>
            <View style={styles.View_I8_514_8_422}>
              <View style={styles.View_I8_514_8_423} />
              <View style={styles.View_I8_514_8_424}>
                <Text style={styles.Text_I8_514_8_424}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38db/3040/83282692e8b1d666d7858bbe0d4e3edc"
              }}
              style={styles.ImageBackground_I8_514_8_425}
            />
          </View>
          <View style={styles.View_I8_514_8_426}>
            <View style={styles.View_I8_514_8_427} />
            <View style={styles.View_I8_514_8_428}>
              <Text style={styles.Text_I8_514_8_428}>M</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_429}>
            <View style={styles.View_I8_514_8_430} />
            <View style={styles.View_I8_514_8_431}>
              <Text style={styles.Text_I8_514_8_431}>N</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_432}>
            <View style={styles.View_I8_514_8_433} />
            <View style={styles.View_I8_514_8_434}>
              <Text style={styles.Text_I8_514_8_434}>B</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_435}>
            <View style={styles.View_I8_514_8_436} />
            <View style={styles.View_I8_514_8_437}>
              <Text style={styles.Text_I8_514_8_437}>V</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_438}>
            <View style={styles.View_I8_514_8_439} />
            <View style={styles.View_I8_514_8_440}>
              <Text style={styles.Text_I8_514_8_440}>C</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_441}>
            <View style={styles.View_I8_514_8_442} />
            <View style={styles.View_I8_514_8_443}>
              <Text style={styles.Text_I8_514_8_443}>X</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_444}>
            <View style={styles.View_I8_514_8_445} />
            <View style={styles.View_I8_514_8_446}>
              <Text style={styles.Text_I8_514_8_446}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_447}>
            <View style={styles.View_I8_514_8_448} />
            <View style={styles.View_I8_514_8_449}>
              <Text style={styles.Text_I8_514_8_449}>L</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_450}>
            <View style={styles.View_I8_514_8_451} />
            <View style={styles.View_I8_514_8_452}>
              <Text style={styles.Text_I8_514_8_452}>K</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_453}>
            <View style={styles.View_I8_514_8_454} />
            <View style={styles.View_I8_514_8_455}>
              <Text style={styles.Text_I8_514_8_455}>J</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_456}>
            <View style={styles.View_I8_514_8_457} />
            <View style={styles.View_I8_514_8_458}>
              <Text style={styles.Text_I8_514_8_458}>H</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_459}>
            <View style={styles.View_I8_514_8_460} />
            <View style={styles.View_I8_514_8_461}>
              <Text style={styles.Text_I8_514_8_461}>G</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_462}>
            <View style={styles.View_I8_514_8_463} />
            <View style={styles.View_I8_514_8_464}>
              <Text style={styles.Text_I8_514_8_464}>F</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_465}>
            <View style={styles.View_I8_514_8_466} />
            <View style={styles.View_I8_514_8_467}>
              <Text style={styles.Text_I8_514_8_467}>D</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_468}>
            <View style={styles.View_I8_514_8_469} />
            <View style={styles.View_I8_514_8_470}>
              <Text style={styles.Text_I8_514_8_470}>S</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_471}>
            <View style={styles.View_I8_514_8_472} />
            <View style={styles.View_I8_514_8_473}>
              <Text style={styles.Text_I8_514_8_473}>A</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_474}>
            <View style={styles.View_I8_514_8_475} />
            <View style={styles.View_I8_514_8_476}>
              <Text style={styles.Text_I8_514_8_476}>P</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_477}>
            <View style={styles.View_I8_514_8_478} />
            <View style={styles.View_I8_514_8_479}>
              <Text style={styles.Text_I8_514_8_479}>O</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_480}>
            <View style={styles.View_I8_514_8_481} />
            <View style={styles.View_I8_514_8_482}>
              <Text style={styles.Text_I8_514_8_482}>I</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_483}>
            <View style={styles.View_I8_514_8_484} />
            <View style={styles.View_I8_514_8_485}>
              <Text style={styles.Text_I8_514_8_485}>U</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_486}>
            <View style={styles.View_I8_514_8_487} />
            <View style={styles.View_I8_514_8_488}>
              <Text style={styles.Text_I8_514_8_488}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_489}>
            <View style={styles.View_I8_514_8_490} />
            <View style={styles.View_I8_514_8_491}>
              <Text style={styles.Text_I8_514_8_491}>T</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_492}>
            <View style={styles.View_I8_514_8_493} />
            <View style={styles.View_I8_514_8_494}>
              <Text style={styles.Text_I8_514_8_494}>R</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_495}>
            <View style={styles.View_I8_514_8_496} />
            <View style={styles.View_I8_514_8_497}>
              <Text style={styles.Text_I8_514_8_497}>E</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_498}>
            <View style={styles.View_I8_514_8_499} />
            <View style={styles.View_I8_514_8_500}>
              <Text style={styles.Text_I8_514_8_500}>W</Text>
            </View>
          </View>
          <View style={styles.View_I8_514_8_501}>
            <View style={styles.View_I8_514_8_502} />
            <View style={styles.View_I8_514_8_503}>
              <Text style={styles.Text_I8_514_8_503}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_8_515}>
        <View style={styles.View_I8_515_8_505}>
          <Text style={styles.Text_I8_515_8_505}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_8_516}>
        <Text style={styles.Text_8_516}>Forgot your password?</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_8_508: {
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
  ImageBackground_I8_508_6_33: {
    flexGrow: 1,
    width: wp("58.4%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("-0.273224043715847%")
  },
  View_I8_508_6_38: {
    flexGrow: 1,
    width: wp("17.7763671875%"),
    height: hp("1.5486378487342043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_I8_508_6_39: {
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
  ImageBackground_I8_508_6_43: {
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
  ImageBackground_I8_508_6_47: {
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
  ImageBackground_I8_508_6_52: {
    flexGrow: 1,
    width: wp("7.580305989583333%"),
    height: hp("1.5148725665983607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.920930989583335%"),
    top: hp("2.34528421704235%")
  },
  View_8_509: {
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
  View_I8_509_6_55: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1.0928961748633892%"),
    justifyContent: "flex-start"
  },
  Text_I8_509_6_55: {
    color: "rgba(255, 83, 13, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_509_6_56: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.200000000000003%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_509_6_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I8_509_6_57: {
    flexGrow: 1,
    width: wp("6.033984374999999%"),
    height: hp("3.091180519979508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.08365885416666607%"),
    top: hp("0.6402020897370235%")
  },
  View_8_510: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_510_8_366: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_510_8_367: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I8_510_8_367: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_511: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_511_8_366: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_511_8_367: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267713%"),
    justifyContent: "flex-start"
  },
  Text_I8_511_8_367: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_512: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_512_8_366: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_512_8_367: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I8_512_8_367: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_512_8_368: {
    flexGrow: 1,
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333333%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I8_512_8_368: {
    color: "rgba(255, 83, 13, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_513: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.72131147540984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_513_8_370: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092895705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_513_8_370_8_373: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1
  },
  View_I8_513_8_371: {
    flexGrow: 1,
    width: wp("85.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_513_8_371: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_514: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I8_514_8_378: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_379: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I8_514_8_380: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_381: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_382: {
    flexGrow: 1,
    width: wp("98.4%"),
    height: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_I8_514_8_383: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("31.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  ImageBackground_I8_514_8_384: {
    width: wp("4%"),
    height: hp("2.0038521354967127%"),
    top: hp("1.4114484109513796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_514_8_390: {
    width: wp("2.4019694010416663%"),
    height: hp("2.4584535692558913%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999837239583343%")
  },
  ImageBackground_I8_514_8_391: {
    width: wp("1.5129231770833333%"),
    height: hp("2.0038521354967127%"),
    top: hp("0.22780830091467408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2443033854166714%")
  },
  ImageBackground_I8_514_8_392: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    top: hp("31.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%")
  },
  View_I8_514_8_399: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_514_8_400: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_514_8_401: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_401: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I8_514_8_402: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_514_8_403: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_514_8_404: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I8_514_8_405: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_514_8_406: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_514_8_407: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_407: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I8_514_8_408: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_I8_514_8_409: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_514_8_410: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I8_514_8_411: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_411: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I8_514_8_412: {
    width: wp("6.042659505208333%"),
    height: hp("2.321610164121201%"),
    top: hp("1.7295086970094786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5760091145833286%")
  },
  ImageBackground_I8_514_8_413: {
    width: wp("6.042659505208333%"),
    height: hp("2.321610164121201%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_514_8_416: {
    width: wp("1.7841796875%"),
    height: hp("0.9131676512337773%"),
    top: hp("0.7033613861584342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.761311848958343%")
  },
  ImageBackground_I8_514_8_417: {
    width: wp("0.3006998697916667%"),
    height: hp("0.15417630555199796%"),
    top: hp("0.6797998980746343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287060546874997%")
  },
  ImageBackground_I8_514_8_418: {
    width: wp("0.3021158854166667%"),
    height: hp("0.15477873588520322%"),
    top: hp("1.4832501854401414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.717301432291663%")
  },
  ImageBackground_I8_514_8_419: {
    width: wp("0.30096028645833334%"),
    height: hp("0.15404914897647712%"),
    top: hp("1.4841340278667303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2896972656250085%")
  },
  ImageBackground_I8_514_8_420: {
    width: wp("0.3021321614583333%"),
    height: hp("0.15477456681715335%"),
    top: hp("0.6799562381265076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.720198567708337%")
  },
  View_I8_514_8_421: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_514_8_422: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_423: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_424: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.383333333333333%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I8_514_8_425: {
    width: wp("5.03466796875%"),
    height: hp("2.2481240861402836%"),
    top: hp("1.6666662497598708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.109326171875%")
  },
  View_I8_514_8_426: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_427: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_428: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_428: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_429: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_430: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_431: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_432: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_433: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_434: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_435: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_436: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_437: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_437: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_438: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_439: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_440: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_440: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_441: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_442: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_443: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_443: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_444: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_445: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_446: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_446: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_447: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_448: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_449: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_449: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_450: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_451: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_452: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_453: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_454: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_455: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_455: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_456: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_457: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_458: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_458: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_459: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_460: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_461: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_462: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_463: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_464: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_464: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_465: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_466: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_467: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_467: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_468: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_469: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_470: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_471: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_472: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_473: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_473: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_474: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_475: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_476: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_476: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_477: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_478: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_479: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_480: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_481: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_482: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_482: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_483: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_484: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_485: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_485: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_486: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_487: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_488: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_489: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_490: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_491: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_492: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_493: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_494: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_495: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_496: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_497: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_497: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_498: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_499: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_500: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_500: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I8_514_8_501: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_514_8_502: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I8_514_8_503: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_I8_514_8_503: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_8_515: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.240437158469945%"),
    backgroundColor: "rgba(255, 83, 13, 1)"
  },
  View_I8_515_8_505: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_I8_515_8_505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_516: {
    width: wp("47.46666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("66.39344262295081%"),
    justifyContent: "flex-start"
  },
  Text_8_516: {
    color: "rgba(255, 83, 13, 1)",
    fontSize: 13,
    fontWeight: "400",
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
