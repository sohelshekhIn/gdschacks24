"use client";

import TinyMCE from "@/components/TinyMCE";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotePage = ({ params}:{
    params: {
        id: string;
    };
}) => {

    const user = useAuth();
    const router = useRouter();
    useEffect(() => {
        const data = {
          id: params.id,
          uid: user?.user?.uid,
        };
        (async () => {
          const response = await fetch("/api/db/note", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          if (response.status === 200) {
            // redirect to user note /my-notes/id
          } else {
            alert("Error generating course content");
            ``;
            router.push("/my-notes");
          }
       })();
    },[]);
    return (
        <div className="mx-14 my-28 flex">
            <div id="program" className="w-[60%] pr-20 text-justify">
                <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab, cupiditate et quas eaque corporis, ex enim consequuntur, harum porro aliquid aspernatur. Accusamus modi tempora quo. Sit cumque non animi culpa maxime eos fugit unde quo nulla id molestias distinctio repellendus provident odit atque qui minima modi sed, ab sunt sint dignissimos. Molestiae fuga qui sequi! Explicabo culpa odit, consequatur, cumque ad rerum quas sint ut, voluptatibus ducimus maxime modi rem! Quaerat perspiciatis assumenda velit quibusdam impedit sequi est repellendus provident blanditiis. Nostrum ratione praesentium hic maxime iure. Voluptas temporibus facere, aliquam voluptatum accusantium dicta nemo vitae rem! Minus quisquam provident, doloremque ducimus suscipit repudiandae voluptas velit nostrum possimus. Totam, officiis magnam. Quaerat sunt iste quam natus, ad ut perspiciatis.</p>
                <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab, cupiditate et quas eaque corporis, ex enim consequuntur, harum porro aliquid aspernatur. Accusamus modi tempora quo. Sit cumque non animi culpa maxime eos fugit unde quo nulla id molestias distinctio repellendus provident odit atque qui minima modi sed, ab sunt sint dignissimos. Molestiae fuga qui sequi! Explicabo culpa odit, consequatur, cumque ad rerum quas sint ut, voluptatibus ducimus maxime modi rem! Quaerat perspiciatis assumenda velit quibusdam impedit sequi est repellendus provident blanditiis. Nostrum ratione praesentium hic maxime iure. Voluptas temporibus facere, aliquam voluptatum accusantium dicta nemo vitae rem! Minus quisquam provident, doloremque ducimus suscipit repudiandae voluptas velit nostrum possimus. Totam, officiis magnam. Quaerat sunt iste quam natus, ad ut perspiciatis.</p>
                <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab, cupiditate et quas eaque corporis, ex enim consequuntur, harum porro aliquid aspernatur. Accusamus modi tempora quo. Sit cumque non animi culpa maxime eos fugit unde quo nulla id molestias distinctio repellendus provident odit atque qui minima modi sed, ab sunt sint dignissimos. Molestiae fuga qui sequi! Explicabo culpa odit, consequatur, cumque ad rerum quas sint ut, voluptatibus ducimus maxime modi rem! Quaerat perspiciatis assumenda velit quibusdam impedit sequi est repellendus provident blanditiis. Nostrum ratione praesentium hic maxime iure. Voluptas temporibus facere, aliquam voluptatum accusantium dicta nemo vitae rem! Minus quisquam provident, doloremque ducimus suscipit repudiandae voluptas velit nostrum possimus. Totam, officiis magnam. Quaerat sunt iste quam natus, ad ut perspiciatis.</p>
            </div>
            <div className="fixed right-10 w-[40%]">
            <TinyMCE />
            </div>
        </div>
    )
}

export default NotePage;