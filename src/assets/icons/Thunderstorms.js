import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

function Thunderstorms(props) {
    return (
        <Svg width={160} height={160} {...props}>
            <Defs>
                <Path id="11d_svg__a" d="M.234.181h89.49v87.023H.234z" />
                <Path id="11d_svg__c" d="M0 .18h120.149v87.024H0z" />
            </Defs>
            <G fill="none" fillRule="evenodd">
                <G transform="translate(69 4.819)">
                    <Mask id="11d_svg__b" fill="#fff">
                        <Use xlinkHref="#11d_svg__a" />
                    </Mask>
                    <Path
                        d="M60.336 29.405C59.552 13.158 46.086.18 29.649.18 15.794.18 4.052 9.402.234 22.03a30.447 30.447 0 017.498 2.887C10.367 15.284 19.192 8.18 29.649 8.18c12.53 0 22.723 10.194 22.723 22.723a23.1 23.1 0 01-.14 2.5 4.002 4.002 0 004.714 4.363 21.128 21.128 0 013.876-.365c11.525 0 20.902 9.376 20.902 20.901 0 11.526-9.377 20.902-20.902 20.902h-7.676c0 .033.003.065.003.098 0 2.74-.392 5.388-1.107 7.902h8.78c15.937 0 28.902-12.965 28.902-28.902 0-16.098-13.262-29.173-29.388-28.897"
                        fill="#325577"
                        mask="url(#11d_svg__b)"
                    />
                </G>
                <G transform="translate(2 25.819)">
                    <Mask id="11d_svg__d" fill="#fff">
                        <Use xlinkHref="#11d_svg__c" />
                    </Mask>
                    <Path
                        d="M90.76 29.405C89.978 13.158 76.514.18 60.075.18c-16.438 0-29.902 12.978-30.686 29.225C13.236 29.153 0 42.205 0 58.302 0 74.24 12.966 87.204 28.902 87.204h6.535l3.742-8H28.902C17.376 79.204 8 69.828 8 58.302c0-11.525 9.376-20.9 20.902-20.9 1.279 0 2.584.122 3.877.364a4 4 0 004.712-4.364 23.35 23.35 0 01-.14-2.499c0-12.529 10.194-22.723 22.723-22.723 12.53 0 22.723 10.194 22.723 22.723a23.1 23.1 0 01-.14 2.5 4.005 4.005 0 001.259 3.366 3.996 3.996 0 003.454.997 21.139 21.139 0 013.877-.365c11.526 0 20.902 9.376 20.902 20.901 0 11.526-9.376 20.902-20.902 20.902H67.013l-1.461 3.018h5.17a4 4 0 013.618 2.295c.403.856.478 1.805.255 2.687h16.652c15.936 0 28.902-12.965 28.902-28.902 0-16.098-13.26-29.164-29.388-28.897"
                        fill="#6F89A9"
                        mask="url(#11d_svg__d)"
                    />
                </G>
                <Path
                    d="M44.877 115.997h6.031a4 4 0 013.78 5.31l-3.761 10.845 13.304-16.11h-3.058a4 4 0 01-3.601-5.742l8.77-18.124H56.02l-11.143 23.82zm-5.006 39.822a4 4 0 01-3.777-5.31l9.193-26.512H38.59a4.001 4.001 0 01-3.623-5.694L49.852 86.48a3.997 3.997 0 013.623-2.305h19.246c1.377 0 2.657.708 3.388 1.875a3.993 3.993 0 01.212 3.867l-8.769 18.124h5.169a4 4 0 013.085 6.547l-32.848 39.777a4.001 4.001 0 01-3.087 1.453z"
                    fill="#FFBE06"
                />
            </G>
        </Svg>
    )
}

export default Thunderstorms
