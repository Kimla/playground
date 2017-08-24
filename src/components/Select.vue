<template>
    <div class="select">
        <div class="select__inner">
            <input class="select__input" type="text" ref="input" @focus="open()" @keydown.enter="choseFirstItem()" :placeholder="defaultText" v-model="search">
            <span class="select__icon">
                <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path fill="#333" d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"/><path d="M0-.75h48v48H0z" fill="none"/></svg>
            </span>
        </div>
        <transition name="transform" mode="out-in">
            <div class="select__list-holder" v-if="isActive">
                <span class="select-list-arrow"></span>
                <ul class="select__list">
                    <li class="select-list-item" v-for="item in filteredItems" :key="item.code" @click="selectItem(item)">{{ item.name }}</li>
                    <li class="select-list-item no-results" v-if="filteredItems.length < 1">No results, try again!</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultText: "Choose country",
            items: [
                {name: 'Afghanistan', code: 'AF'},
                {name: 'Åland Islands', code: 'AX'},
                {name: 'Albania', code: 'AL'},
                {name: 'Algeria', code: 'DZ'},
                {name: 'American Samoa', code: 'AS'},
                {name: 'Andorra', code: 'AD'},
                {name: 'Angola', code: 'AO'},
                {name: 'Anguilla', code: 'AI'},
                {name: 'Antarctica', code: 'AQ'},
                {name: 'Antigua and Barbuda', code: 'AG'},
                {name: 'Argentina', code: 'AR'},
                {name: 'Armenia', code: 'AM'},
                {name: 'Aruba', code: 'AW'},
                {name: 'Australia', code: 'AU'},
                {name: 'Austria', code: 'AT'},
                {name: 'Azerbaijan', code: 'AZ'},
                {name: 'Bahamas', code: 'BS'},
                {name: 'Bahrain', code: 'BH'},
                {name: 'Bangladesh', code: 'BD'},
                {name: 'Barbados', code: 'BB'},
                {name: 'Belarus', code: 'BY'},
                {name: 'Belgium', code: 'BE'},
                {name: 'Belize', code: 'BZ'},
                {name: 'Benin', code: 'BJ'},
                {name: 'Bermuda', code: 'BM'},
                {name: 'Bhutan', code: 'BT'},
                {name: 'Bolivia', code: 'BO'},
                {name: 'Bosnia and Herzegovina', code: 'BA'},
                {name: 'Botswana', code: 'BW'},
                {name: 'Bouvet Island', code: 'BV'},
                {name: 'Brazil', code: 'BR'},
                {name: 'British Indian Ocean Territory', code: 'IO'},
                {name: 'Brunei Darussalam', code: 'BN'},
                {name: 'Bulgaria', code: 'BG'},
                {name: 'Burkina Faso', code: 'BF'},
                {name: 'Burundi', code: 'BI'},
                {name: 'Cambodia', code: 'KH'},
                {name: 'Cameroon', code: 'CM'},
                {name: 'Canada', code: 'CA'},
                {name: 'Cape Verde', code: 'CV'},
                {name: 'Cayman Islands', code: 'KY'},
                {name: 'Central African Republic', code: 'CF'},
                {name: 'Chad', code: 'TD'},
                {name: 'Chile', code: 'CL'},
                {name: 'China', code: 'CN'},
                {name: 'Christmas Island', code: 'CX'},
                {name: 'Cocos (Keeling) Islands', code: 'CC'},
                {name: 'Colombia', code: 'CO'},
                {name: 'Comoros', code: 'KM'},
                {name: 'Congo', code: 'CG'},
                {name: 'Congo, The Democratic Republic of the', code: 'CD'},
                {name: 'Cook Islands', code: 'CK'},
                {name: 'Costa Rica', code: 'CR'},
                {name: 'Cote D\'Ivoire', code: 'CI'},
                {name: 'Croatia', code: 'HR'},
                {name: 'Cuba', code: 'CU'},
                {name: 'Cyprus', code: 'CY'},
                {name: 'Czech Republic', code: 'CZ'},
                {name: 'Denmark', code: 'DK'},
                {name: 'Djibouti', code: 'DJ'},
                {name: 'Dominica', code: 'DM'},
                {name: 'Dominican Republic', code: 'DO'},
                {name: 'Ecuador', code: 'EC'},
                {name: 'Egypt', code: 'EG'},
                {name: 'El Salvador', code: 'SV'},
                {name: 'Equatorial Guinea', code: 'GQ'},
                {name: 'Eritrea', code: 'ER'},
                {name: 'Estonia', code: 'EE'},
                {name: 'Ethiopia', code: 'ET'},
                {name: 'Falkland Islands (Malvinas)', code: 'FK'},
                {name: 'Faroe Islands', code: 'FO'},
                {name: 'Fiji', code: 'FJ'},
                {name: 'Finland', code: 'FI'},
                {name: 'France', code: 'FR'},
                {name: 'French Guiana', code: 'GF'},
                {name: 'French Polynesia', code: 'PF'},
                {name: 'French Southern Territories', code: 'TF'},
                {name: 'Gabon', code: 'GA'},
                {name: 'Gambia', code: 'GM'},
                {name: 'Georgia', code: 'GE'},
                {name: 'Germany', code: 'DE'},
                {name: 'Ghana', code: 'GH'},
                {name: 'Gibraltar', code: 'GI'},
                {name: 'Greece', code: 'GR'},
                {name: 'Greenland', code: 'GL'},
                {name: 'Grenada', code: 'GD'},
                {name: 'Guadeloupe', code: 'GP'},
                {name: 'Guam', code: 'GU'},
                {name: 'Guatemala', code: 'GT'},
                {name: 'Guernsey', code: 'GG'},
                {name: 'Guinea', code: 'GN'},
                {name: 'Guinea-Bissau', code: 'GW'},
                {name: 'Guyana', code: 'GY'},
                {name: 'Haiti', code: 'HT'},
                {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
                {name: 'Holy See (Vatican City State)', code: 'VA'},
                {name: 'Honduras', code: 'HN'},
                {name: 'Hong Kong', code: 'HK'},
                {name: 'Hungary', code: 'HU'},
                {name: 'Iceland', code: 'IS'},
                {name: 'India', code: 'IN'},
                {name: 'Indonesia', code: 'ID'},
                {name: 'Iran, Islamic Republic Of', code: 'IR'},
                {name: 'Iraq', code: 'IQ'},
                {name: 'Ireland', code: 'IE'},
                {name: 'Isle of Man', code: 'IM'},
                {name: 'Israel', code: 'IL'},
                {name: 'Italy', code: 'IT'},
                {name: 'Jamaica', code: 'JM'},
                {name: 'Japan', code: 'JP'},
                {name: 'Jersey', code: 'JE'},
                {name: 'Jordan', code: 'JO'},
                {name: 'Kazakhstan', code: 'KZ'},
                {name: 'Kenya', code: 'KE'},
                {name: 'Kiribati', code: 'KI'},
                {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
                {name: 'Korea, Republic of', code: 'KR'},
                {name: 'Kuwait', code: 'KW'},
                {name: 'Kyrgyzstan', code: 'KG'},
                {name: 'Lao People\'S Democratic Republic', code: 'LA'},
                {name: 'Latvia', code: 'LV'},
                {name: 'Lebanon', code: 'LB'},
                {name: 'Lesotho', code: 'LS'},
                {name: 'Liberia', code: 'LR'},
                {name: 'Libyan Arab Jamahiriya', code: 'LY'},
                {name: 'Liechtenstein', code: 'LI'},
                {name: 'Lithuania', code: 'LT'},
                {name: 'Luxembourg', code: 'LU'},
                {name: 'Macao', code: 'MO'},
                {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
                {name: 'Madagascar', code: 'MG'},
                {name: 'Malawi', code: 'MW'},
                {name: 'Malaysia', code: 'MY'},
                {name: 'Maldives', code: 'MV'},
                {name: 'Mali', code: 'ML'},
                {name: 'Malta', code: 'MT'},
                {name: 'Marshall Islands', code: 'MH'},
                {name: 'Martinique', code: 'MQ'},
                {name: 'Mauritania', code: 'MR'},
                {name: 'Mauritius', code: 'MU'},
                {name: 'Mayotte', code: 'YT'},
                {name: 'Mexico', code: 'MX'},
                {name: 'Micronesia, Federated States of', code: 'FM'},
                {name: 'Moldova, Republic of', code: 'MD'},
                {name: 'Monaco', code: 'MC'},
                {name: 'Mongolia', code: 'MN'},
                {name: 'Montserrat', code: 'MS'},
                {name: 'Morocco', code: 'MA'},
                {name: 'Mozambique', code: 'MZ'},
                {name: 'Myanmar', code: 'MM'},
                {name: 'Namibia', code: 'NA'},
                {name: 'Nauru', code: 'NR'},
                {name: 'Nepal', code: 'NP'},
                {name: 'Netherlands', code: 'NL'},
                {name: 'Netherlands Antilles', code: 'AN'},
                {name: 'New Caledonia', code: 'NC'},
                {name: 'New Zealand', code: 'NZ'},
                {name: 'Nicaragua', code: 'NI'},
                {name: 'Niger', code: 'NE'},
                {name: 'Nigeria', code: 'NG'},
                {name: 'Niue', code: 'NU'},
                {name: 'Norfolk Island', code: 'NF'},
                {name: 'Northern Mariana Islands', code: 'MP'},
                {name: 'Norway', code: 'NO'},
                {name: 'Oman', code: 'OM'},
                {name: 'Pakistan', code: 'PK'},
                {name: 'Palau', code: 'PW'},
                {name: 'Palestinian Territory, Occupied', code: 'PS'},
                {name: 'Panama', code: 'PA'},
                {name: 'Papua New Guinea', code: 'PG'},
                {name: 'Paraguay', code: 'PY'},
                {name: 'Peru', code: 'PE'},
                {name: 'Philippines', code: 'PH'},
                {name: 'Pitcairn', code: 'PN'},
                {name: 'Poland', code: 'PL'},
                {name: 'Portugal', code: 'PT'},
                {name: 'Puerto Rico', code: 'PR'},
                {name: 'Qatar', code: 'QA'},
                {name: 'Reunion', code: 'RE'},
                {name: 'Romania', code: 'RO'},
                {name: 'Russian Federation', code: 'RU'},
                {name: 'RWANDA', code: 'RW'},
                {name: 'Saint Helena', code: 'SH'},
                {name: 'Saint Kitts and Nevis', code: 'KN'},
                {name: 'Saint Lucia', code: 'LC'},
                {name: 'Saint Pierre and Miquelon', code: 'PM'},
                {name: 'Saint Vincent and the Grenadines', code: 'VC'},
                {name: 'Samoa', code: 'WS'},
                {name: 'San Marino', code: 'SM'},
                {name: 'Sao Tome and Principe', code: 'ST'},
                {name: 'Saudi Arabia', code: 'SA'},
                {name: 'Senegal', code: 'SN'},
                {name: 'Serbia and Montenegro', code: 'CS'},
                {name: 'Seychelles', code: 'SC'},
                {name: 'Sierra Leone', code: 'SL'},
                {name: 'Singapore', code: 'SG'},
                {name: 'Slovakia', code: 'SK'},
                {name: 'Slovenia', code: 'SI'},
                {name: 'Solomon Islands', code: 'SB'},
                {name: 'Somalia', code: 'SO'},
                {name: 'South Africa', code: 'ZA'},
                {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
                {name: 'Spain', code: 'ES'},
                {name: 'Sri Lanka', code: 'LK'},
                {name: 'Sudan', code: 'SD'},
                {name: 'Suriname', code: 'SR'},
                {name: 'Svalbard and Jan Mayen', code: 'SJ'},
                {name: 'Swaziland', code: 'SZ'},
                {name: 'Sweden', code: 'SE'},
                {name: 'Switzerland', code: 'CH'},
                {name: 'Syrian Arab Republic', code: 'SY'},
                {name: 'Taiwan, Province of China', code: 'TW'},
                {name: 'Tajikistan', code: 'TJ'},
                {name: 'Tanzania, United Republic of', code: 'TZ'},
                {name: 'Thailand', code: 'TH'},
                {name: 'Timor-Leste', code: 'TL'},
                {name: 'Togo', code: 'TG'},
                {name: 'Tokelau', code: 'TK'},
                {name: 'Tonga', code: 'TO'},
                {name: 'Trinidad and Tobago', code: 'TT'},
                {name: 'Tunisia', code: 'TN'},
                {name: 'Turkey', code: 'TR'},
                {name: 'Turkmenistan', code: 'TM'},
                {name: 'Turks and Caicos Islands', code: 'TC'},
                {name: 'Tuvalu', code: 'TV'},
                {name: 'Uganda', code: 'UG'},
                {name: 'Ukraine', code: 'UA'},
                {name: 'United Arab Emirates', code: 'AE'},
                {name: 'United Kingdom', code: 'GB'},
                {name: 'United States', code: 'US'},
                {name: 'United States Minor Outlying Islands', code: 'UM'},
                {name: 'Uruguay', code: 'UY'},
                {name: 'Uzbekistan', code: 'UZ'},
                {name: 'Vanuatu', code: 'VU'},
                {name: 'Venezuela', code: 'VE'},
                {name: 'Viet Nam', code: 'VN'},
                {name: 'Virgin Islands, British', code: 'VG'},
                {name: 'Virgin Islands, U.S.', code: 'VI'},
                {name: 'Wallis and Futuna', code: 'WF'},
                {name: 'Western Sahara', code: 'EH'},
                {name: 'Yemen', code: 'YE'},
                {name: 'Zambia', code: 'ZM'},
                {name: 'Zimbabwe', code: 'ZW'}
            ],
            isActive: false,
            search: ''
        }
    },
    computed: {
        filteredItems() {
            if ( this.search.length < 1 ) {
                return this.items;
            }

            let search = this.search.toLowerCase();
            return this.items.filter(item => item.name.toLowerCase().startsWith(search));
        }
    },
    methods: {
        selectItem(item) {
            this.search = item.name;
            this.isActive = false;
        },
        open() {
            this.search = '';
            this.isActive = true;
            this.defaultText = "Search country";
        },
        close() {
            this.isActive = false;
            this.defaultText = "Choose country";
        },
        choseFirstItem() {
            let items = this.filteredItems;

            if ( !items[0] ) {
                return;
            }

            this.selectItem( items[0] );
            this.$refs.input.blur();
        }
    },
    created() {
        let vm = this;

        document.addEventListener("click", function(event) {
            if ( !event.target.closest('.select') ) {
                vm.close();
            }
        });
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
.select {
    width: 300px;
    margin: 0 auto;
    position: relative;
    font-size: 18px;
    max-width: 100%;
}
.select__inner {
    background-color: #fff;
    border-radius: 5px;
}
.select__input {
    width: 100%;
    border: 0;
    padding: 15px;
    font-size: 18px;
    color: #333;
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    z-index: 1;
}
.select__icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    line-height: 0;
    width: 32px;
    height: 32px;
}
.select__icon svg {
    width: 100%;
    height: 100%;
}
.select__input::placeholder {
    color: #333;
    opacity: 1;
}
.select__list-holder {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    height: 270px;
    margin-top: 10px;
}
.select__list {
    position: absolute;
    top: 10px;
    left: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    max-height: 260px;
    width: 100%;
    overflow: auto;
    background-color: #fff;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: 0px 10px 30px 4px rgba(0,0,0,0.15);
    line-height: 1.3;
    z-index: 10;
}
.select-list-arrow {
    position: absolute;
    top: 0;
    right: 15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    z-index: 11;
}
.select__list::-webkit-scrollbar {
    width: 8px;
}
.select__list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #ddd;
    border-radius: 0;
}
.select__list::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.5);
    border-radius: 100px;
}
.select-list-item {
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    color: #333;
    cursor: pointer;
}
.select-list-item.no-results {
    cursor: auto;
}
.select-list-item:last-child {
    border-bottom: 0;
}
.transform-enter {
    opacity: 0;
    transform: translateY(30px)
}
.transform-enter-active {
    transition: 0.25s;
}
.transform-leave {
    opacity: 0;
    transform: translateY(30px)
}
.transform-leave-active {
    transition: 0.25s;
}
</style>
