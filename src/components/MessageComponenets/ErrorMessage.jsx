function ErrorMessage() {
    return (
        <div className=" flex w-full ">
            {' '}
            <div className="relative rounded-xl  z-[100] p-3 !pb-4 !bg-red-200 my-1 border border-red-500 text-gray-700 max-w-[80%] sm:max-w-[50%] shadow-md">
                Une erreur s'est produite. veuillez vérifier votre connexion internet et reéssayez.
            </div>
        </div>
    )
}

export default ErrorMessage
