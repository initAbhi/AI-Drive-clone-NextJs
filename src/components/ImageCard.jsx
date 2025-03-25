"use client";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const ImageCard = ({ asset }) => {
  const { public_id, display_name, asset_id } = asset;
  const downloadImage = () => {
    const imgSrc = document.getElementById(public_id).src;
    saveAs(imgSrc, display_name);
  };

  const [removeBackground, setRemoveBackground] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <CldImage
          src={public_id}
          width="300"
          height={"300"}
          id={public_id}
          removeBackground={removeBackground}
          grayscale={grayscale}
          alt={display_name}
          replaceBackground={prompt}
          crop={{ type: "auto", source: true }}
          className="rounded-t-lg"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {display_name}
          </h5>
        </a>
        {/* <input type="checkbox" name="background" id="background" /> */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <label htmlFor={`background-${asset_id}`}>Remove Backgournd</label>
            <Switch
              id={`background-${asset_id}`}
              checked={removeBackground}
              onCheckedChange={() => setRemoveBackground(!removeBackground)}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor={`grayscale-${asset_id}`}>Grayscale</label>
            <Switch
              id={`grayscale-${asset_id}`}
              checked={grayscale}
              onCheckedChange={() => setGrayscale(!grayscale)}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Change Background with prompt(Beta)"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <button className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
              Generate
            </button>
          </div>
          <button
            onClick={downloadImage}
            className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            🡣 Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
