import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClearSkyDay(props) {
    return (
        <Svg width={160} height={160} {...props}>
            <Path
                d="M80.088 119.078a4 4 0 014 4v13.098a4 4 0 01-8 0v-13.098a4 4 0 014-4zm-27.57-11.42a4 4 0 010 5.657l-9.262 9.262a3.991 3.991 0 01-2.828 1.17 4.002 4.002 0 01-2.829-6.829l9.262-9.26a4 4 0 015.657 0zm60.796 0l9.262 9.26a4 4 0 11-5.657 5.659l-9.262-9.262a4 4 0 015.657-5.657zm-33.226-61.18c18.532 0 33.61 15.077 33.61 33.61 0 18.532-15.078 33.609-33.61 33.609S46.48 98.62 46.48 80.087c0-18.532 15.077-33.61 33.61-33.61zm0 8c-14.12 0-25.609 11.489-25.609 25.61 0 14.12 11.488 25.609 25.61 25.609 14.12 0 25.608-11.488 25.608-25.61 0-14.12-11.488-25.61-25.609-25.61zm-42.99 21.61a4 4 0 010 8H24a4 4 0 010-8h13.098zm99.078 0a4 4 0 010 8h-13.099a4 4 0 010-8h13.1zm-13.6-38.489a4 4 0 010 5.657l-9.261 9.262a3.991 3.991 0 01-2.828 1.171 4.002 4.002 0 01-2.829-6.829l9.262-9.26a4 4 0 015.657 0zm-79.32 0l9.262 9.261a4 4 0 11-5.657 5.658l-9.262-9.262a4 4 0 015.657-5.657zM80.088 20a4 4 0 014 4v13.098a4 4 0 01-8 0V24a4 4 0 014-4z"
                fill="#FFBE06"
                fillRule="evenodd"
            />
        </Svg>
    )
}

export default ClearSkyDay