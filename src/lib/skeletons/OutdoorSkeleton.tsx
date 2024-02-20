export function OutdoorSkeleton() {
    return (
        <div className="bg-white w-full text-gray-300 shadow-sm">
            <div className="flex flex-col items-center py-4 gap-2">
                <span className="font-bold bg-gray-300 w-36 h-6 animate-pulse rounded-full" />
                <span className="animate-pulse bg-gray-300 h-4 w-1/4 rounded-full" />
            </div>
            <div className="w-full rounded-b-lg border-t-2 p-4">
                <span className="flex items-center m-auto animate-pulse h-4 max-w-xs bg-gray-300 rounded-full" />
            </div>
        </div>
    )
}