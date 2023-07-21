"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Form = () => {

    const router = useRouter();


    const [submitting, setSubmitting] = useState(false)


        const handleSubmit = async (e: any) => {
            e.preventDefault();
            setSubmitting(true);
            let username = document.getElementById("username");
            let password = document.getElementById("password");

            if (username.value == "" || password.value == "") {
                alert("Ensure you input a value in both fields!");
            } else {
                // perform operation with form input
                alert("This form has been successfully submitted!");
                console.log(
                `This form has a username of ${username.value} and password of ${password.value}`
                );

                username.value = "";
                password.value = "";
            }
                    }

        return (
        <form id="create">
            <div className="mx-auto max-w-screen-lg">
                <h2 className='my-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Gönderi Oluştur</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    />
                    <button 
                    onClick={handleSubmit}
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 justify-end">
                        Oluştur
                    </button>
                </div>
            </form>
        );
    }

export default Form;
