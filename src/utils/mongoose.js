import { connect, connection } from 'mongoose';

const con = {
    isConnected: false
}

console.log("NEXT_PUBLIC_MONGOOSE_URI", process.env.NEXT_PUBLIC_MONGOOSE_URI);

export async function dbConnect(){
    if(con.isConnected) return;

    const db = await connect(process.env.NEXT_PUBLIC_MONGOOSE_URI);
    con.isConnected = db.connections[0].readyState;

    connection.on('connected',() => {
        console.log('Database connected')
    })

    connection.on('error',(error) => {
        console.log('error while connecting', error.message)
    })
}