"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { root } from "postcss";

export default function Gallery() {
  const [removeBackground, setRemoveBackground] = useState(false);
  const [grayscale, setGrayscale] = useState(false)
  return (
    <div>
      <h1>Gallery</h1>

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://res.cloudinary.com/dpy0duqcb/image/upload/c_auto,w_384,h_384,g_auto/c_limit,w_384/f_auto/q_auto/v1/jjko6stglq1mclrizl9o?_a=BAVAZGDX0 1x, https://res.cloudinary.com/dpy0duqcb/image/upload/c_auto,w_640,h_640,g_auto/c_limit,w_640/f_auto/q_auto/v1/jjko6stglq1mclrizl9o?_a=BAVAZGDX0 2x"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ray-so-export_rn7r8d
            </h5>
          </a>
          {/* <input type="checkbox" name="background" id="background" /> */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label htmlFor="background">Remove Backgournd</label>
              <Switch
                id="background"
                checked={removeBackground}
                onCheckedChange={() => setRemoveBackground(!removeBackground)}
                className="border border-gray-300 bg-gray-200 w-12 h-6 rounded-full"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="grayscale">Grayscale</label>
              <Switch
                id="grayscale"
                checked={grayscale}
                onCheckedChange={() => setGrayscale(!grayscale)}
              />
            </div>
            <div className="flex gap-2">
            <input type="text" placeholder="Change Background with prompt(Beta)" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
            <button
              href="#"
              class="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Generate
            </button>
            </div>
            <button
              href="#"
              class="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              🡣 Download
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
