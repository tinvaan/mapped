
export function SummaryHeader() {
  return (
    <>
      <svg className="w-12 h-12" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" fill="#f0f0f0" r="256"/>
        <path d="m0 256.001c0-141.385 114.616-256.001 256-256.001s256 114.616 256 256.001" fill="#d80027"/>
        <g fill="#f0f0f0">
          <path d="m155.826 133.564c0-37.298 26.213-68.456 61.217-76.101-5.38-1.174-10.961-1.811-16.696-1.811-43.031 0-77.913 34.882-77.913 77.913s34.882 77.913 77.913 77.913c5.733 0 11.315-.637 16.696-1.812-35.004-7.645-61.217-38.803-61.217-76.102z"/>
          <path d="m256 61.217 5.526 17.005h17.881l-14.467 10.511 5.526 17.005-14.466-10.509-14.466 10.509 5.526-17.005-14.466-10.511h17.88z"/>
          <path d="m212.625 94.608 5.525 17.006h17.881l-14.466 10.51 5.526 17.005-14.466-10.509-14.468 10.509 5.527-17.005-14.467-10.51h17.881z"/>
          <path d="m299.376 94.608 5.527 17.006h17.88l-14.467 10.51 5.527 17.005-14.467-10.509-14.466 10.509 5.526-17.005-14.466-10.51h17.88z"/>
          <path d="m282.681 144.695 5.526 17.006h17.88l-14.466 10.51 5.526 17.005-14.466-10.509-14.466 10.509 5.526-17.005-14.466-10.51h17.879z"/>
          <path d="m229.32 144.695 5.525 17.006h17.882l-14.467 10.51 5.527 17.005-14.467-10.509-14.467 10.509 5.526-17.005-14.466-10.51h17.881z"/>
        </g>
      </svg>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Singapore, SG</h2>
    </>
  )
}

export function AirTempSummary() {
  return (
    <>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512">
          <defs>
            <symbol id="meteoconsThermometerFahrenheit0" viewBox="0 0 99.5 70.9">
              <path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4ZM99.5 17.9V2.6H47.4v68.3h18V44.7h28.9V30.1H65.4V17.9h34.1z" />
            </symbol>
            <symbol id="meteoconsThermometerFahrenheit1" viewBox="0 0 72 168">
              <circle cx="36" cy="132" r="36" fill="#ef4444" />
              <path fill="none" stroke="#ef4444" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="24" d="M36 12v120">
                <animateTransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0" />
              </path>
            </symbol>
            <symbol id="meteoconsThermometerFahrenheit2" viewBox="0 0 118 278">
              <path fill="none" stroke="#cbd5e1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28" />
            </symbol>
            <symbol id="meteoconsThermometerFahrenheit3" viewBox="0 0 118 278">
              <use width="72" height="168" href="#meteoconsThermometerFahrenheit1" transform="translate(23 87)" />
              <use width="118" height="278" href="#meteoconsThermometerFahrenheit2" />
            </symbol>
          </defs>
          <use width="99.5" height="70.9" href="#meteoconsThermometerFahrenheit0" transform="translate(314 250)" />
          <use width="118" height="278" href="#meteoconsThermometerFahrenheit3" transform="translate(197 117)" />
        </svg>
        31 °C
      </div>
    </>
  )
}

export function HumiditySummary() {
  return (
    <>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512">
          <defs>
            <linearGradient id="meteoconsHumidityFill0" x1="14.8" x2="124.2" y1="42.3" y2="231.7" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3392d6" />
              <stop offset=".5" stopColor="#3392d6" />
              <stop offset="1" stopColor="#2477b2" />
            </linearGradient>
            <symbol id="meteoconsHumidityFill1" viewBox="0 0 164 245.6">
              <path fill="url(#meteoconsHumidityFill0)" stroke="#2885c7" strokeMiterlimit="10" strokeWidth="4" d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3S130.7 75.5 82 3.6Z">
                <animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1" />
              </path>
            </symbol>
          </defs>
          <use width="164" height="245.6" href="#meteoconsHumidityFill1" transform="translate(173.9 133.01)" />
          <path fill="#fff" d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 0 1-.6 2.6l-53 73.3a9.4 9.4 0 0 1-2.8 2.8a12.3 12.3 0 0 1-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 0 1 .7-2.8l53-73.3a7 7 0 0 1 2.6-2.7a12.7 12.7 0 0 1 4.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z" />
        </svg>
        68 %
      </div>
    </>
  )
}

export function RainFallSummary() {
  return (
    <>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512">
          <defs>
            <linearGradient id="meteoconsExtremeRainFill0" x1="52.7" x2="133.4" y1="9.6" y2="149.3" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#9ca3af" />
              <stop offset=".5" stopColor="#9ca3af" />
              <stop offset="1" stopColor="#6b7280" />
            </linearGradient>
            <linearGradient id="meteoconsExtremeRainFill1" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#6b7280" />
              <stop offset=".5" stopColor="#6b7280" />
              <stop offset="1" stopColor="#4b5563" />
            </linearGradient>
            <linearGradient id="meteoconsExtremeRainFill2" x1="1381.3" x2="1399.5" y1="-1144.7" y2="-1097.4" gradientTransform="rotate(-9 8002.567 8233.063)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0b65ed" />
              <stop offset=".5" stopColor="#0a5ad4" />
              <stop offset="1" stopColor="#0950bc" />
            </linearGradient>
            <linearGradient id="meteoconsExtremeRainFill3" x1="1436.7" x2="1454.9" y1="-1137" y2="-1089.7" gradientTransform="rotate(-9 8009.537 8233.037)" href="#meteoconsExtremeRainFill2" />
            <linearGradient id="meteoconsExtremeRainFill4" x1="1492.1" x2="1510.3" y1="-1129.3" y2="-1082.1" gradientTransform="rotate(-9 8016.566 8233.078)" href="#meteoconsExtremeRainFill2" />
            <symbol id="meteoconsExtremeRainFill5" viewBox="0 0 200.3 126.1">
              <path fill="url(#meteoconsExtremeRainFill0)" stroke="#848b98" strokeMiterlimit="10" d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z" />
            </symbol>
            <symbol id="meteoconsExtremeRainFill6" viewBox="0 0 350 222">
              <path fill="url(#meteoconsExtremeRainFill1)" stroke="#5b6472" strokeMiterlimit="10" strokeWidth="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z" />
            </symbol>
            <symbol id="meteoconsExtremeRainFill7" viewBox="0 0 398 222">
              <use width="200.3" height="126.1" href="#meteoconsExtremeRainFill5" transform="translate(198 27)">
                <animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0" />
              </use>
              <use width="350" height="222" href="#meteoconsExtremeRainFill6">
                <animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0" />
              </use>
            </symbol>
            <symbol id="meteoconsExtremeRainFill8" viewBox="0 0 129 57">
              <path fill="url(#meteoconsExtremeRainFill2)" stroke="#0a5ad4" strokeMiterlimit="10" d="M8.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0">
                <animateTransform id="meteoconsExtremeRainFill9" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60" />
                <animate id="meteoconsExtremeRainFilla" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0" />
              </path>
              <path fill="url(#meteoconsExtremeRainFill3)" stroke="#0a5ad4" strokeMiterlimit="10" d="M64.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0">
                <animateTransform id="meteoconsExtremeRainFillb" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60" />
                <animate id="meteoconsExtremeRainFillc" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0" />
              </path>
              <path fill="url(#meteoconsExtremeRainFill4)" stroke="#0a5ad4" strokeMiterlimit="10" d="M120.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0">
                <animateTransform id="meteoconsExtremeRainFilld" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60" />
                <animate id="meteoconsExtremeRainFille" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0" />
              </path>
            </symbol>
          </defs>
          <use width="398" height="222" href="#meteoconsExtremeRainFill7" transform="translate(68.84 145)" />
          <use width="129" height="57" href="#meteoconsExtremeRainFill8" transform="translate(191.5 343.5)" />
        </svg>
        0.0 mm
      </div>
    </>
  )
}