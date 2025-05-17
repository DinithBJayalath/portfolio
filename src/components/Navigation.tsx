import "../static/Navigation.css";

function Navigation() {
    return (
        <nav className="flex mx-8 align-middle items-center min-h-[65px]">
            <ul className="flex gap-4 justify-between min-w-[100%]">
                <li className="flex-2 max-w-[256px]">Dinith_Jayalath_</li>
                <li className="">hello_</li>
                <li>skills_</li>
                <li>projects_</li>
                <li>about_me_</li>
                <li className="min-w-[64px]"></li>
                <li className="">contact_me_</li>
            </ul>
        </nav>
    )
}
export default Navigation;