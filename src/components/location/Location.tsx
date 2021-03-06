import React from "react"
import { StyleSheet, View, ViewStyle, Text } from "react-native"

import Locale from "../locale/Locale"
import Weather from "../weather"
import { Row, Column } from "../../primitives"
// import BottomDrawer from "../bottomDrawer"

interface LocationProps {
    currentWeather: any
    hourlyWeather: any
    locationName: string
    nightTheme: boolean
    timezone: string
    timezoneOffset: number
}

const Location = (props: LocationProps) => {
    return (
        <>
            {!props.currentWeather ? null : (
                <Column style={styles.colStyle}>
                    <Locale
                        nightTheme={props.nightTheme}
                        locationName={props.locationName}
                        timezone={props.timezone}
                    />
                    <Weather
                        currentWeather={props.currentWeather}
                        hourlyWeather={props.hourlyWeather}
                        timezoneOffset={props.timezoneOffset}
                    />
                </Column>
            )}
        </>
    )
}

interface Styles {
    colStyle: ViewStyle
    locationDisplay: ViewStyle
}

const styles: any = StyleSheet.create<Styles>({
    colStyle: {
        flexGrow: 1,
        alignItems: "center",
    },
    locationDisplay: {
        display: "flex",
        color: "#fff",
        width: "100%",
    },
})

export default Location
