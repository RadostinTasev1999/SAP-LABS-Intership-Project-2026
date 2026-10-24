
import SideBarHeader from './SideBarHeader'
import SideBarNav from './SideBarNav'
import SideBarFooter from './SideBarFooter'

export default function SideBar(){
    return (
        <div className="group/sidebar flex h-screen">
            {/* Sidebar */}
            <aside className="flex w-64 flex-col border-r border-slate-400 bg-slate-50">
                {/* Header */}
                <SideBarHeader />

                {/* Scrollable content */}

                <SideBarNav />

                {/* Footer */}
                <SideBarFooter />
            </aside>
        </div>
    )
}