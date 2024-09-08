"use client"

import { DownloadIcon } from "lucide-react"
import { Button } from "./ui/button"

const DownloadCom = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => alert("Currenly we have only web. The mobile app is Comming Soon..")} className="bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300 transform hover:scale-105">
                <DownloadIcon className="w-4 h-4 mr-2" />
                iOS App
            </Button>
            <Button onClick={() => alert("Currenly we have only web. The mobile app is Comming Soon..")} className="bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300 transform hover:scale-105">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Android App
            </Button>
        </div>
    )
}

export default DownloadCom