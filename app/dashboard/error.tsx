"use client"

export default function DashboardError({
    error
}: {
    error: Error
}){

    return (
        <div className="text-center py-12">
            <h2>Something went wrong</h2>
        </div>
    )
}