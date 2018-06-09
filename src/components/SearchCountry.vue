<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">Country</label>
    </div>
    <select class="custom-select" v-model="country">
      <option v-for="countly in countlyList" :value="countly.value" :key="countly.value">{{ countly.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SearchCountry',
  data: function() {
    return {
      countlyList: [
        {
          value: 'us',
          name: 'United States of America'
        },
        {
          value: 'gb',
          name: 'United Kingdom'
        },
        {
          value: 'al',
          name: 'Albania'
        },
        {
          value: 'dz',
          name: 'Algeria'
        },
        {
          value: 'ao',
          name: 'Angola'
        },
        {
          value: 'ai',
          name: 'Anguilla'
        },
        {
          value: 'ag',
          name: 'Antigua and Barbuda'
        },
        {
          value: 'ar',
          name: 'Argentina'
        },
        {
          value: 'am',
          name: 'Armenia'
        },
        {
          value: 'au',
          name: 'Australia'
        },
        {
          value: 'at',
          name: 'Austria'
        },
        {
          value: 'az',
          name: 'Azerbaijan'
        },
        {
          value: 'bs',
          name: 'Bahamas'
        },
        {
          value: 'bh',
          name: 'Bahrain'
        },
        {
          value: 'bb',
          name: 'Barbados'
        },
        {
          value: 'by',
          name: 'Belarus'
        },
        {
          value: 'be',
          name: 'Belgium'
        },
        {
          value: 'bz',
          name: 'Belize'
        },
        {
          value: 'bj',
          name: 'Benin'
        },
        {
          value: 'bm',
          name: 'Bermuda'
        },
        {
          value: 'bt',
          name: 'Bhutan'
        },
        {
          value: 'bo',
          name: 'Bolivia'
        },
        {
          value: 'bw',
          name: 'Botswana'
        },
        {
          value: 'br',
          name: 'Brazil'
        },
        {
          value: 'vg',
          name: 'British Virgin Islands'
        },
        {
          value: 'bn',
          name: 'Brunei Darussalam'
        },
        {
          value: 'bg',
          name: 'Bulgaria'
        },
        {
          value: 'bf',
          name: 'Burkina-Faso'
        },
        {
          value: 'kh',
          name: 'Cambodia'
        },
        {
          value: 'ca',
          name: 'Canada'
        },
        {
          value: 'cv',
          name: 'Cape Verde'
        },
        {
          value: 'ky',
          name: 'Cayman Islands'
        },
        {
          value: 'td',
          name: 'Chad'
        },
        {
          value: 'cl',
          name: 'Chile'
        },
        {
          value: 'cn',
          name: 'China'
        },
        {
          value: 'co',
          name: 'Colombia'
        },
        {
          value: 'cr',
          name: 'Costa Rica'
        },
        {
          value: 'hr',
          name: 'Croatia'
        },
        {
          value: 'cy',
          name: 'Cyprus'
        },
        {
          value: 'cz',
          name: 'Czech Republic'
        },
        {
          value: 'cg',
          name: 'Democratic Republic of the Congo'
        },
        {
          value: 'dk',
          name: 'Denmark'
        },
        {
          value: 'dm',
          name: 'Dominica'
        },
        {
          value: 'do',
          name: 'Dominican Republic'
        },
        {
          value: 'ec',
          name: 'Ecuador'
        },
        {
          value: 'eg',
          name: 'Egypt'
        },
        {
          value: 'sv',
          name: 'El Salvador'
        },
        {
          value: 'ee',
          name: 'Estonia'
        },
        {
          value: 'fm',
          name: 'Federated States of Micronesia'
        },
        {
          value: 'fj',
          name: 'Fiji'
        },
        {
          value: 'fi',
          name: 'Finland'
        },
        {
          value: 'fr',
          name: 'France'
        },
        {
          value: 'gm',
          name: 'Gambia'
        },
        {
          value: 'de',
          name: 'Germany'
        },
        {
          value: 'gh',
          name: 'Ghana'
        },
        {
          value: 'gr',
          name: 'Greece'
        },
        {
          value: 'gd',
          name: 'Grenada'
        },
        {
          value: 'gt',
          name: 'Guatemala'
        },
        {
          value: 'gw',
          name: 'Guinea Bissau'
        },
        {
          value: 'gy',
          name: 'Guyana'
        },
        {
          value: 'hn',
          name: 'Honduras'
        },
        {
          value: 'hk',
          name: 'Hong Kong'
        },
        {
          value: 'hu',
          name: 'Hungary'
        },
        {
          value: 'is',
          name: 'Iceland'
        },
        {
          value: 'in',
          name: 'India'
        },
        {
          value: 'id',
          name: 'Indonesia'
        },
        {
          value: 'ie',
          name: 'Ireland'
        },
        {
          value: 'il',
          name: 'Israel'
        },
        {
          value: 'it',
          name: 'Italy'
        },
        {
          value: 'jm',
          name: 'Jamaica'
        },
        {
          value: 'jp',
          name: 'Japan'
        },
        {
          value: 'jo',
          name: 'Jordan'
        },
        {
          value: 'kz',
          name: 'Kazakhstan'
        },
        {
          value: 'ke',
          name: 'Kenya'
        },
        {
          value: 'kg',
          name: 'Krygyzstan'
        },
        {
          value: 'kw',
          name: 'Kuwait'
        },
        {
          value: 'la',
          name: 'Laos'
        },
        {
          value: 'lv',
          name: 'Latvia'
        },
        {
          value: 'lb',
          name: 'Lebanon'
        },
        {
          value: 'lr',
          name: 'Liberia'
        },
        {
          value: 'lt',
          name: 'Lithuania'
        },
        {
          value: 'lu',
          name: 'Luxembourg'
        },
        {
          value: 'mo',
          name: 'Macau'
        },
        {
          value: 'mk',
          name: 'Macedonia'
        },
        {
          value: 'mg',
          name: 'Madagascar'
        },
        {
          value: 'mw',
          name: 'Malawi'
        },
        {
          value: 'my',
          name: 'Malaysia'
        },
        {
          value: 'ml',
          name: 'Mali'
        },
        {
          value: 'mt',
          name: 'Malta'
        },
        {
          value: 'mr',
          name: 'Mauritania'
        },
        {
          value: 'mu',
          name: 'Mauritius'
        },
        {
          value: 'mx',
          name: 'Mexico'
        },
        {
          value: 'md',
          name: 'Moldova'
        },
        {
          value: 'mn',
          name: 'Mongolia'
        },
        {
          value: 'ms',
          name: 'Montserrat'
        },
        {
          value: 'mz',
          name: 'Mozambique'
        },
        {
          value: 'na',
          name: 'Namibia'
        },
        {
          value: 'np',
          name: 'Nepal'
        },
        {
          value: 'nl',
          name: 'Netherlands'
        },
        {
          value: 'nz',
          name: 'New Zealand'
        },
        {
          value: 'ni',
          name: 'Nicaragua'
        },
        {
          value: 'ne',
          name: 'Niger'
        },
        {
          value: 'ng',
          name: 'Nigeria'
        },
        {
          value: 'no',
          name: 'Norway'
        },
        {
          value: 'om',
          name: 'Oman'
        },
        {
          value: 'pk',
          name: 'Pakistan'
        },
        {
          value: 'pw',
          name: 'Palau'
        },
        {
          value: 'pa',
          name: 'Panama'
        },
        {
          value: 'pg',
          name: 'Papua New Guinea'
        },
        {
          value: 'py',
          name: 'Paraguay'
        },
        {
          value: 'pe',
          name: 'Peru'
        },
        {
          value: 'ph',
          name: 'Philippines'
        },
        {
          value: 'pl',
          name: 'Poland'
        },
        {
          value: 'pt',
          name: 'Portugal'
        },
        {
          value: 'qa',
          name: 'Qatar'
        },
        {
          value: 'tt',
          name: 'Republic of Trinidad and Tobago'
        },
        {
          value: 'ro',
          name: 'Romania'
        },
        {
          value: 'ru',
          name: 'Russia'
        },
        {
          value: 'kn',
          name: 'Saint Kitts and Nevis'
        },
        {
          value: 'lc',
          name: 'Saint Lucia'
        },
        {
          value: 'vc',
          name: 'Saint Vincent and the Grenadines'
        },
        {
          value: 'st',
          name: 'Sao Tome e Principe'
        },
        {
          value: 'sa',
          name: 'Saudi Arabia'
        },
        {
          value: 'sn',
          name: 'Senegal'
        },
        {
          value: 'sc',
          name: 'Seychelles'
        },
        {
          value: 'sl',
          name: 'Sierra Leone'
        },
        {
          value: 'sg',
          name: 'Singapore'
        },
        {
          value: 'sk',
          name: 'Slovakia'
        },
        {
          value: 'si',
          name: 'Slovenia'
        },
        {
          value: 'sb',
          name: 'Soloman Islands'
        },
        {
          value: 'za',
          name: 'South Africa'
        },
        {
          value: 'kr',
          name: 'South Korea'
        },
        {
          value: 'es',
          name: 'Spain'
        },
        {
          value: 'lk',
          name: 'Sri Lanka'
        },
        {
          value: 'sr',
          name: 'Suriname'
        },
        {
          value: 'sz',
          name: 'Swaziland'
        },
        {
          value: 'se',
          name: 'Sweden'
        },
        {
          value: 'ch',
          name: 'Switzerland'
        },
        {
          value: 'tw',
          name: 'Taiwan'
        },
        {
          value: 'tj',
          name: 'Tajikistan'
        },
        {
          value: 'tz',
          name: 'Tanzania'
        },
        {
          value: 'th',
          name: 'Thailand'
        },
        {
          value: 'tn',
          name: 'Tunisia'
        },
        {
          value: 'tr',
          name: 'Turkey'
        },
        {
          value: 'tm',
          name: 'Turkmenistan'
        },
        {
          value: 'tc',
          name: 'Turks and Caicos Islands'
        },
        {
          value: 'ug',
          name: 'Uganda'
        },
        {
          value: 'ua',
          name: 'Ukraine'
        },
        {
          value: 'ae',
          name: 'United Arab Emirates'
        },
        {
          value: 'uy',
          name: 'Uruguay'
        },
        {
          value: 'uz',
          name: 'Uzbekistan'
        },
        {
          value: 've',
          name: 'Venezuela'
        },
        {
          value: 'vn',
          name: 'Vietnam'
        },
        {
          value: 'ye',
          name: 'Yemen'
        },
        {
          value: 'zw',
          name: 'Zimbabwe'
        }
      ]
    };
  },
  computed: {
    country: {
      get() {
        return this.$store.state.search.country;
      },
      set(value) {
        this.$store.commit('search/setCountry', value);
      }
    }
  }
};
</script>
