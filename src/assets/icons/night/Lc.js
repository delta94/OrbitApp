import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgLc(props: any) {
    return (
        <Svg width={17} height={17} {...props}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M90.592 75.557c0 43.878 35.627 79.448 79.574 79.448 5.775 0 11.406-.614 16.831-1.78C172.647 172.506 149.66 185 123.75 185 80.258 185 45 149.798 45 106.375c0-36.961 25.544-67.966 59.968-76.376-9.06 12.899-14.376 28.608-14.376 45.558z"
                    fill="#000"
                    fillOpacity={0.6}
                />
                <Path
                    d="M127.752 49.794c-.432-.616-.99-1.528-2.68-3.894.034.035-8.09-10.403-8.09-10.403-1-1.284-.747-1.498.554-.486l10.364 8.06c2.324 1.66 3.26 2.244 3.884 2.681.616-.432 1.528-.99 3.894-2.68-.035.034 10.402-8.09 10.402-8.09 1.285-1 1.499-.747.487.554l-8.06 10.364c-1.66 2.324-2.244 3.26-2.682 3.884.432.616.991 1.528 2.681 3.894-.035-.035 8.09 10.402 8.09 10.402 1 1.285.747 1.499-.554.487l-10.364-8.06c-2.324-1.66-3.26-2.244-3.884-2.682-.616.432-1.528.991-3.894 2.681.035-.035-10.403 8.09-10.403 8.09-1.284 1-1.498.747-.486-.554l8.06-10.364c1.66-2.324 2.244-3.26 2.681-3.884zM182.028 103.007c.016.016-3.7-4.759-3.7-4.759-.462-.592-.348-.693.248-.23l4.748 3.693c1.065.76 1.493 1.028 1.78 1.229.282-.198.7-.455 1.783-1.229-.016.016 4.76-3.7 4.76-3.7.591-.461.693-.348.23.248l-3.694 4.748c-.76 1.065-1.028 1.493-1.228 1.78.198.282.454.7 1.228 1.784-.016-.017 3.701 4.759 3.701 4.759.46.592.347.693-.249.23l-4.748-3.694c-1.064-.76-1.493-1.027-1.78-1.228-.281.198-.7.454-1.783 1.228.016-.016-4.76 3.701-4.76 3.701-.591.461-.692.348-.229-.248l3.693-4.748c.76-1.065 1.028-1.494 1.228-1.78-.198-.282-.454-.7-1.228-1.784zM65.567 171H37.6c-8.616 0-15.6-6.764-15.6-15.108 0-8.344 6.984-15.108 15.6-15.108 2.6 0 5.051.616 7.207 1.705C47.809 134.057 56.074 128 65.8 128c12.26 0 22.2 9.626 22.2 21.5 0 .243-.004.486-.012.727C91.567 152.09 94 155.75 94 159.96 94 166.057 88.896 171 82.6 171H65.8a23.42 23.42 0 01-.035 0h-.198.233-.233zM79.567 98H51.6C42.984 98 36 91.236 36 82.892c0-8.344 6.984-15.108 15.6-15.108 2.6 0 5.051.616 7.207 1.705C61.809 61.057 70.074 55 79.8 55c12.26 0 22.2 9.626 22.2 21.5 0 .243-.004.486-.012.727C105.567 79.09 108 82.75 108 86.96 108 93.057 102.896 98 96.6 98H79.8a23.42 23.42 0 01-.035 0h-.198.233-.233z"
                    fill="#FFF"
                />
            </G>
        </Svg>
    );
}

export default SvgLc;
