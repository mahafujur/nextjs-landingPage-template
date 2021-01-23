import React, {useState} from 'react';


export default function CustomDropDown (props)  {
    const [dropDownVisible, setDropDownVisible]= useState(false)

    return (
        <div className="w-16 sm:w-full relative inline-block text-left sm:text-center">
    <div>
        <div
                className="inline-flex justify-center w-full rounded-md   px-2 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-5   "
                aria-haspopup="true"
                aria-expanded="true"
                onClick={()=> setDropDownVisible(!dropDownVisible)}>
            {props.title}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                 fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"/>
            </svg>
        </div>
    </div>
            {dropDownVisible===true &&
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                    <div className="py-2"
                         role="menu"
                         aria-orientation="vertical"
                         aria-labelledby="options-menu">
                        {props.dropDownItems.map(obj => {
                           return  <a href={obj.link}
                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                               role="menuitem">{obj.name}</a>
                        })
                        }
                    </div>
                </div>
            }
</div>
    )}
