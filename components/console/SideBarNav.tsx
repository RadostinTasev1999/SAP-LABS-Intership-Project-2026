
import OverviewMenu from './OverviewMenu'
import OperationsMenu from './OperationsMenu'
import BusinessMenu from './BusinessMenu'
import SystemMenu from './SystemMenu'

export default function SideBarNav() {

    return(
        <div className="min-h-0 flex-1 overflow-y-auto">

            {/* Overview */}
            <OverviewMenu />
            {/* Operations group */}
            <OperationsMenu />

            {/* Business group */}
            <BusinessMenu />

            {/* System group */}
            <SystemMenu />
        </div>
    )
}