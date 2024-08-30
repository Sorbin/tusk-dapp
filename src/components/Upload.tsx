import { useEffect, useState } from 'react'
import { ExistingBlob, NewBlob, WalrusClient } from 'tuskscript'
import { button } from '../App'
import { CopyButton } from './CopyButton'

export const Upload = () => {
    const [file, setFile] = useState<any>(null)
    const [uploading, setUploading] = useState(false)
    const [storeResult, setStoreResult] = useState<NewBlob | ExistingBlob | null>(null)
    const [codeSnippet, setCodeSnippet] = useState<string>("")

    useEffect(() => {
        setCodeSnippet(`import { WalrusClient } from 'tuskscript'

const client = new WalrusClient()
const result = await client.store(file)
                `.trim())
    }, [])

    const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            console.log(event.target.files[0]);
            setFile(event.target.files[0])
        }
    }

    const handleUpload = async () => {
        if (!file) {
            return;
        }

        const client = new WalrusClient()

        try {
            setStoreResult(null)

            setUploading(true)
            const result = await client.store(file)

            setStoreResult(result)
        } catch (e: any) {
            console.error(e)
        } finally {
            setUploading(false)
        }
    }

    return <>
        <div className="flex-grow h-[65%] border-neo-brutalism bg-[#cbfaf4] text-black flex items-center justify-center overflow-auto">
            <div>
                <pre>
                    {storeResult && JSON.stringify(storeResult, null, 2)}
                </pre>
                <input className="border-neo-brutalism"
                    onChange={onFileInputChange}
                    type="file" />
                <button onClick={handleUpload} disabled={uploading}
                    className={`${button} hover:bg-[#79F7FF] flex-grow w-[60%] my-4`}>
                    {uploading ? "Uploading..." : "Upload"}
                </button>
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