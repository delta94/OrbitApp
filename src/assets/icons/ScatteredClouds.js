import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgScatteredClouds(props) {
    return (
        <Svg width={160} height={160} {...props}>
            <Path
                d="M48.901 73.221C37.376 73.221 28 82.597 28 94.122s9.376 20.902 20.901 20.902h62.346c11.524 0 20.901-9.377 20.901-20.902s-9.377-20.901-20.901-20.901c-1.28 0-2.584.123-3.877.365a3.997 3.997 0 01-3.454-.997 3.994 3.994 0 01-1.259-3.368c.093-.85.14-1.69.14-2.498C102.797 54.194 92.603 44 80.074 44c-12.529 0-22.723 10.194-22.723 22.723 0 .809.047 1.649.14 2.496a4 4 0 01-4.713 4.367 21.139 21.139 0 00-3.877-.365m62.346 49.803H48.901C32.964 123.024 20 110.058 20 94.122c0-16.097 13.24-29.188 29.387-28.897C50.172 48.978 63.635 36 80.074 36c16.437 0 29.902 12.978 30.686 29.225 16.169-.305 29.388 12.8 29.388 28.897 0 15.936-12.966 28.902-28.901 28.902"
                fill="#6F89A9"
                fillRule="evenodd"
            />
        </Svg>
    )
}

export default SvgScatteredClouds
