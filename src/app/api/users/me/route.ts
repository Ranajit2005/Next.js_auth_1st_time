import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/DataFromToken";

connect(); //connecting to the database

export async function POST(request: NextRequest){
    
}