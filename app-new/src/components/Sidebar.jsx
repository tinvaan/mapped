
import {AirTempCheckBox, ConfigSubmit, HumidityCheckBox, RainFallCheckBox} from './sidebar/Inputs'
import {SummaryHeader, AirTempSummary, HumiditySummary, RainFallSummary} from './sidebar/Summary'


export default function ConfigView() {
  return (
    <>
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="pointer-events-auto relative w-screen max-w-md">

          <div id="sidebar-container" className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div className="px-4 sm:px-6">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                  <SummaryHeader />

                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <RainFallSummary />
                    <HumiditySummary />
                    <AirTempSummary />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-6 flex-1 px-4 sm:px-6">
              <div className="relative flex flex-col rounded-xl bg-white shadow">
                <nav className="flex min-w-[240px] flex-col gap-1 p-2">
                  <RainFallCheckBox />
                  <HumidityCheckBox />
                  <AirTempCheckBox />
                </nav>
              </div>

              <ConfigSubmit />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}