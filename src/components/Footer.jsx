import React from "react"

export default function Footer() {

    return(
        <footer className="bg-primary text-primary-content flex items-center justify-between px-5 py-[1vh]">
            <a href="#" className="flex items-center sm:mb-0">
                <h4 className="cursor-pointer font-bold m-0"> &lt;ceejpineda /&gt;</h4>
            </a>
            <span className="text-sm sm:text-center">© 2023 <a href="#" className="hover:underline">Carlo Jay Pineda</a>. All Rights Reserved.</span>
        </footer>
    )
}