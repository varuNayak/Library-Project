import React from 'react'
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Student',
        path: '/student',
        icon: <IoIcons.IoMdSchool />,
        cName: 'nav-text'
    },
    {
        title: 'Book',
        path: '/book',
        icon: <IoIcons5.IoBook />,
        cName: 'nav-text'
    },
    {
        title: 'Transaction',
        path: '/transaction',
        icon: <BiIcons.BiTransfer />,
        cName: 'nav-text'
    },
    {
        title: 'Add Book',
        path: '/add',
        icon: <BiIcons.BiBookAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Delete Book',
        path: '/delete',
        icon: <RiIcons.RiDeleteBin6Fill />,
        cName: 'nav-text'
    },
    {
        title: 'Update Book',
        path: '/update',
        icon: <RiIcons.RiContactsBookUploadFill />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <MdIcons.MdContactPhone />,
        cName: 'nav-text'
    }
]