import axios from "axios";
import React, { useState } from "react";
import "./style.css";
const ImgUpload = ({ priviesImage, handelBlur }) => {
  const [image, setImage] = useState("");
  const uploadImage = (img) => {
    handelBlur({ image: "" });
    let body = new FormData();
    body.set("key", "df4598080cf75bed94d127b4e328aa24");
    body.append("image", img);

    return axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    });
  };

  const upload = (e) => {
    uploadImage(e.target.files[0]).then((resp) => {
      setImage(resp.data.data.image.url);
      handelBlur({ image: resp.data.data.image.url });
    });
    e.preventDefault();
  };
  return (
    <>
      <div class="overflow-hidden relative w-64 mt-4 mb-4">
        <input
          class="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full inline-flex items-center"
          type="file"
          class="upload"
          onChange={upload}
        />
      </div>
      {(priviesImage || image) && (
        <img
          src={image || priviesImage}
          height={200}
          width={200}
          style={{ objectFit: "cover", margin: "10px 0" }}
        />
      )}
    </>
  );
};

export default ImgUpload;
