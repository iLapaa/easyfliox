import { View } from "react-native";
import { Input } from "@/components/ui/input";
import React from "react";
import { Label } from "@/components/ui/label";

export default function Index() {
  const [value, setValue] = React.useState("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Label nativeID="name">Name</Label>
      <Input
        className={"border border-gray-300 p-2 w-full rounded-md"}
        placeholder="Write some stuff..."
        value={value}
        onChangeText={onChangeText}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
    </View>
  );
}
