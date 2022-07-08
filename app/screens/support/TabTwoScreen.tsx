import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, Text, View, Pressable, SafeAreaView } from "react-native";
import tw from "twrnc";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View style={tw`flex bg-slate-900`}>
        <View style={tw`flex-none w-40 h-14 bg-slate-900`}>
          <Image
            style={tw`w-40 h-14`}
            source={require("../../../assets/jlr-logo.png")}
          />
        </View>
      </View>
      <View style={tw`mt-2 p-2`}>
        <Text style={tw`text-xl font-bold`}>Contact Technician</Text>
      </View>
      {/* <View style={tw`bg-slate-400 h-px mt-4`}></View> */}
      <View style={tw`mt-2 p-2`}>
        <View style={tw`bg-gray-200 p-2`}>
          <Text style={tw`text-lg font-semibold`}>Nearest Technician</Text>
          <Image
            style={tw`w-full h-40`}
            source={require("../../../assets/technician_map.png")}
          />
          <Text style={tw`text-lg font-semibold`}>
            Jaguar Land Rover Service Center
          </Text>
          <Text style={tw`text-lg font-semibold`}>
            Shannon, 10.5 km, 10 mins
          </Text>
          <Text style={tw`text-lg font-semibold`}>0035387954154</Text>
          <Pressable style={tw`bg-slate-900 my-2 p-3 text-center`}>
            <Text style={tw`text-gray-50 text-base font-semibold`}>Call</Text>
          </Pressable>
          <Pressable style={tw`bg-slate-900 my-2 p-3 text-center`}>
            <Text style={tw`text-gray-50 text-base font-semibold`}>
              Book Service
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={tw`mt-2 p-2`}>
        <View style={tw`bg-gray-200 p-2`}>
          <Text style={tw`text-lg font-semibold`}>Other Options</Text>
          <View style={tw`bg-slate-400 h-px mt-4`}></View>
          <Text style={tw`text-lg font-semibold`}>
            Jaguar Land Rover Service Center
          </Text>
          <Text style={tw`text-lg font-semibold`}>
            Shannon, 10.5 km, 10 mins
          </Text>
          <Text style={tw`text-lg font-semibold`}>0035387954154</Text>
          <View style={tw`bg-slate-400 h-px mt-4`}></View>
          <Text style={tw`text-lg font-semibold`}>
            Jaguar Land Rover Service Center
          </Text>
          <Text style={tw`text-lg font-semibold`}>
            Shannon, 10.5 km, 10 mins
          </Text>
          <Text style={tw`text-lg font-semibold`}>0035387954154</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
