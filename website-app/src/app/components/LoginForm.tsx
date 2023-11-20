export default function LoginForm() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>
            </div>

            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
            </form>
        </div>
    )
}