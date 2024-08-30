import { useEffect, useState } from 'react'
import { WalrusClient } from 'tuskscript'
import { button } from '../App'
import { CopyButton } from './CopyButton'
import { Toggle } from './Toggle'

export const Retrieve = () => {
    const [blobId, setBlobId] = useState("1hM95hQ3oSoMMNrzW9CBxTeLwKFQTMjjfGfUC8V556k")
    const [searching, setSearching] = useState(false)
    const [asBlob, setAsBlob] = useState(true)
    const [result, setResult] = useState<any>(null)
    const [codeSnippet, setCodeSnippet] = useState<string>("")

    useEffect(() => {
        setCodeSnippet(`import { WalrusClient } from 'tuskscript'

const client = new WalrusClient()
const result: any = await client.retrieve(blobId${asBlob ? " , { asBlob: true }" : ""})

setResult(result)
                `.trim())
    }, [asBlob])

    const handleRetrieve = async () => {
        const client = new WalrusClient()

        try {
            setResult(null)

            setSearching(true)
            const result: any = await client.retrieve(blobId, {
                asBlob
            })

            setResult(result)
        } catch (e: any) {
            console.error(e)
        } finally {
            setSearching(false)
        }
    }

    const downloadBlob = () => {
        const url = URL.createObjectURL(result);
        const link = document.createElement('a');
        link.href = url;
        link.download = blobId; // Set the filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    return <>
        <div className="flex-grow h-[65%] border-neo-brutalism bg-[#cbfaf4] text-black flex items-center justify-center overflow-auto">
            <div>
                <div>
                    {result && <>
                        {result instanceof Blob
                            ? <div>
                                <pre>
                                    Size: {result.size}
                                    Type: {result.type}
                                </pre>

                                <button className="border-black border-2 rounded-full bg-purple hover:bg-purple active:bg-[#f774ea] w-10 h-10 flex items-center justify-center"
                                    onClick={downloadBlob}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-hard-drive-download"><path d="M12 2v8" /><path d="m16 6-4 4-4-4" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 18h.01" /><path d="M10 18h.01" /></svg>
                                </button>
                            </div>
                            : <pre>{JSON.stringify(result, null, 2)}</pre>}
                    </>}
                </div>

                <input value={blobId}
                    onChange={(e) => setBlobId(e.target.value)}
                    className="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-purple active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-[18px]"
                    placeholder="Blob ID"
                />

                <div className="flex items-center gap-4 my-4">
                    <button onClick={handleRetrieve} disabled={searching}
                        className={`${button} hover:bg-purple flex-grow w-[60%]`}>
                        {searching ? "Searching..." : "Search"}
                    </button>
                    <div className="flex-grow">
                        <Toggle title="Blob" setToggle={() => setAsBlob(!asBlob)} />
                    </div>
                </div>
            </div>
        </div>

        <div className="relative flex-grow bg-black rounded-[20px] my-4">
            <div className="absolute top-4 right-4">
                <CopyButton value={codeSnippet} />
            </div>
            <pre className="pt-8 p-4"> {/* Add padding to ensure content doesn't overlap the button */}
                {codeSnippet}
            </pre>
        </div>
    </>
}