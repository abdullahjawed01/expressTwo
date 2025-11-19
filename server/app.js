import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT


app.get("/",(req,res)=>{
try {
    

    res.status(200).json({msg:"Hello CFI"})






} catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
}
})

app.listen(PORT,()=>{
    console.log(`Hello the code is running on port http://localhost${PORT} `);
})
