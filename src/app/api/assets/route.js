import {v2 as cloudinary} from "cloudinary"
import { NextResponse, NextRequest } from "next/server";




cloudinary.config({
 cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // add your cloud_name
 api_key: process.env.CLOUDINARY_API_KEY, // add your api_key
 api_secret: process.env.COUDINARY_API_SECRET, // add your api_secret
 secure: true
});

export async function GET(req, {params}) {
  const url = req.url.split("?");
  const searchTerm = url[1]
  console.log(url, searchTerm)
    try {
      // const resources = await cloudinary.api.resources({
      //   type: "upload",
      //   prefix: "",
      // });

      const resources = await cloudinary.search.expression(searchTerm).execute();
  
      return NextResponse.json(resources.resources);
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  