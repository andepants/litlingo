import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TextStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { spacing } from "../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SettingsScreenProps extends AppStackScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = observer(function SettingsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="scroll">
      <View style={$root}>
        <Text style={$title} text="settings" />
        <Text text="This is the beginning of litLingo" />
      </View>
    </Screen>
  )
  })

  const $root: ViewStyle = {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.xxl,
  }

  const $title: TextStyle = {
    marginBottom: spacing.sm,
    fontSize: 20,
  }
