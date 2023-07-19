import Image from "next/image"
import styles from "./style.module.css"

export default function Weather() {
    return <div className={"w-full sm:w-1/2 rounded-md h-32 md:h-36 lg:h-40 border border-gray-600 p-2 bg-transparent " + styles.weather}>

        <div className="font-semibold text-lg text-center">Hava Durumu</div>


        <div className="flex flex-row h-20 md:h-24 lg:h-28">
            <div className="flex-grow w-1/2 rounded-l-md flex flex-col justify-evenly py-3 items-center">
                <div className="text-lg font-semibold"><span>Istanbul</span> <span>TR</span></div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-770v-150h60v150h-60Zm256 106-42-42 106-107 42 43-106 106Zm64 214v-60h150v60H770ZM450-40v-150h60v150h-60ZM253-665 148-770l42-42 106 106-43 41Zm518 517L664-254l41-41 108 104-42 43ZM40-450v-60h150v60H40Zm151 302-43-42 105-105 22 20 22 21-106 106Zm289-92q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-180Z" /></svg>
                </div>
                <div className="text-lg font-medium">27 C°</div>
            </div>
            <div className="w-1/2 p-2 md:p-5 flex justify-center items-center">
                <input type="text" id="weather-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
        </div>
    </div >
}