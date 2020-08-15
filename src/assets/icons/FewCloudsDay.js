import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function FewCloudsDay(props) {
    return (
        <Svg width={160} height={160} {...props}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M22.15 72H16a4 4 0 010-8h6.15a4 4 0 010 8M56 38.15a4 4 0 01-4-4V28a4 4 0 018 0v6.15a4 4 0 01-4 4M32.064 48.064a3.991 3.991 0 01-2.828-1.17l-4.35-4.35a4.002 4.002 0 010-5.658 4.002 4.002 0 015.657 0l4.35 4.35a4.002 4.002 0 01-2.829 6.828M79.935 48.064a4 4 0 01-2.829-6.828l4.35-4.349a4 4 0 115.656 5.656l-4.349 4.35a3.988 3.988 0 01-2.828 1.171M38.323 85.806a28.951 28.951 0 016.859-4.558c-3.841-3.14-6.298-7.911-6.298-13.248 0-9.438 7.677-17.117 17.116-17.117 5.076 0 9.635 2.229 12.77 5.75a30.806 30.806 0 016.748-4.393C70.91 46.543 63.88 42.883 56 42.883 42.15 42.883 30.884 54.15 30.884 68c0 6.958 2.85 13.254 7.439 17.806"
                    fill="#FFBE06"
                />
                <Path
                    d="M57.55 86.47c-11.526 0-20.902 9.376-20.902 20.9 0 11.526 9.376 20.903 20.901 20.903h62.346c11.524 0 20.901-9.377 20.901-20.902s-9.377-20.901-20.9-20.901c-1.28 0-2.585.123-3.878.365a3.997 3.997 0 01-3.454-.997 3.994 3.994 0 01-1.259-3.368c.093-.85.14-1.69.14-2.498 0-12.53-10.194-22.723-22.723-22.723C76.193 57.249 66 67.443 66 79.972c0 .809.047 1.649.14 2.496a4 4 0 01-4.713 4.367 21.139 21.139 0 00-3.877-.365m62.346 49.803H57.55c-15.937 0-28.9-12.966-28.9-28.902 0-16.097 13.24-29.188 29.386-28.897.785-16.247 14.248-29.225 30.687-29.225 16.437 0 29.902 12.978 30.686 29.225 16.17-.305 29.388 12.8 29.388 28.897 0 15.936-12.966 28.902-28.9 28.902"
                    fill="#6F89A9"
                />
            </G>
        </Svg>
    )
}

export default FewCloudsDay