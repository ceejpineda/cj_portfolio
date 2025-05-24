import React from "react"

export default function Footer() {

    return(
        <footer className="bg-primary text-primary-content flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left px-5 py-[1vh] gap-2 sm:gap-0">
            <a href="#" className="flex items-center">
                <h4 className="cursor-pointer font-bold m-0"> &lt;ceejpineda /&gt;</h4>
            </a>
            <span className="text-sm">© 2024. All Rights Reserved.</span>
        </footer>
    )
}