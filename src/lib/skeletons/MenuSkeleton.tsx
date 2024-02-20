import { BsScissors } from "react-icons/bs";

export function MenuSkeleton() {
    return (
        <div>
            <div className="flex items-center mb-6 gap-2">
                <h3 className="flex items-center gap-2 text-base">
                    Pronto para pedir?
                    <BsScissors />
                </h3>
                <hr className="flex border-1 flex-1 rounded-full" />
            </div>
            <div className="max-h-[500px] rounded-sm bg-white">
                <div className="h-12 flex items-center w-full justify-between py-10 px-6 animate-pulse">
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-14" />
                </div>
                <div className="h-12 flex items-center w-full justify-between py-10 px-6 animate-pulse">
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16" />
                </div>
                <div className="h-12 flex items-center w-full justify-between py-10 px-6 animate-pulse">
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-14" />
                </div>
                <div className="h-12 flex items-center w-full justify-between py-10 px-6 animate-pulse">
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16" />
                </div>
                <div className="h-12 flex items-center w-full justify-between py-10 px-6 animate-pulse">
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-14" />
                </div>
                <div className="h-12 flex items-center w-full justify-between py-10 px-6 animate-pulse">
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                    <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16" />
                </div>
            </div>
        </div>
    )
}