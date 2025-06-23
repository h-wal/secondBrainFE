interface RedirectpropsInterface{
    text: string,
    redirect: string,
    redirectText: string
}
export const Redirect = (props: RedirectpropsInterface) => {
    return(
        <div className="text-xs text-gray-400 mt-4 flex gap-1">
            <div>
                {props.text}
            </div>
            <div>
                <a href={props.redirect} className="underline text-blue-500">{props.redirectText}</a>
            </div>
        </div>
    )

}