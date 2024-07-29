import ConnectDB from "./../../../backend/connectDB";
import User from "./../../../backend/models/User";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";


export async function POST (req, res) {
    const { username, email, password } = await req.json();

    try {

        await ConnectDB();
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        return NextResponse.json({ message: 'Inscription réussie !' }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
