import React, { PropsWithChildren, ReactElement } from 'react';

function CharityCard({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-row min-h-[200px] rounded items-stretch mt-3 bg-white shadow-md">
            <div className="w-[200px] rounded p-2 text-gray-400 flex flex-col items-center hover:shadow-lg cursor-pointer ">
                {children}
            </div>
        </div>
    );
}

export default CharityCard;