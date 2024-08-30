import { CopyButton } from "./CopyButton"

export const Hero = () => {
    return <div className="h-[100vh] w-[100%] p-4">
        <div className="h-fill border-[4px] rounded-[20px] border-teal flex items-center justify-center">
            <div className="space-y-4">
                <div className="flex items-center justify-center -m-20">
                    <img src="https://raw.githubusercontent.com/SovaSniper/tuskscript/master/icon.png" width="270" />
                </div>

                <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl my-2">
                    create-<span className="text-teal">tusk</span>-app
                </h1>

                <pre className="border-neo-brutalism-purple rounded-[12px] py-2 px-6 bg-white text-black flex items-center !justify-between">
                    <div>npm install tuskscript</div>
                    <CopyButton value="asdas" />
                </pre>

                <div className="flex items-center justify-center">
                    <a className="hover:text-black py-2.5 px-5 me-2 mb-2 border-[3px] rounded-[18px] border-teal hover:bg-teal" href="https://www.walrus.xyz/" target="_blank">
                        Walrus
                    </a>
                    <a className="hover:text-black py-2.5 px-5 me-2 mb-2 border-[3px] rounded-[18px] border-teal hover:bg-teal" href="https://www.npmjs.com/package/tuskscript" target="_blank">
                        Tuskscript
                    </a>
                </div>
            </div>
        </div>
    </div>

}