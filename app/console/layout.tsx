import SideBar from '@/components/console/SideBar'


export default function ApplicationLayout({
    children
}:{
    children: React.ReactNode
}){
    return (
    <>  
        {/* Side navigation bar */}
        <SideBar />
        {/* Top navigation bar */}
          {children} 
    </> 
    )
}