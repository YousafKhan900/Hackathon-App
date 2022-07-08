import { Image, Text, View, Pressable, SafeAreaView } from "react-native";
import tw from "twrnc";

export default function TabOneScreen() {
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
        <Text style={tw`text-xl font-bold`}>Vehicle Support</Text>
      </View>
      {/* <View style={tw`bg-slate-400 h-px mt-4`}></View> */}
      <View style={tw`mt-2 p-2`}>
        <View style={tw`bg-gray-200 p-2`}>
          <Text style={tw`text-lg font-semibold`}>Service History</Text>
          <Pressable style={tw`bg-slate-900 my-2 p-3 text-center`}>
            <Text style={tw`text-gray-50 text-base font-semibold`}>
              View Service History
            </Text>
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
          <Text style={tw`text-lg font-semibold`}>Diagnostics</Text>
          <Pressable style={tw`bg-slate-900 my-2 p-3 text-center`}>
            <Text style={tw`text-gray-50 text-base font-semibold`}>
              View Vehicle Diagnostics
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={tw`mt-2 p-2`}>
        <View style={tw`bg-gray-200 p-2`}>
          <Text style={tw`text-lg font-semibold`}>Contact Technician</Text>
          <Pressable style={tw`bg-slate-900 my-2 p-3 text-center`}>
            <Text style={tw`text-gray-50 text-base font-semibold`}>
              Contact Technician
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
