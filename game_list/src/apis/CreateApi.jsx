import React from "react";
import axios from 'axios'
const key='76be667501374b29871a6f583f1cc767';

const axioscreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getgenre =await axioscreate.get('/genre?key'+key);