"use client";
import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBlogBtnComponent from "../RemoveBlogBtnComponent";
export default function BlogList({ allBlogList }) {
  return (
    <div>
      <div className="px-5">
        <div className="tableHeaderArea flex items-end justify-end">
          {" "}
          <Link href={`/dashboard/blogs/addNew`}>
            {" "}
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded">
              Add new Blog
            </button>
          </Link>
        </div>
        <div class="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Keywords
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Content
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allBlogList?.blogContentData?.map((item) => (
                <tr
                  key={item?._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item?.title}
                  </th>
                  <td className="px-6 py-4">{item?.keywords}</td>
                  <td className="px-6 py-4">{item?.description}</td>
                  <td className="px-6 py-4">{item?.content}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {" "}
                      <Link href={`/dashboard/blogs/editBlog/${item?._id}`}>
                        <HiPencilAlt size={24} />
                      </Link>
                      <RemoveBlogBtnComponent id={item._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}