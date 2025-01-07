import React from 'react'
import axios from 'axios'

//main instance of tmdb
const SingReqToTmdb = axios.create({
        baseURL:"https://api.themoviedb.org/3/",
        headers:{
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjlmYjU3YTA3Zjg3ZmFiZGFhYmQxOTI3OTRlMzVmZSIsIm5iZiI6MTczNjE5NTcxMS44NjIwMDAyLCJzdWIiOiI2NzdjM2U3ZjE1Y2FmZThhYWQ3NDkxZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bOnnrixT8EUQ7qRFDeD-occtC-TXwB1o4KasyDwNPWo'
        }
    })
export default SingReqToTmdb
